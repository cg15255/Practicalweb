import React from "react"
import styled from "styled-components"

import Nav from "./Nav"

const Menu = () => {
  return (
    <MainNav>
      <Nav />
    </MainNav>
  )
}

const MainNav = styled.div`
  background: var(--darkBlue);
  position: fixed;
  height: 100vh;
  width: var(--sidebarWidth);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    top: 0;
    height: 60px;
    width: 100vw;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

export default Menu
