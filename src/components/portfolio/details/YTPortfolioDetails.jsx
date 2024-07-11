"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

const contentSection = (item) => {
  if (item.type === "text") {
    return (
      <div>
        {item.text &&
          item.text.length &&
          item.text.map((text, i) => (
            <p key={`text-${i + Math.random() * 100}`}>{text}</p>
          ))}
      </div>
    );
  } else if (item.type === "center-text") {
    return (
      <div className="center-text">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) => (
            <React.Fragment key={`center-text-${i + Math.random() * 100}`}>
              {contentSection(el)}
            </React.Fragment>
          ))}
      </div>
    );
  } else if (item.type === "only-image") {
    return (
      <div className="cf_parallax_image">
        <Image
          width={1290}
          height={700}
          style={{ height: "auto" }}
          priority
          src={item.image}
          className="jh-img"
          alt="image"
        />
      </div>
    );
  } else if (item.type === "image") {
    return (
      <div className="cf_parallax_image">
        <Image
          width={1920}
          height={700}
          style={{ width: "100%", height: "auto" }}
          priority
          src={item.image}
          className="jh-img"
          alt="image"
        />
      </div>
    );
  } else if (item.type === "heading-1") {
    return (
      <h2
        className="sec-title-10 text2"
        dangerouslySetInnerHTML={convertWithBrSpanImg(item.heading)}
      />
    );
  } else if (item.type === "heading-2") {
    return (
      <>
        <h2
          className="title-2 pb-40"
          dangerouslySetInnerHTML={convertWithBrSpanImg(item.heading)}
        />
        {item.text &&
          item.text.length &&
          item.text.map((text, i) => (
            <p key={`text-${i + Math.random() * 100}`}>{text}</p>
          ))}
      </>
    );
  } else if (item.type === "header-text") {
    return (
      <div className="heading-text-wrapper">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) => (
            <React.Fragment key={`header-text-${i + Math.random() * 100}`}>
              {contentSection(el)}
            </React.Fragment>
          ))}
      </div>
    );
  } else if (item.type === "header-text-2") {
    return (
      <div className="heading-text-2-wrapper">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) => (
            <React.Fragment key={`header-text-2-${i + Math.random() * 100}`}>
              {contentSection(el)}
            </React.Fragment>
          ))}
      </div>
    );
  } else if (item.type === "header-text-image") {
    return (
      <div className="heading-text-image">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) =>
            el.type === "image" ? (
              <div
                className="img"
                key={`header-text-image-${i + Math.random() * 100}`}
              >
                {contentSection(el)}
              </div>
            ) : (
              <div
                className="text"
                key={`header-text-image-${i + Math.random() * 100}`}
              >
                {contentSection(el)}
              </div>
            )
          )}
      </div>
    );
  } else if (item.type === "image-image-1") {
    return (
      <div className="image-image-1">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) => (
            <React.Fragment key={`image-image-1-${i + Math.random() * 100}`}>
              {contentSection(el)}
            </React.Fragment>
          ))}
      </div>
    );
  } else if (item.type === "image-image-2") {
    return (
      <div className="image-image-2">
        {item.content &&
          item.content.length &&
          item.content.map((el, i) => (
            <React.Fragment key={`image-image-2-${i + Math.random() * 100}`}>
              {contentSection(el)}
            </React.Fragment>
          ))}
      </div>
    );
  }
};

const YTPortfolioDetails = ({
  portfolio = undefined,
  related,
  rootUrl = "",
}) => {
  const { title, details_image, city, date, main_content } =
    portfolio?.frontmatter || {};

  const textRevealAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasTextRevealAnim(textRevealAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <section className="yt-portfolio-details pt-150 pb-150">
      <div className="hero">
        <span className="subtitle">
          ({city}) <br />
          {date}
        </span>
        <h1 className="sec-title-10 mb-100">{title}</h1>
        <div className="thumb cf_parallax_image">
          <Image
            width={1920}
            height={970}
            style={{ height: "auto" }}
            src={details_image}
            className="jh-img"
            alt="blog details image"
            data-speed="0.9"
          />
        </div>
      </div>

      {main_content && main_content.length && (
        <div className="content pt-150">
          <div className="container">
            {main_content.map((content, i) => (
              <div key={`project_details-content-${i}`}>
                {contentSection(content)}
              </div>
            ))}

            <div className="morework">
              <h3 className="text">More work</h3>
              <span></span>
              <div className="imgs">
                <Link href={`${rootUrl}/media/${related[0].slug}`}>
                  <Image
                    width={60}
                    height={32}
                    src="/assets/imgs/common/arrow-lg-left.png"
                    alt="Arrow Icon"
                  />
                </Link>
                <Link href={`${rootUrl}/media/${related[1].slug}`}>
                  <Image
                    width={60}
                    height={32}
                    src="/assets/imgs/common/arrow-lg-right.png"
                    alt="Arrow Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YTPortfolioDetails;
