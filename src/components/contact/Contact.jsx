import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
// import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_09ts22j",
      "template_r153v2a",
      form.current,
      "5mC0J-zjKbwpA-hpG"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>martins8085@gmail.com</h5>
            <a href="mailto:martins8085@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Martins Ake</h5>
            <a href="https://m.me/martinsake8" target="_blank">
              Let's Chat
            </a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>whatsApp</h4>
            <h5>+2348065191675</h5>
            <a href="https://wa.me/2348065191675" target="_blank">
              Let's Chat
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder=" Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
