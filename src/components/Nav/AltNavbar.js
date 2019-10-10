import React from "react"
import styled from "styled-components"

const AltNavbar = () => {
  return (
    <Wrapper>
      <div className="header">
        <nav>
          <h1>Practicalweb</h1>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .header {
    background: var(--blue);
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1100px;
      margin: 0 auto;
      height: 60px;
    }
  }
  @media (max-width: 1000px) {
    main,
    nav {
      padding: 0 2rem;
    }
  }
`

export default AltNavbar
