import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d78f90k",
        "template_anddcjo",
        form.current,
        "5bq0jafe7Rm_K3tFh"
      )
      .then(
        (result) => {
          console.log(e.target.reset());
          console.log("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <h2>Contact Us</h2>
      <div id="form-contactUs">
        <form id="contactUs-id" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>{" "}
        <Link to={"/"}>
          <button id="btn-homepage">Homepage</button>
        </Link>
      </div>
    </>
  );
}

export default ContactUs;
