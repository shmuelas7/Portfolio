import React, { useContext } from "react";
import Card from "../Card";
import Resume from './resume.pdf';
import styles from './style.module.css';
import { themeContext } from "../../context/themeContext";



const Services = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className={styles.services} id="services">
            <div className={styles.awesome}>
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
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
                <Card
                    // emoji={HeartEmoji}
                    heading={"Design"}
                    detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                />
                <div
                    className={`blur ${styles.s_blur2}`}
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div >
    );
};

export default Services;