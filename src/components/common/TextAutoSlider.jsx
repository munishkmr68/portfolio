"use client";

import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/context/app.context";

import Marquee from "react-fast-marquee";

import ImageComponent from "./ImageComponent";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function TextAutoSlider({
  slides,
  shape,
  identity,
  spreed = 120,
}) {
  const { direction } = useContext(AppContext);
  const fadeAnim1 = useRef("");
  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
  }, []);
  return (
    <div className="text-slider" dir="ltr">
      <div ref={fadeAnim1}>
        {slides && slides.length && (
          <Marquee
            speed={spreed}
            direction={direction === "rtl" ? "right" : "left"}
          >
            {slides.map((slide, i) => (
              <div key={`${identity}-${i}`}>
                <div className="text-slide-content">
                  <h2 className="title">{slide}</h2>
                  {shape && shape.enable && (
                    <ImageComponent
                      width={shape.width || 30}
                      height={shape.height || 30}
                      src={shape.light_img}
                      darkSrc={shape.dark_img || shape.light_img}
                      alt="Icon"
                    />
                  )}
                </div>
              </div>
            ))}
          </Marquee>
        )}
      </div>
    </div>
  );
}
