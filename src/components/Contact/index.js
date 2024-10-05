import "./index.css";

import { MdEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="contact-bg-container">
        <p className="contact-heading">
          Get in Touch <br />
          <span className="span-contat-heading">Contact Me</span>
        </p>
        <div className="contact-details-container">
          <div className="mail-container">
            <p className="email">
              <a
                href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AS5LTAQFepIhd_dOEmggejc93Uk6xBxyr4e1NPC-vhKxAYmfgGXnItoGLuuEm_xkJqIisWhGazCjTQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                className="anchor-element"
              >
                <MdEmail className="contact-icons" /> rameshvemula157@gmail.com
              </a>
            </p>
          </div>
          <div className="mail-container">
            <p className="email">
              <a
                href="https://www.linkedin.com/in/rameshvemula/"
                className="anchor-element"
              >
                <TbBrandLinkedin className="contact-icons" /> Linkedin
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
