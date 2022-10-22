import React, { useContext } from "react";
import Card from "../Card";
import Resume from './resume.pdf';
import styles from './style.module.css';
import { themeContext } from "../../context/themeContext";



const AboutMe = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className={styles.services} id="services">
            <h4 className={styles.header}>About Me</h4>
            <div className={styles.awesome}>
                <div className={styles.text}>
                    <spane>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printing
                    </spane>
                    <a href={Resume} download>
                        <button className={`button ${styles.s_button}`}>Download CV</button>
                    </a>
                    <div className={`blur ${styles.s_blur1}`} style={{ background: "#ABF1FF94" }}></div>
                </div>
                <div className={styles.cards} >
                    <img src="bbb" alt="hh" />
                </div >
            </div>

        </div>
    );
};

export default AboutMe;