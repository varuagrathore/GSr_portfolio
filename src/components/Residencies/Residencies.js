import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper" id="projects">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText"> Best Choices</span>
          <span className="primaryText"> Popular Project</span>
        </div>
        <Swiper {...sliderSettings}>
          <div>
            <SliderButtons />
          </div>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} className="abc" alt="project" />
                <span className="secondaryText r-price">
                  <span>{card.name}</span>
                </span>
                <span className="primaryText">{card.description}</span>
                <span className="secondaryText">{card.status}</span>
                <a
                  href={card.link}
                  className="secondaryText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.link}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
