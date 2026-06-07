import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const STATUS = { idle: "idle", sending: "sending", success: "success", error: "error" };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.idle);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.sending);

    try {
      await addDoc(collection(db, "contact_messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        sentAt: serverTimestamp(),
      });
      setStatus(STATUS.success);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus(STATUS.error);
    }
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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            disabled={status === STATUS.sending}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={status === STATUS.sending}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
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

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === STATUS.sending}
          >
            {status === STATUS.sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
