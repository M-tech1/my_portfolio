import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const STATUS = { idle: "idle", sending: "sending", success: "success", error: "error" };

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(STATUS.idle);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(STATUS.sending);

    emailjs
      .sendForm(
        "service_09ts22j",
        "template_r153v2a",
        form.current,
        "5mC0J-zjKbwpA-hpG"
      )
      .then(() => {
        setStatus(STATUS.success);
        e.target.reset();
      })
      .catch(() => {
        setStatus(STATUS.error);
      });
  };

  return (
    <section id="contact" data-reveal>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>martins8085@gmail.com</h5>
            <a href="mailto:martins8085@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348065191675</h5>
            <a href="https://wa.me/2348065191675" target="_blank" rel="noreferrer">
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
            disabled={status === STATUS.sending}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={status === STATUS.sending}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            disabled={status === STATUS.sending}
          />

          {status === STATUS.success && (
            <p className="contact__feedback contact__feedback--success">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === STATUS.error && (
            <p className="contact__feedback contact__feedback--error">
              Something went wrong. Please try WhatsApp or email directly.
            </p>
          )}

          <button type="submit" className="btn btn-primary" disabled={status === STATUS.sending}>
            {status === STATUS.sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
