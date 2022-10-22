import styles from './style.module.css';
import React, { useContext } from "react";
import boy from "../../img/boy.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { themeContext } from "../../context/themeContext";

const Intro = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <div className={styles.Intro} id="Intro">

                <div className={styles.left}>
                    <div className={styles.icons}>
                        <a href='https://github.com/shmuelas7'>
                            <BsGithub size="50px" />
                        </a>
                        <a href='https://www.linkedin.com/in/shmuel-asherov-79608718b/'>
                            <BsLinkedin size="50px" />
                        </a>
                    </div>
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
                    <img src={boy} className={styles.profile} alt="" />
                </div>
            </div>

        </>
    );
};

export default Intro;