import React, { useContext } from "react";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../context/themeContext";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={styles.portfolio} id="portfolio">
      <h2
        style={{ color: darkMode ? "white" : "#2954A3" }}
        className={styles.span}
      >
        Projects
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className={styles.portfolio_slider}
      >
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
