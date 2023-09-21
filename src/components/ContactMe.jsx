import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactMe.css";
import Reveal from "./utils/Reveal";

export const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setUserName("");
    emailjs
      .sendForm(
        "ForPortfolio",
        "template_n6wzg7r",
        form.current,
        "geIpjbKhb-t6yYf8j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contactMe-container">
        <div className="global-title">
          <div>
            <p>Contact Me</p>
          </div>
          <div>
            <p>Contact Me</p>
          </div>
        </div>
        <div className="contactMe" id="contact">
          <div className="c-left-content">
            <Reveal>
              <p>Isparta, Turkey</p>
            </Reveal>
            <Reveal>
              <a href="tel:+905360383661" target="blanked">
                <p>Phone: +90 536 038 3661</p>
              </a>
            </Reveal>
            <Reveal>
              <a href="tel:+9940776002290" target="blanked">
                <p>Phone: +994 077 600 22 90</p>
              </a>
            </Reveal>
            <Reveal>
              <a href="mailto:omarmovlamov@gmail.com">
                <p>Gmail: omarmovlamov@gmail.com</p>
              </a>
            </Reveal>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <Reveal>
              <label>Name</label>
            </Reveal>
            <input
              type="text"
              placeholder="Enter your Name"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Reveal>
              <label>Email</label>
            </Reveal>
            <input
              type="email"
              placeholder="Enter a valid email address"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Reveal>
              <label>Message</label>
            </Reveal>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(`${e.target.value}`)}
            />
            <button type="submit" value="send">
              Send <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
