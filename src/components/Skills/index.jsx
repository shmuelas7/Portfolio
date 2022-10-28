import React, { useContext, useState } from "react";
import { BsBraces } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import styles from "./style.module.css";

const Skills = () => {
  const [openFront, setCloseFront] = useState(false);
  const [openBack, setCloseBack] = useState(false);
  return (
    <div className={`${styles.skills_container} pad`} id="Skills">
      <div
        className={`${styles.skills_content} ${
          openFront ? styles.skills_open : styles.skills_close
        }`}
      >
        <div className={styles.skills_header}>
          <BsBraces className={styles.skills_icon} />
          <div>
            <h1 className={styles.skills_title}>Frontend developer</h1>
          </div>
          <BsFillCaretDownFill
            className={styles.skills_arrow}
            onClick={() => setCloseFront(!openFront)}
          />
        </div>
        <div className={styles.skills_list}>
          <div className={styles.skills_data}>
            <div className={styles.skills_title}>
              <h3 className={styles.skills_name}>HTML</h3>
              <span className={styles.skills_number}>90%</span>
            </div>
            <div className={styles.skills_bar}>
              <span
                className={`${styles.skills_percentage} ${styles.skills_HTML}`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.skills_content} ${
          openBack ? styles.skills_open : styles.skills_close
        }`}
      >
        <div className={styles.skills_header}>
          <BiServer className={styles.skills_icon} />
          <div>
            <h1 className={styles.skills_title}>Backend developer</h1>
          </div>
          <BsFillCaretDownFill
            className={styles.skills_arrow}
            onClick={() => setCloseBack(!openBack)}
          />
        </div>
        <div className={styles.skills_list}>
          <div className={styles.skills_data}>
            <div className={styles.skills_title}>
              <h3 className={styles.skills_name}>HTML</h3>
              <span className={styles.skills_number}>90%</span>
            </div>
            <div className={styles.skills_bar}>
              <span
                className={`${styles.skills_percentage} ${styles.skills_css}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
