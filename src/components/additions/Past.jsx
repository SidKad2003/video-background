import React, { Suspense } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
// import { coverflowEffect, pagination, navigation } from "swiper";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../index.css";

import img1 from "../../../public/assets_h/img1.jpg";
import img2 from "../../../public/assets_h/img2.jpg";
import img3 from "../../../public/assets_h/img3.jpg";
import img4 from "../../../public/assets_h/img4.jpg";
import img5 from "../../../public/assets_h/img5.jpg";
import img6 from "../../../public/assets_h/img6.jpg";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  height: 750px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  margin: 10rem auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const nextButton = styled.div``;

// const images = [galaxy, interstellar, stars, nebula, spiral];

function Past() {
  console.log("SLIDER LOADED");
  return (
    <Section>
      <Container>
        <h1 className="heading" style={{ paddingBottom: 35 }}>
          NFC 1.0 Highlights
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{ delay: 1000 }}
          modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          speed={1200}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={img1} alt={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt={img6} />
          </SwiperSlide>

          {/* <div className="slider-container">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </Container>
    </Section>
  );
}

export default Past;
