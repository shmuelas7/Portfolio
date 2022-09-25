import React from "react";
import styles from './style.module.css';
const FloatinDiv = ({ img, text1, text2 }) => {
    return (
        // darkMode
        <div className={styles.floatingDiv}>
            <img src={img} alt="" />
            <span>
                {text1}
                <br />
                {text2}
            </span>
        </div>
    );
};

export default FloatinDiv;