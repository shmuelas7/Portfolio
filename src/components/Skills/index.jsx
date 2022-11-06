import React, { useContext, useState } from "react";
import { BsBraces } from "react-icons/bs";
import { AiOutlineUp } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import styles from "./style.module.css";

const Skills = () => {
  const [openFront, setCloseFront] = useState(false);
  const [openBack, setCloseBack] = useState(false);
  return (
    <>
      <h1 className={styles.h1}>Skills</h1>
      <div className={styles.skills_container} id="Skills">
        <div
          className={`${styles.skills_content}  ${
            openFront ? styles.skills_open : styles.skills_close
          }`}
        >
          <div className={styles.box_right}>
            <div className={styles.skills_header}>
              <BsBraces className={styles.skills_icon} />
              <div>
                <h1 className={styles.skills_title}>Frontend developer</h1>
              </div>
              <AiOutlineUp
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
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>css</h3>
                  <span className={styles.skills_number}>80%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_HTML}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>React</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_HTML}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>js</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_HTML}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>redux</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_HTML}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>Bootstrap</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_HTML}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>Unit testing</h3>
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
        </div>

        <div
          className={`${styles.skills_content} 
                      ${styles.server} 
                      ${openBack ? styles.skills_open : styles.skills_close}`}
        >
          <div className={styles.box_left}>
            <div className={styles.skills_header}>
              <BiServer className={styles.skills_icon} />
              <div>
                <h1 className={styles.skills_title}>Backend developer</h1>
              </div>
              <AiOutlineUp
                className={styles.skills_arrow}
                onClick={() => setCloseBack(!openBack)}
              />
            </div>
            <div className={styles.skills_list}>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>node.js</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>Phyton</h3>
                  <span className={styles.skills_number}>70%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>MongoDB</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>SQL</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>Expreess</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>TS</h3>
                  <span className={styles.skills_number}>90%</span>
                </div>
                <div className={styles.skills_bar}>
                  <span
                    className={`${styles.skills_percentage} ${styles.skills_css}`}
                  ></span>
                </div>
              </div>
              <div className={styles.skills_data}>
                <div className={styles.skills_title}>
                  <h3 className={styles.skills_name}>Nest.js</h3>
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
      </div>
    </>
  );
};

export default Skills;
