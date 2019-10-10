import React from "react"
import styled from "styled-components"

import Button from "../Button"
import WhatWeDo from "./WhatWeDo"

const WhatWeDoWraper = () => {
  return (
    <Wrapper id="section-3">
      <h1>What we do</h1>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
        mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
        hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
        quis lorem.
      </p>
      <WhatWeDo />
      <Button>learn more</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 100vw;
  background: var(--green);
  padding: 80px 100px;
  @media (max-width: 900px) {
    padding: 40px;
  }
`

export default WhatWeDoWraper
