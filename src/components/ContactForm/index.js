import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

import "./index.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uw7qdtr", "template_ewi8eyo", form.current, {
        publicKey: "ed87VgU5B8urJy_jd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Hey there! 👋 I’m thrilled that you stopped by. Whether you want to
            collaborate on a project, discuss web development trends, or just
            say hello, I’d love to hear from you. Fill out the form, and I’ll
            get back to you faster than a page load! 😉
          </p>

          <div className="info">
            <div className="information">
              <ImLocation2 className="icon" />
              <p>Bandlaguda, Hyderabad, 5000008</p>
            </div>
            <div className="information">
              <MdEmail className="icon" />
              <p>rameshvemula157@gmail.com</p>
            </div>
            <div className="information">
              <FaMobileAlt className="icon" />
              <p>+91 81066 64623</p>
            </div>
          </div>

          {/* <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form
            ref={form}
            onSubmit={sendEmail}
            action="index.html"
            autocomplete="off"
          >
            <h3 className="title">Contact me</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Username"
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Mobile Number"
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
