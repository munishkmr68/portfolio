"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import { FaArrowRight, FaPause, FaPlay } from "react-icons/fa6";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import ImageComponent from "@/components/common/ImageComponent";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const contentSection = (item) => {
  if (item.type === "only-text") {
    return (
      <div className="pb-20">
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "only-image") {
    return (
      <div className="pt-20 pb-60">
        <Image
          width={630}
          height={781}
          style={{ height: "auto" }}
          priority
          src={item.image}
          className="jh-img"
          alt="Image"
        />
      </div>
    );
  } else if (item.type === "heading-1") {
    return (
      <h2 className="sub-title-service text-uppercase pb-10">{item.heading}</h2>
    );
  } else if (item.type === "heading-2") {
    return (
      <h2 className="subtitle text-uppercase pt-20 pb-30">{item.heading}</h2>
    );
  } else if (item.type === "log-text") {
    return (
      <div className="award">
        <div className="pb-40">
          <ImageComponent
            width={331}
            height={130}
            src={item.light_img}
            darkSrc={item.dark_img || item.light_img}
            alt="badge"
          />
        </div>
        <div>
          <p>{item.text}</p>
        </div>
      </div>
    );
  }
};

export default function DeveloperServiceDetails({
  details = undefined,
  related,
  rootUrl = "",
}) {
  const { title, details_image, video, main_content, gallery } =
    details?.frontmatter || {};

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="dev-service-details pt-150 pb-0">
      <div className="title-wrapper text-center pb-55">
        <h1
          className="sec-title-18"
          dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
        />
      </div>
      <div className="thumb">
        <div className="cf_parallax_image">
          <Image
            width={1920}
            height={980}
            style={{ height: "auto" }}
            priority
            src={details_image}
            className="jh-img"
            alt="service details img"
            data-speed="0.9"
          />
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="item">
            {main_content && main_content.length
              ? main_content.map((content, i) => (
                  <React.Fragment key={`service_details-content-${i}`}>
                    {contentSection(content)}
                  </React.Fragment>
                ))
              : ""}
          </div>
          <div className="item">
            {related && related.length && (
              <div className="other-service mb-40">
                <h2 className="other-title pb-10">Other services</h2>
                <ul>
                  {related.map((item, i) => (
                    <li key={`related_service-${i}`}>
                      <Link href={`${rootUrl}/service/${item.slug}`}>
                        <span
                          className="service-name"
                          dangerouslySetInnerHTML={convertWithBrSpanImg(
                            item.frontmatter.title
                          )}
                        />
                        <FaArrowRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {gallery && gallery.length
              ? gallery.map((item, i) => (
                  <div
                    className="mb-40 cf_parallax_image"
                    key={`service_gallery-img-${i}`}
                  >
                    <Image
                      width={520}
                      height={663}
                      style={{ height: "auto" }}
                      priority
                      src={item}
                      className="jh-img"
                      alt="thumb"
                      data-speed="0.9"
                    />
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
      <div className="video-thumb mt-100">
        <ReactPlayer
          width="100%"
          height="100%"
          loop={true}
          url={video}
          playing={isPlaying}
          onPause={() => setIsPlaying(false)}
        />
        <div
          className="video-button-wrapper"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <div className="btn-item">
            <div className="wc-play-icon play-icon-border">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
