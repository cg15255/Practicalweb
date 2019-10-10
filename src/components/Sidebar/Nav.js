import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="section-1"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            welcome
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            who we are
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section-3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            what we do
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="section-4"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            get in touch
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}

const Navigation = styled.nav`
  text-transform: uppercase;
  color: #aaa;
  font-size: 0.8rem;
  width: 80%;
  ul {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  li {
    flex-grow: 1;
    text-align: right;
  }

  a.active {
    color: white;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(60deg, var(--blue), var(--green));
    border-image-slice: 1;
  }
  li:first-of-type {
    margin-top: 0;
  }
  a {
    color: #aaa;
    transition: color 0.2s;
    display: block;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
  a:hover {
    color: white;
    transition: color 0.2s;
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    ul {
      flex-direction: row;
      height: 60px;
      align-items: center;
    }
    li {
      font-size: 0.6rem;
      display: block;
      flex-grow: initial;
      margin: 1rem;
    }
    a,
    a.active {
      border: 0;
    }
    li:first-of-type {
      margin-top: 1rem;
    }
  }
`

export default Nav
