import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Footer from "../components/Footer"

const IndexPage = () => (
  <SuccessWrapper>
    <div>
      <h2>
        Thanks for the message! <br />
        We will review and get back to you as soon as possible!
      </h2>
      <p>
        Head back to the <Link to="/">home page</Link>
      </p>
    </div>
    <Footer />
  </SuccessWrapper>
)

const SuccessWrapper = styled.section`
  height: 100vh;
  background: var(--blue);
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
  }
  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  footer {
    margin-top: auto;
    width: 100%;
  }
  a {
    text-decoration: underline;
  }
  a:hover {
    color: var(--green);
  }
`

export default IndexPage
