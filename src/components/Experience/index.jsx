
import styles from "./style.module.css";
const Experience = () => {

    return (
        <div className={styles.experience} id='experience'>
            <div className={styles.achievement}>
                {/* darkMode */}
                <div className={styles.circle}>8+</div>
                <span>years </span>
                <span>Experience</span>
            </div>
            <div className={styles.achievement}>
                <div className={styles.circle}>20+</div>
                <span>Projects</span>
            </div>
            <div className={styles.achievement}>
                <div className={styles.circle}>5+</div>
                <span >companies </span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experience;