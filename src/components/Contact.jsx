import React from "react";
import "../styles/contact.css";
import { Button, Form, InputGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <div className="contact-grid-parent">
        <div>
          <h1>Contact</h1>
          <p>PixaVibe</p>
          <span>Ahmednagar, Maharashtra</span>
        </div>
        <div>
          <span>Wanna Contribute to this project?</span>
          <a href="tel:+91-8788665232">Call Me : +91-8788665232</a>
          <a href="mailto:sachinri8987@gamil.com?subject=Inquiry&body=Hello%20Sachin">
            Email : sachinri8987@gmail.com
          </a>
        </div>
        <div>
          <span>Subscribe to my NewsLetter</span>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Your Email Address"
              aria-label="Your Email Address"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Contact;
