"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import Typed from "typed.js";

import ImageComponent from "../common/ImageComponent";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import { delayFunction } from "@/lib/utils/helper/delayFunction";
import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasWordAnim from "@/lib/utils/animation/hasWordAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerHero({ hero = undefined }) {
  const {
    title,
    sub_title,
    image,
    typed_title,
    action_btn,
    tools,
    shape_1,
    shape_2,
    shape_3,
  } = hero?.frontmatter || {};

  const typed = useRef();
  const typeList = useRef();

  const charAnim = useRef("");
  const wordAnim = useRef("");
  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");
  const fadeAnim3 = useRef("");
  const fadeAnim4 = useRef("");

  useEffect(() => {
    var hero_1 = new Typed(typed.current, {
      stringsElement: typeList.current,
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: "|",
      loop: true,
    });
    return () => {
      hero_1.destroy();
    };
  }, []);

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasWordAnim(wordAnim.current);
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
    hasFadeAnim(fadeAnim3.current);
    hasFadeAnim(fadeAnim4.current);
  }, []);

  return (
    <section className="dm-hero">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-md-6 left">
            <div className="leftthumb">
              {shape_1 && shape_1.enable && (
                <ImageComponent
                  width={41}
                  height={36}
                  className="position-absolute shapeup"
                  src={shape_1.light_img}
                  darkSrc={shape_1.dark_img || shape_1.light_img}
                  alt="hero image"
                />
              )}
              <h1 className="subtitle" ref={charAnim} data-on-scroll="0">
                {title}
              </h1>
              <h2
                className="title"
                ref={fadeAnim1}
                data-on-scroll="0"
                data-delay=".6"
              >
                {typed_title.label} <br />
                <span ref={typeList} style={{ display: "none" }}>
                  {typed_title.text && typed_title.text.length
                    ? typed_title.text.map((item, i) => (
                        <span key={`type_list-${i}`}>{item}</span>
                      ))
                    : ""}
                </span>
                <span ref={typed}></span>
              </h2>
              <div className="pbt">
                <div
                  className="dis"
                  ref={wordAnim}
                  data-on-scroll="0"
                  data-delay=".7"
                >
                  <p
                    dangerouslySetInnerHTML={convertWithBrSpanImg(sub_title)}
                  />
                </div>
              </div>
              {action_btn && action_btn.enable && (
                <div
                  className="btn"
                  ref={fadeAnim2}
                  data-delay="0.7"
                  data-ease="bounce"
                  data-on-scroll="0"
                  data-fade-from="top"
                >
                  <Link
                    href={action_btn.link}
                    className="wc-btn-primary btn-rollover-top"
                  >
                    {action_btn.label}
                  </Link>
                </div>
              )}

              {tools && tools.enable && (
                <>
                  <p className="line">
                    {tools.label} <span></span>
                  </p>
                  {tools.items && tools.items.length && (
                    <div className="tools" ref={fadeAnim3}>
                      {tools.items.map((item, i) => (
                        <div
                          key={`tools_item-${i}`}
                          className="has_fade_anim"
                          data-fade-from="left"
                          data-on-scroll="0"
                          data-delay={delayFunction(i + 1)}
                        >
                          <Link href={tools.tools_link[i].link}>
                            <ImageComponent
                              width={127}
                              height={39}
                              src={item.light_img}
                              darkSrc={item.dark_img || item.light_img}
                              customHeight="auto"
                              customWidth="auto"
                              alt="image"
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="col-xxl-7 col-md-6 right">
            <div className="img-right">
              <div
                className="img"
                ref={fadeAnim4}
                data-fade-from="top"
                data-duration="3"
                data-ease="bounce"
                data-delay="1"
              >
                <ImageComponent
                  width={580}
                  height={666}
                  src={image.light_img}
                  darkSrc={image.dark_img || image.light_img}
                  customHeight="auto"
                  alt="Image"
                  data-speed="0.8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {shape_2 && shape_2.enable && (
        <ImageComponent
          width={140}
          height={89}
          className="shape-2"
          src={shape_2.light_img}
          darkSrc={shape_2.dark_img || shape_2.light_img}
          alt="Shape"
        />
      )}
      {shape_3 && shape_3.enable && (
        <ImageComponent
          width={41}
          height={36}
          className="shape"
          src={shape_3.light_img}
          darkSrc={shape_3.dark_img || shape_3.light_img}
          alt="Shape"
        />
      )}
    </section>
  );
}
