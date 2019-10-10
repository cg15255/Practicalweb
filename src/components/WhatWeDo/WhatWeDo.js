import React from "react"
import styled from "styled-components"

import {
  MdCode,
  MdLock,
  MdHelp,
  MdSecurity,
  MdSentimentSatisfied,
  MdDesktopMac,
} from "react-icons/md"

const WhatWeDo = () => {
  return (
    <Wrapper>
      <div className="thing">
        <div className="iconWrapper">
          <MdDesktopMac />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
      <div className="thing">
        <div className="iconWrapper">
          <MdSentimentSatisfied />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
      <div className="thing">
        <div className="iconWrapper">
          <MdSecurity />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
      <div className="thing">
        <div className="iconWrapper">
          <MdHelp />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
      <div className="thing">
        <div className="iconWrapper">
          <MdLock />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
      <div className="thing">
        <div className="iconWrapper">
          <MdCode />
        </div>
        <div className="content">
          <h2>Lorem ipsum amet</h2>
          <p>
            Phasellus convallis elit id ullam corper amet et pulvinar. Duis
            aliquam turpis mauris, sed ultricies erat dapibus.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  .thing {
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem;
    display: flex;
  }

  .iconWrapper {
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    margin-left: 1rem;
    width: 300px;
  }
  @media (max-width: 750px) {
    display: block;
    .thing {
      display: grid;
      grid-template-columns: 1fr;
      padding: 1rem;
    }
    .iconWrapper {
      margin-left: 15px;
    }
    .content {
      width: 100%;
    }
  }
`

export default WhatWeDo
