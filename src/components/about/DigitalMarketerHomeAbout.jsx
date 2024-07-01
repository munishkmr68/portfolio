"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";

import DigitalMarketerTitle1 from "../title/DigitalMarketerTitle1";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import { Power1, gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalMarketerHomeAbout({ about = undefined }) {
  const { title, bg_img, achievement, action_btn, main_content } =
    about?.frontmatter || {};

  const fadeAnim1 = useRef("");
  const fadeAnim2 = useRef("");
  const fadeAnim3 = useRef("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        try {
          for (let i = 0; i < 3; i++) {
            gsap.from(gsap.utils.toArray(`.count${i}`), {
              scrollTrigger: {
                trigger: ".counter__number",
              },
              textContent: 0,
              duration: 2,
              delay: 0.5,
              ease: Power1.easeIn,
              snap: { textContent: 1 },
              stagger: 1,
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => {
        tHero.revert();
      };
    }
  }, []);

  useEffect(() => {
    hasFadeAnim(fadeAnim1.current);
    hasFadeAnim(fadeAnim2.current);
    hasFadeAnim(fadeAnim3.current);
  }, []);
  return (
    <section className="dm-home-about pt-120">
      {bg_img && bg_img.enable && (
        <Image
          width={840}
          height={1500}
          style={{ height: "auto" }}
          className="shape1"
          src={bg_img.image}
          alt="image"
        />
      )}

      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <DigitalMarketerTitle1 title={title} mainClass="title-width" /> 
          </div>
          <div className="col-md-5">
            {achievement && achievement.length && (
              <div className="left counter__number" ref={fadeAnim1}>
                {achievement.map((item, i) => (
                  <div
                    key={`about_achievement-${i}`}
                    className="item has_fade_anim"
                  >
                    <div>
                      <div className="number">
                        <h3 className="count wc-counter">
                          <span className={`count${i}`}>{item.number}</span>
                          {item.suffix}
                        </h3>
                      </div>
                      <div className="text">
                        <p
                          dangerouslySetInnerHTML={convertWithBrSpanImg(
                            item.label
                          )}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-7">
            {main_content && main_content.length && (
              <div className="right" ref={fadeAnim2}>
                {main_content.map((content, i) => (
                  <div
                    key={`about_content-${i}`}
                    className={`has_fade_anim ${i === 0 ? "textindent" : ""}`}
                  >
                    <p>{content}</p>
                  </div>
                ))}

                {action_btn && action_btn.enable && (
                  <div className="btnwrapper" ref={fadeAnim3}>
                    <Link href={action_btn.link} className="wc-btn-underline">
                      {action_btn.label}
                      <FaArrowRight />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
