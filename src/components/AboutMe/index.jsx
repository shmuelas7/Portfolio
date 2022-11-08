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
          <spane className={styles.span}>
            My name is Shmuel Asherov, and I am a Practical Software Engineer. I
            have passion for developing good looking web apps and games. I love
            learning new technologies and the best practices possible, and
            strive to be a supportive, loyal, and e efficient as possible while
            maintaining readable and scalable code. I take pride in my advanced
            work ethic and ability to get along with others and work as a team.
            I’ve done some small side projects such as, REST API services using
            JavaScript , React , MongoDB
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
