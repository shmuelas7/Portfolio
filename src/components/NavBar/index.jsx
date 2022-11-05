import React from "react";
import styles from "./style.module.css";
import Toggle from "../Toggle";
import { Link } from "react-scroll";
import { BsGlobe } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { BsList } from "react-icons/bs";

const navbar = () => {
  return (
    <div className={styles.container} id="Navbar">
      <div className={styles.center}>
        <div className={styles.list}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About me
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <Toggle />
        <BsGlobe className={styles.icon} />
        <FiGithub className={styles.icon} />
        <BsList className={`${styles.icon}  ${styles.hide}`} />
      </div>
    </div>
  );
};

export default navbar;
