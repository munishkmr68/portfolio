"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import LawyerFaq2 from "@/components/faq/LawyerFaq2";

import hasPinContent from "@/lib/utils/animation/hasPinContent";

const contentSection = (item) => {
  if (item.type === "only-text") {
    return (
      <div>
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "quote") {
    return (
      <div className="quote mt-30 mb-30">
        <div className="quote-icon mt-10">
          <Image
            width={70}
            height={53}
            style={{ height: "auto" }}
            src={item.image}
            alt="quote"
          />
        </div>
        <div className="quote-info">
          <div className="quote-text">
            <p>{item.quote}</p>
          </div>
          {item.author && item.author.enable ? (
            <div className="quote-author">
              <p>{item.author.name}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else if (item.type === "image-sec") {
    return (
      <div className="imgs">
        {item.images && item.images.length ? (
          <>
            {item.images.map((el, i) => (
              <div key={`${el}-${i}`}>
                <Image
                  width={(i + 1) % 2 === 0 ? 330 : 540}
                  height={300}
                  style={{ height: "auto" }}
                  src={el}
                  className="jh-img"
                  alt="Image"
                />
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    );
  } else if (item.type === "only-heading") {
    return <h2>{item.heading}</h2>;
  } else if (item.type === "only-list") {
    return (
      <div className="list list-check pb-30">
        {item.list && item.list.length ? (
          <ul>
            {item.list.map((el, i) => (
              <li key={`list_item-${i + Math.random() * 100}`}>{el} </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  }
};

const LawyerServiceDetails = ({
  details = undefined,
  related,
  rootUrl = "",
}) => {
  const { title, details_image, main_content, faq_items, contact, tag } =
    details?.frontmatter || {};

  const pinContent = useRef("");
  const pinText = useRef("");

  useEffect(() => {
    hasPinContent(pinText.current, pinContent.current);
  }, []);
  return (
    <section className="lawyer-service-details">
      <div className="area pt-140 pb-150">
        <div className="container">
          <div className="wrapper">
            <div className="left pt-10" ref={pinText}>
              <div className="sidebar">
                {related && related.length && (
                  <div className="related-service">
                    <div className="inner">
                      <h1 className="pTitle mb-30">More Services</h1>
                      <ul className="list">
                        {related.map((el, i) => (
                          <li key={`related_service-${i}`}>
                            <Link href={`${rootUrl}/service/${el.slug}`}>
                              {el.frontmatter.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {contact && contact.enable && (
                  <div className="contact__box">
                    <h2 className="contact__box-subTitle">{contact.title}</h2>
                    <h3 className="contact__box-title">{contact.sub_title}</h3>
                    <div className="contact__box-btn">
                      <Link
                        className="wc-btn-primary btn-hover-divide"
                        href={contact.btn.link}
                      >
                        {contact.btn.label}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="right pt-10" ref={pinContent}>
              <div className="lpd-thumb-width">
                <Image
                  width={900}
                  height={500}
                  src={details_image}
                  alt="thumb"
                  className="thumb jh-img"
                  data-speed="0.5"
                />
              </div>
              <h2 className="title pb-30">{title}</h2>

              {main_content && main_content.length && (
                <div className="details">
                  {main_content.map((item, i) => (
                    <React.Fragment key={`content_list-${i}`}>
                      {contentSection(item)}
                    </React.Fragment>
                  ))}
                </div>
              )}

              <div className="mt-30">
                <LawyerFaq2 faq={faq_items} />
              </div>

              {tag && tag.length && (
                <div className="pt-70">
                  <ul className="tags">
                    {tag.map((el, i) => (
                      <li key={`blog_details_tag-${i}`}>
                        <Link href="/blog">{el}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerServiceDetails;
