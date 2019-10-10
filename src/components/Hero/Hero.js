import React from "react"
import styled from "styled-components"
import Button from "../Button"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <HeroWrapper id="section-1">
      <div className="inner">
        <h1>Practicalweb</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus.
        </h3>
        <Button>
          <Link
            activeClass=""
            to="section-2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            learn more
          </Link>
        </Button>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
  background: var(--blue);
  padding: 100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  h3 {
    color: #ccc;
    line-height: 3rem;
    font-weight: 500;
    font-size: 1.4rem;
    max-width: 800px;
  }
  @media (max-width: 1227px) {
    padding: 200px 40px 40px 40px;
    max-width: 100vw;
    display: block;
    text-align: center;
    .inner {
      display: block;
      max-width: 100%;
    }
    h3 {
      font-size: 1.2rem;
      max-width: 80%;
      margin: 50px auto;
    }
  }
  @media (max-width: 600px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Hero
