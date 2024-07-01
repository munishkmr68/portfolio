"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import ImageComponent from "@/components/common/ImageComponent";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";

const contentSection = (item, index) => {
  if (item.type === "only-text") {
    return (
      <div>
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "image-image") {
    return (
      <div className="gallery-items">
        <div className="cf_parallax_image">
          <Image
            width={740}
            height={975}
            style={{ height: "auto" }}
            src={item.image1}
            className="jh-img"
            alt="gallery image"
            data-speed="0.9"
          />
        </div>
        <div className="cf_parallax_image">
          <Image
            width={740}
            height={975}
            style={{ height: "auto" }}
            src={item.image2}
            className="jh-img"
            alt="gallery image"
            data-speed="0.9"
          />
        </div>
      </div>
    );
  } else if (item.type === "only-heading") {
    return <h2>{item.heading}</h2>;
  } else if (item.type === "only-list") {
    return (
      <div className="list-check mb-40 mt-20">
        {item.list && item.list.length && (
          <ul>
            {item.list.map((el, i) => (
              <li key={`list_item-${i + Math.random() * 100}`}>{el} </li>
            ))}
          </ul>
        )}
      </div>
    );
  } else if (item.type === "number-text") {
    return (
      <div className="counter">
        <div className="row">
          <div className="col-md-5">
            {item.featured && item.featured.length && (
              <div className="left counter__number">
                {item.featured.map((fItem, i) => (
                  <div
                    key={`service_featured-${i}${index}`}
                    className="item has_fade_anim"
                  >
                    <div>
                      <div className="number">
                        <h3 className="count wc-counter">
                          <span className={`count${i}`}>{fItem.number}</span>
                          {fItem.suffix}
                        </h3>
                      </div>
                      <div className="text">
                        <p
                          dangerouslySetInnerHTML={convertWithBrSpanImg(
                            fItem.label
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
            {item.content && item.content.length && (
              <div className="right">
                {item.content.map((fContent, i) => (
                  <React.Fragment key={`service_details-featured-content-${i}`}>
                    {contentSection(fContent, i)}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default function DMServiceDetails({ service = undefined }) {
  const { title, short_description, shape_1, details_image, main_content } =
    service?.frontmatter || {};

  const textMoveAnim1 = useRef("");
  const textMoveAnim2 = useRef("");

  useEffect(() => {
    hasTextMoveAnim(textMoveAnim1.current);
    hasTextMoveAnim(textMoveAnim2.current);
  }, []);

  return (
    <section className="dm-service-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div>
              <h1
                className="main-title"
                ref={textMoveAnim1}
                dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="pb-40 circle-shape">
              {shape_1 && shape_1.enable && (
                <div className="btn-wrapper">
                  <Link href="#" className="circle-text btn-item">
                    <ImageComponent
                      className="text"
                      width={131}
                      height={130}
                      src={shape_1.light_img1}
                      darkSrc={shape_1.dark_img1 || shape_1.light_img1}
                      customHeight="auto"
                      alt="scrolltext"
                    />
                    <ImageComponent
                      className="icon"
                      width={39}
                      height={51}
                      src={shape_1.light_img2}
                      darkSrc={shape_1.dark_img2 || shape_1.light_img2}
                      alt="Icon"
                    />
                  </Link>
                </div>
              )}
            </div>
            <div className="top-text">
              <div ref={textMoveAnim1}>
                <p>{short_description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg-thumb">
          <div style={{ height: "70vh" }}>
            <Image
              width={1290}
              height={580}
              src={details_image}
              className="jh-img"
              data-speed="auto"
              alt="image"
            />
          </div>
        </div>
        {main_content && main_content.length && (
          <div className="content pb-120">
            {main_content.map((content, i) => (
              <React.Fragment key={`service_details-content-${i}`}>
                {contentSection(content, i)}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
