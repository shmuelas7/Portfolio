import React, { useContext, useRef, useState } from "react";
import styles from "./style.module.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../context/themeContext";
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ouhdtka",
        "template_v9uwgl2",
        form.current,
        "i806zLn7gD28dVHS7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className={styles.header}>Contact me</h2>
      <div className={styles.contact_form} id="contact">
        <div className={styles.w_left}>
          <div className={styles.container}>
            <div className={styles.box}>
              <FiPhoneCall className={styles.icon} />
              <span className={styles.span}>0533329773</span>
            </div>

            <div className={styles.box}>
              <AiFillLinkedin className={styles.icon} />
              <span className={styles.span}>Shmuel Asherov</span>
            </div>
            <div className={`${styles.box} ${styles.mail}`}>
              <SiGmail className={styles.icon} />
              <span className={styles.span}>shmuelas7@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={styles.c_right}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className={styles.user}
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className={styles.user}
              placeholder="Email"
            />
            <textarea
              name="message"
              className={styles.user}
              placeholder="Message"
            />
            <input
              type="submit"
              value="Send"
              className={`${styles.btn} button`}
            />
            <span>{done && "Thanks for Contacting me"}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
