import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = ({ children, to }) => {
  return (
    <MainButton>
      <Link to={to}>{children}</Link>
    </MainButton>
  )
}

const MainButton = styled.button`
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 30px;
  border: 1px solid var(--outlineGrey);
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  width: 170px;
  background: transparent;
  color: inherit;
  transition: background 0.15s;
  &:hover {
    transition: background 0.15s;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
  }
`

export default Button
