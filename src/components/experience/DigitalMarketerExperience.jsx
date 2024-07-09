"use client";

import { useEffect, useRef } from "react";

import { FaCalendarDays } from "react-icons/fa6";

import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerExperience({
  experience = undefined,
  left = false,
}) {
  const { sec_name, items } = experience?.frontmatter || {};
  const charAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <div className="dm-experience-section">
      <h4 className="main-title" ref={charAnim}>
        {sec_name}
      </h4>
      {items && items.length && (
        <div className={`items ${left ? "b-left" : ""}`} ref={fadeAnim}>
          {items.map((item, i) => (
            <div key={`${sec_name}_item-${i}`} className="item has_fade_anim">
              <div className="thumb">
                <FaCalendarDays />
                <span>{item.date}</span>
              </div>
              <div className=" content">
                <h4 className="title">{item.position}</h4>
                <p className="dis">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
