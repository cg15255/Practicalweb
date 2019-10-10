import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Button from "../Button"

const FeatureCard = props => {
  return (
    <Feature>
      <div
        className="imageContainer"
        style={{
          background: `url(${props.imageSrc})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="featureContainer" style={{ background: props.bgColor }}>
        {props.children}
        <Button>
          <Link to={props.link}>learn more</Link>
        </Button>
      </div>
    </Feature>
  )
}

const Feature = styled.section`
  display: grid;
  max-width: 100vw;
  grid-template-columns: minmax(150px, 350px) minmax(250px, 1fr);
  .featureContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem;
    h1 {
      margin: 0;
    }
  }
  @media (max-width: 1120px) {
    .featureContainer {
      padding: 3rem;
    }
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    .imageContainer {
      height: 200px;
    }
  }
`

export default FeatureCard
