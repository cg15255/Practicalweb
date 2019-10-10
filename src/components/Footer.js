import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">GatsbyJS</a>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 6rem;
  background: var(--footerBlue);
  color: rgba(255, 255, 255, 0.2);
  a {
    color: rgba(255, 255, 255, 0.2);
    text-decoration: underline;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 750px) {
    padding: 4rem;
  }
`

export default Footer
