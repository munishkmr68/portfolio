"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";

import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

export default function CTA2({ rootUrl = "", cta = undefined }) {
  const { title, details, image, action_btn, shape1, shape2, shape3 } =
    cta?.frontmatter || {};

  const fadeAnim = useRef("");
  useEffect(() => {
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <section className="cta2 pb-130">
      <div className="container">
        <div
          className="wrapper"
          ref={fadeAnim}
          data-fade-from="top"
          data-duration="3"
          data-fade-offset="150"
          data-ease="bounce"
        >
          <div className="grid">
            <div className="left">
              <Image
                width={191}
                height={191}
                style={{ height: "auto" }}
                src={image}
                alt="notification"
              />
            </div>
            <div className="right">
              <h2
                className="title"
                dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
              />
              <div className="content">
                <div>
                  <p>{details}</p>
                </div>
                {action_btn && action_btn.enable && (
                  <div>
                    <Link
                      href={`${action_btn.link}`}
                      className="wc-btn-primary btn-rollover-top"
                    >
                      {action_btn.label}
                      <FaArrowRight />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {shape1 && shape1.enable && (
            <Image
              width={136}
              height={75}
              style={{ height: "auto" }}
              className="sh1"
              src={shape1.image}
              alt="shape"
            />
          )}

          {shape2 && shape2.enable && (
            <Image
              width={136}
              height={124}
              style={{ height: "auto" }}
              className="sh2"
              src={shape2.image}
              alt="shape"
            />
          )}

          {shape3 && shape3.enable && (
            <Image
              width={55}
              height={38}
              style={{ height: "auto" }}
              className="sh3"
              src={shape3.image}
              alt="shape"
            />
          )}
        </div>
      </div>
    </section>
  );
}
