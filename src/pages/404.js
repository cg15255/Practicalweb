import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Footer from "../components/Footer"

const NotFoundPage = () => (
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
    <main>
      <h1>404</h1>
      <p>Whoops! This page cannot be found!</p>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </main>
    <Footer />
  </Wrapper>
)

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
  main {
    background: var(--darkBlue);
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 4rem;
    }
    p {
      margin: 0;
      a {
        text-decoration: underline;
      }
    }
  }
  p:last-of-type {
    margin-bottom: 0;
    padding-bottom: 2rem;
  }
  footer {
    background: var(--singlePostFooter);
  }
  @media (max-width: 1000px) {
    main,
    nav {
      padding: 0 2rem;
    }
  }
`

export default NotFoundPage
