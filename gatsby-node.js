const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(
    `
      query loadPagesQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/posts/${edge.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: edge.node.frontmatter.slug,
        },
      })
    })
  })
}
