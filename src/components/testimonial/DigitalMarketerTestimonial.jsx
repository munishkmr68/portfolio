"use client";

import { useEffect, useRef } from "react";

import TestimonialCard2 from "./card/TestimonialCard2";
import DigitalMarketerTitle1 from "../title/DigitalMarketerTitle1";

import { Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerTestimonial({
  testimonial = undefined,
  noBg = false,
}) {
  const { title, items } = testimonial?.frontmatter || {};

  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");

  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
  }, []);
  return (
    <section
      className="dm-testimonial-section pb-120 pt-120"
      style={{ backgroundColor: `${noBg ? "unset" : ""}` }}
    >
      <div className="container">
        <DigitalMarketerTitle1 title={title} mainClass="sec-title-4-pb" />
        {items && items.length && (
          <div className="wrapper">
            <Swiper
              modules={[Pagination, Mousewheel]}
              dir="ltr"
              ref={fadeAnim1}
              slidesPerView={3}
              spaceBetween={30}
              mousewheel={false}
              pagination={{
                el: ".swiper-pagination",
                type: "fraction",
                clickable: true,

                renderFraction: function (currentClass, totalClass) {
                  return (
                    '<span class="' +
                    currentClass +
                    '"></span>' +
                    ' <span class="dash"></span> ' +
                    '<span class="' +
                    totalClass +
                    '"></span>'
                  );
                },
              }}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {items.map((item, i) => (
                <SwiperSlide
                  key={`testimonial_section-${i}`}
                  className="has_fade_anim"
                  data-fade-from="left"
                >
                  <TestimonialCard2 item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination" ref={fadeAnim2}></div>
          </div>
        )}
      </div>
    </section>
  );
}
