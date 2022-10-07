import React from "react";
import styles from './style.module.css';
import Toggle from "../Toggle";
const navbar = () => {
    return (
        <div className={styles.container} id="Navbar">

            <div className={styles.left}>
                <div className="name">Shmuel</div>
                <Toggle />
            </div>
            <div className={styles.right}>
                <div className={styles.list}>
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            Home
                        </li>
                        <li>
                            Serivces
                        </li>
                        <li>
                            Experience
                        </li>
                        <li>
                            Protfolio
                        </li>
                        <li>
                            Testimonial
                        </li>
                    </ul>
                </div>
                <button className={`${styles.navButton} button `}>Contact</button>
            </div>
        </div>
    );
};

export default navbar;