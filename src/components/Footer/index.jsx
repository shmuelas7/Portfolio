import React from "react";
import style from "./style.module.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className={style.footer}>
            <img src={Wave} alt="" style={{ width: "100%" }} />
            <div className={style.f_content}>
                <span>shmuelas7@gmail.com</span>
                <div className={style.f_icons}>
                    <Insta color="white" size={"3rem"} />
                    <Facebook color="white" size={"3rem"} />
                    <Gitub color="white" size={"3rem"} />
                </div>
            </div>
        </div>
    );
};

export default Footer;