import styles from './style.module.css';
import React, { useContext } from "react";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../context/themeContext";

const Intro = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={styles.Intro} id="Intro">

            <div className={styles.left}>
                <div className={styles.name}>
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Shmuel Asherov</span>
                    <span>
                        FullStack Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>

                <button className={`button ${styles.introButton}`}>Hire me</button>
                <div className={styles.icons}>
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className={styles.right}>
                <img src={boy} className={styles.profile} alt="" />
            </div>
        </div>
    );
};

export default Intro;