import styles from './style.module.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatinDiv from "../FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";

const Intro = () => {

    return (
        <div className={styles.Intro} id="Intro">

            <div className={styles.left}>
                <div className={styles.name}>
                    <span >Hy! I Am</span>
                    <span>Shmuel Asherov</span>
                    <span>
                        FullStack Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>

                <button className={`button ${styles.introButton}`}>Hire me</button>
                <div className={styles.icons}>
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className={styles.right}>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} className={styles.profile} alt="" />
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <FloatinDiv img={crown} text1="Web" text2="Developer" />
                <FloatinDiv img={thumbup} text1="Web" text2="Developer" />

            </div>
        </div>
    );
};

export default Intro;