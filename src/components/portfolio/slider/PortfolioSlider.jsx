"use client";

import { useEffect, useRef } from "react";

import PortfolioCard6 from "../card/PortfolioCard6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { customDataCursor } from "@/lib/utils/helper/customDataCursor";

const PortfolioSlider = ({ portfolios, rootUrl }) => {
  const dataCursor = useRef("");

  useEffect(() => {
    if (dataCursor.current && dataCursor.current.firstChild) {
      customDataCursor({
        parent_container: dataCursor.current.firstChild,
        label: "View <br> Work",
      });
    }
  }, []);
  return (
    <div className="portfolio-slider-1">
      <Swiper
        loop={true}
        dir="ltr"
        speed={1500}
        ref={dataCursor}
        spaceBetween={15}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {portfolios.map((item, i) => (
          <SwiperSlide key={`portfolio_section-${i}`} className="custom_cursor">
            <PortfolioCard6 portfolio={item} rootUrl={rootUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
