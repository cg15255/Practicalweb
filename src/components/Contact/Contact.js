import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ContactForm from "./ContactForm"

import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"

const Contact = () => {
  return (
    <ContactWrapper id="section-4">
      <h1>Get in touch</h1>
      <p>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis
        mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget
        hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit
        quis lorem.
      </p>
      <div className="columns">
        <ContactForm />
        <div className="contactDetails">
          <h2>Address</h2>
          <p>12345 Somewhere Road #654 Nashville, TN 00000-0000 USA </p>

          <h2>Email</h2>
          <p>user@practicalweb.io </p>

          <h2>Phone</h2>
          <p>12345 Somewhere Road #654 Nashville, TN 00000-0000 USA </p>

          <h2>Social</h2>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaFacebookF />
          </Link>
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  background: var(--blue);
  padding: 100px;
  max-width: 100vw;
  .columns {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
  .grid-row-1 {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  input,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0.75rem;
    border-radius: 5px;
    margin-top: 1rem;
  }
  textarea {
    height: 250px;
  }
  input:focus,
  textarea:focus {
    border: 2px solid white;
  }
  form {
    padding-right: 2rem;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
  .contactDetails {
    padding-left: 2rem;
  }
  a {
    margin-right: 1rem;
  }
  a:hover {
    color: white;
  }
  @media (max-width: 750px) {
    padding: 3rem;
    .columns {
      grid-template-columns: 1fr;
      justify-content: center;
    }
    form {
      border: none;
      padding: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }
    .grid-row-1 {
      grid-template-columns: 1fr;
    }
    .contactDetails {
      padding-left: 0;
    }
  }
`

export default Contact
