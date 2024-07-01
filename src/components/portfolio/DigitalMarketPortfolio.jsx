"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DeveloperPortfolio({
  portfolio = undefined,
  portfolios,
  rootUrl = "",
}) {
  const { sec_name, sec_title, short_description, see_all_btn } =
    portfolio?.frontmatter || {};

  const charAnim = useRef("");
  const textRevealAnim = useRef("");
  const textMoveAnim = useRef("");
  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasTextRevealAnim(textRevealAnim.current);
    hasTextMoveAnim(textMoveAnim.current);
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
  }, []);
  return (
    <section className="dev-portfolio">
      <div className="container g-0 line pt-120 pb-60">
        <div className="line-col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="sec-title-wrapper">
              <div className="pb-15">
                <h2 className="sec-sub-title" ref={charAnim}>
                  {sec_name}
                </h2>
              </div>
              <h3
                className="sec-title"
                ref={textRevealAnim}
                dangerouslySetInnerHTML={convertWithBrSpanImg(sec_title)}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="sec-text-width" ref={textMoveAnim}>
              <p
                dangerouslySetInnerHTML={convertWithBrSpanImg(
                  short_description
                )}
              />
            </div>
          </div>
          <div className="col-md-3">
            
          </div>
        </div>
      </div>

      {portfolios && portfolios.length && (
        <div className="slider" data-autoplay="true" data-items="3">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            ref={fadeAnim2}
            dir="ltr"
            speed={3000}
            autoPlay={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1600: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
          >
            {portfolios.map((item, i) => (
              <SwiperSlide
                className="has_fade_anim"
                data-fade-from="in"
                data-ease="bounce"
                key={`testimonial_section-${i}`}
              >
                <div className="slide ">
            
                    <Image
                      width={700}
                      height={500}
                      style={{
                        height: "auto",
                        aspectRatio: "7/5",
                        objectFit: "cover",
                      }}
                      src={item.frontmatter.image}
                      className="jh-img"
                      alt="Portfolio Image"
                    />
                    <h2 className="title">{item.frontmatter.title}</h2>
                    <h3 className="date">
                      {item.frontmatter.category[0]}
                      {/* ,{" "}
                      {item.frontmatter.end_date} */}
                    </h3>
                
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="container line pb-120">
        <div className="line-col-3">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
