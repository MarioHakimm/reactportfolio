import React from 'react'
import "./Getintouch.css"
import { Link } from 'react-router-dom';
function Getintouch() {
  return (
    <>
      <div className="cdiv">
        <h2 id="h2-getInTouch">Get In Touch</h2>
        <p>
          Thank you for visiting our website! If you have any questions,
          comments, or inquiries, please don't hesitate to contact us using the
          form below. We appreciate your interest in our products/services and
          will do our best to respond to your message as soon as possible.
          Alternatively, you can also reach out to us directly by clicking on
          the button below. We look forward to hearing from you.
        </p>
        <Link to={"/ContactUs"}>
          <button id="btn-ContactMe">CONTACT US</button>
        </Link>
      </div>
    </>
  );
}

export default Getintouch