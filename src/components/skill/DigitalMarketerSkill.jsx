"use client";

import { useEffect, useRef } from "react";

import { ProgressBar } from "react-bootstrap";

import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerSkill({ skill = undefined }) {
  const { sec_name, items } = skill?.frontmatter || {};

  const charAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);
  return (
    <div className="dm-skill">
      <h4 className="title" ref={charAnim}>
        {sec_name}
      </h4>

      {items && items.length && (
        <div ref={fadeAnim}>
          {items.map((item, i) => (
            <div key={`skill_item-${i}`} className="item has_fade_anim">
              <div className="content">
                <p>{item.name}</p>
                <p>{item.percentage}%</p>
              </div>
              <ProgressBar now={item.percentage} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
