import Header from "../Header";
import "./index.css";

import { MdEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa6";

const Contact = () => (
  <div>
    <Header />
    <div className="contact-bg-container">
      <p className="contact-heading">
        Get in Touch <br />{" "}
        <span className="span-contat-heading">Contact Me</span>
      </p>
      <div className="contact-details-container">
        <div className="mail-container">
          <MdEmail className="contact-icons" />
          <p className="email">
            <a
              href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AS5LTAQFepIhd_dOEmggejc93Uk6xBxyr4e1NPC-vhKxAYmfgGXnItoGLuuEm_xkJqIisWhGazCjTQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              className="anchor-element"
            >
              rameshvemula157@gmail.com
            </a>
          </p>
        </div>
        <div className="mail-container">
          <TbBrandLinkedin className="contact-icons" />
          <p className="email">
            <a
              href="https://www.linkedin.com/in/rameshvemula/"
              className="anchor-element"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
    <p className="copyright">
      Copyright <FaRegCopyright /> 2023 Ramesh Vemula. All Rights Reserved
    </p>
  </div>
);

export default Contact;
