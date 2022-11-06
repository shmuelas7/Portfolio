import React, { useContext } from "react";
import Resume from "./resume.pdf";
import styles from "./style.module.css";
import { themeContext } from "../../context/themeContext";
import famely from "../../img/femaly.jpg";

const AboutMe = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={styles.container} id="services">
      <div className={styles.box}>
        <div className={styles.text}>
          <h4 className={styles.header}>About Me</h4>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <a href={Resume} download>
            <button className={`button ${styles.s_button}`}>Download CV</button>
          </a>
        </div>
      </div>
      <div className={styles.cards}>
        <img src={famely} alt="hh" className={styles.img} />
      </div>
    </div>
  );
};

export default AboutMe;
