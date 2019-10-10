import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SinglePostLayout from "../components/singlePostLayout"

const blogPost = props => {
  const { markdownRemark } = props.data
  return (
    <SinglePostLayout>
      <SinglePostWrapper>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
      </SinglePostWrapper>
    </SinglePostLayout>
  )
}

const SinglePostWrapper = styled.div`
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 4rem;
  h1 {
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(60deg, var(--blue), var(--green));
    border-image-slice: 1;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
`

export const query = graphql`
  query SinglePostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        title
      }
      html
    }
  }
`

export default blogPost
