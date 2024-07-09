"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider2 = ({ items }) => {
  const fadeAnim1 = useRef("");
  const fadeAnim3 = useRef("");
  const fadeAnim4 = useRef("");
  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim3.current);
    hasFadeAnim(fadeAnim4.current);
  }, []);
  return (
    <>
      {items && items.length && (
        <div className="swiper slider">
          <Swiper
            modules={[Navigation]}
            loop={true}
            dir="ltr"
            ref={fadeAnim1}
            speed={2500}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide
                className="swiper-slide has_fade_anim"
                key={`testimonial_section-${i}`}
              >
                <div className="slide">
                  <Image
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                    src={item.client_img}
                    alt="Client Image"
                  />
                  <p>{item.text}</p>
                  <h3 className="client-name">{item.name}</h3>
                  <h4 className="client-role">{item.role}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div
        className="btn-swiper btn-next"
        ref={fadeAnim3}
        data-fade-from="right"
        style={{ cursor: "pointer" }}
      >
        <span>
          <FaArrowLeft />
        </span>
      </div>
      <div
        className="btn-swiper btn-prev"
        ref={fadeAnim4}
        data-fade-from="left"
        style={{ cursor: "pointer" }}
      >
        <span>
          <FaArrowRight />
        </span>
      </div>
    </>
  );
};

export default TestimonialSlider2;
