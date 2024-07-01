"use client";

import { AppContext } from "@/context/app.context";
import { useContext, useEffect, useRef } from "react";

import Marquee from "react-fast-marquee";

import ImageComponent from "./ImageComponent";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function ImageAutoSlider({
  slides,
  identity,
  spreed,
  width = 180,
  height = 57,
}) {
  const { direction } = useContext(AppContext);
  const fadeAnim = useRef("");
  useEffect(() => {
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <div dir="ltr" ref={fadeAnim}>
      <div>
        <Marquee
          speed={spreed}
          direction={direction === "rtl" ? "right" : "left"}
        >
          {slides.map((slide, i) => (
            <div className="brand__logo" key={`${identity}-${i}`}>
              <ImageComponent
                width={width}
                height={height}
                src={slide.light_img}
                darkSrc={slide.dark_img ? slide.dark_img : slide.light_img}
                customWidth="auto"
                alt="Brand Logo"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
