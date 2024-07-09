import Image from "next/image";
import React from "react";

import ImageComponent from "@/components/common/ImageComponent";

export default function HCServiceDetails({ details = undefined }) {
  const { title, details_image, description, benefits, class_type } =
    details?.frontmatter || {};

  const addShape = (data, length) => {
    if (length == data) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <section className="hc-service-details pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="top pb-40">
              <h1 className="title">{title} </h1>
              <div className="thumbnail mt-60">
                <Image
                  width={1390}
                  height={614}
                  src={details_image}
                  className="jh-img"
                  alt="Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>

            <div className="details">
              <div className="detail-content pb-120">
                <div>
                  <p>{description}</p>
                </div>
              </div>
              {benefits && benefits.enable && (
                <>
                  {" "}
                  <div className="detail-content pb-120">
                    <h2 className="detail-title pb-50">{benefits.title}</h2>
                    {benefits.items && benefits.items.length && (
                      <div className="detail-development">
                        {benefits.items.map((item, i) => (
                          <React.Fragment key={`steps-${i}`}>
                            <div className="detail-step">
                              <div className="detail-duration">
                                {benefits.unit} <span>({item.duration})</span>
                              </div>
                              <h3 className="detail-title-2">{item.title} </h3>
                            </div>
                            {addShape(i + 1, benefits.items.length) && (
                              <div className="detail-dshape">
                                <ImageComponent
                                  width={94}
                                  height={37}
                                  src={
                                    benefits.arrow.items[
                                      (i + 1) % 2 == 0 ? 1 : 0
                                    ]
                                  }
                                  darkSrc={
                                    benefits.arrow.items_dark[
                                      (i + 1) % 2 == 0 ? 1 : 0
                                    ]
                                  }
                                  alt="Icon"
                                />
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="detail-content pb-120">
                    <div>
                      <p>{benefits.description}</p>
                    </div>
                  </div>{" "}
                </>
              )}

              {class_type && class_type.enable && (
                <div className="detail-content pb-120">
                  <h2 className="detail-title pb-50">{class_type.title}</h2>
                  <div className="pb-60">
                    <p>{class_type.description}</p>
                  </div>

                  {class_type.items && class_type.items.length && (
                    <div className="cols-2">
                      {class_type.items.map((item, i) => (
                        <div
                          className={item.text ? "col-one" : "col-two"}
                          key={`class_type-${i}`}
                        >
                          <Image
                            width={item.text ? 550 : 440}
                            height={item.text ? 360 : 520}
                            style={{ height: "auto" }}
                            src={item.image}
                            className="jh-img"
                            alt="Thumbnail"
                          />
                          {item.text && (
                            <div className="pt-40">
                              <p>{item.text}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
