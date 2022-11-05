import styles from "./style.module.css";
import React, { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import { BiCalendar } from "react-icons/bi";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={styles.experience} id="experience">
      <div className={styles.content}>
        <div className={styles.data}>
          <div>
            <h3 className={styles.title}>Practical Engineering</h3>
            <span className={styles.subtitle}>Ariel University</span>
            <div className={styles.calender}>
              <BiCalendar className={styles.icon} />
              2019-2021
            </div>
          </div>
          <div>
            <span className={styles.rounder}></span>
            <span className={styles.line}></span>
          </div>
        </div>

        <div className={styles.data}>
          <div></div>
          <div>
            <span className={styles.rounder}></span>
            <span className={styles.line}></span>
          </div>
          <div>
            <h3 className={styles.title}>FullStack Course</h3>
            <span className={styles.subtitle}>Beta College</span>
            <div className={styles.calender}>
              <BiCalendar className={styles.icon} />
              2021-2022
            </div>
          </div>
        </div>

        <div className={styles.data}>
          <div></div>
          <div>
            <span className={styles.rounder}></span>
            <span className={styles.line}></span>
          </div>
          <div>
            <h3 className={styles.title}>Web Development</h3>
            <span className={styles.subtitle}>ReadMate</span>
            <div className={styles.calender}>
              <BiCalendar className={styles.icon} />
              2021-2022
            </div>
          </div>
        </div>

        <div className={styles.data}>
          <div></div>
          <div>
            <span className={styles.rounder}></span>
            <span className={styles.line}></span>
          </div>
          <div>
            <h3 className={styles.title}>Web Development</h3>
            <span className={styles.subtitle}>StepBy</span>
            <div className={styles.calender}>
              <BiCalendar className={styles.icon} />
              2021-2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
