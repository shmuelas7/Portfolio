import React from "react";
import styles from './style.module.css';


const Card = ({ emoji, heading, detail, color }) => {
    return (
        <div className={styles.card} style={{ borderColor: { color } }}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className={styles.c_button}>LEARN MORE</button>
        </div>
    );
};

export default Card;