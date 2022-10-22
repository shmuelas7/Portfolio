import React, { useContext, useRef, useState } from "react";
import styles from "./style.module.css"
import emailjs from '@emailjs/browser';
import { themeContext } from "../../context/themeContext";
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
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
        <div className={styles.contact_form} id="contact">
            <div className={styles.w_left}>
                <div className={styles.awesome}>
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
                    <br />
                    <span>Contact me</span>
                    <div
                        className={`blur ${styles.s_blur1}`}
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            <div className={styles.c_right}>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="user_name" className={styles.user} placeholder="Name" />
                    <input type="email" name="user_email" className={styles.user} placeholder="Email" />
                    <textarea name="message" className={styles.user} placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me"}</span>
                    <div
                        className={`blur ${styles.c_blur1}`}
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;