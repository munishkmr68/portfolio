"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

const TestimonialSlider1 = ({ items }) => {
  const fadeAnim1 = useRef("");

  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
  }, []);
  return (
    <div className="testimonial-slider-1">
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
                data-fade-from="in"
                data-ease="bounce"
                key={`testimonial_section-${i}`}
              >
                <div className="slide">
                  <Image
                    width={80}
                    height={80}
                    style={{ borderRadius: "50%" }}
                    src={item.image}
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

      <div className="btn-swiper btn-next">
        <FaArrowRight />
      </div>
      <div className="btn-swiper btn-prev">
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default TestimonialSlider1;
