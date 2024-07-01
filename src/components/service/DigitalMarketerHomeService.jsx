"use client";

import { useEffect, useRef } from "react";

import DigitalMarketerTitle1 from "../title/DigitalMarketerTitle1";
import ServiceCard4 from "./card/ServiceCard4";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerHomeService({
  service = undefined,
  services,
  rootUrl,
}) {
  const { title, short_details } = service?.frontmatter || {};

  const fadeAnim = useRef("");

  useEffect(() => {
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <div className="dm-service-section pt-90">
      <div className="container">
        <div className="swrapper">
          <DigitalMarketerTitle1 title={title} />
          <div className="dis">
            <div ref={fadeAnim}>
              <p
                dangerouslySetInnerHTML={convertWithBrSpanImg(short_details)}
              />
            </div>
          </div>
        </div>
        {services && services.length && (
          <div className="grid">
            {services.map((item, i) => (
              <ServiceCard4
                key={`service_item-${i}`}
                service={item}
                dataSpreed={(i + 1) % 2 === 0 ? "0.95" : "1.15"}
                rootUrl={rootUrl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
