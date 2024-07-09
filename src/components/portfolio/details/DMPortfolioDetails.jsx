"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { ProgressBar } from "react-bootstrap";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasPinContent from "@/lib/utils/animation/hasPinContent";
import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";

const contentSection = (item) => {
  if (item.type === "only-text") {
    return (
      <div>
        <p>{item.text}</p>
      </div>
    );
  }  else if (item.type === "only-image") {
    return (
      <div className="mb-40 mt-30">
        <Image
          width={740}
          height={975}
          style={{ height: "auto" }}
          priority
          src={item.image}
          className="jh-img"
          alt="image"
        />
      </div>
    );
  }  
};

export default function DMPortfolioDetails({ portfolio = undefined }) {
  const {
    title,
    details_image,
    details_title,
    client,
    category,
    date,
    main_content,
  } = portfolio?.frontmatter || {};

  const pinContent = useRef("");
  const pinText = useRef("");
  const textMoveAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasPinContent(pinText.current, pinContent.current, 766);
    hasTextMoveAnim(textMoveAnim.current);
    hasTextMoveAnim(pinText.current);
    hasFadeAnim(fadeAnim.current);
  }, []);

  return (
    <section className="dm-portfolio-details">
      <div className="container">
        <div>
          <h1
            className="title"
            ref={textMoveAnim}
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
          <ul className="meta" ref={fadeAnim}>
            <li>Client: {client}</li>
            <li>Project: {category}</li>
            <li>{date}</li>
          </ul>
        </div>
      </div>
      <div className="feature-img">
        <div>
          <Image
            width={1920}
            height={772}
            style={{ height: "auto" }}
            src={details_image}
            className="jh-img"
            alt="feature image"
            data-speed="0.9"
          />
        </div>
      </div>
      {main_content && main_content.length && (
        <div className="container">
          <div className="wrap" ref={pinContent}>
            <div className="item">
              <h2
                className="title-2"
                ref={pinText}
                dangerouslySetInnerHTML={convertWithBrSpanImg(details_title)}
              />
            </div>
            <div className="item">
              <div className="content">
                {main_content.map((content, i) => (
                  <div key={`project_details-content-${i}`}>
                    {contentSection(content)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
