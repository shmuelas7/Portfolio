import styles from "./style.module.css";
import React, { useContext } from "react";
import boy from "../../img/boy.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { themeContext } from "../../context/themeContext";
import profile from "../../img/profile.png";

const Intro = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className={styles.Intro} id="Intro">
        <div className={styles.left}>
          <div className={styles.name}>
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Shmuel Asherov</span>
            <span>
              FullStack Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
            <button className={`button ${styles.introButton}`}>Hire me</button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={profile} className={styles.profile} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
