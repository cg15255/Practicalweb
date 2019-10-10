import React from "react"
import Button from "../Button"

const ContactForm = () => {
  return (
    <form
      id="contactForm"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/"
    >
      <div className="grid-row-1">
        <div className="formgroup">
          <label htmlFor="name">
            <h2>Name</h2>
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="formgroup">
          <label htmlFor="email">
            <h2>Email</h2>
          </label>
          <input type="email" name="email" id="email" />
        </div>
      </div>
      <div className="grid-row-2">
        <div className="formgroup">
          <label htmlFor="message">
            <h2>Message</h2>
          </label>
          <textarea name="message" id="message"></textarea>
        </div>
      </div>
      <Button type="submit">send message</Button>
    </form>
  )
}

export default ContactForm
