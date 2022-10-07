
import styles from "./style.module.css";
import React, { useContext } from "react";
import { themeContext } from "../../context/themeContext";
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={styles.experience} id='experience'>
            <div className={styles.achievement}>
                {/* darkMode */}
                <div className={styles.circle} style={{ color: darkMode ? 'var(--orange)' : '' }}>8+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>years </span>
                <span>Experience</span>
            </div>
            <div className={styles.achievement}>
                <div className={styles.circle} style={{ color: darkMode ? 'var(--orange)' : '' }}>20+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>Projects</span>
            </div>
            <div className={styles.achievement}>
                <div className={styles.circle} style={{ color: darkMode ? 'var(--orange)' : '' }}>5+</div>
                <span style={{ color: darkMode ? 'white' : '' }}  >companies </span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experience;