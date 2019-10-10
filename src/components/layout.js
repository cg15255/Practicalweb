import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Menu from "./Sidebar/Menu"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Menu />
      <main>{children}</main>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: var(--sidebarWidth) minmax(300px, 1fr);
  main {
    grid-column 2 / -1;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr
    max-width: 100vw;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
