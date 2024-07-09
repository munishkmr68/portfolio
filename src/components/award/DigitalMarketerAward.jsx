"use client";

import { useEffect, useRef } from "react";

import AwardCard2 from "./card/AwardCard2";

import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";

export default function DigitalMarketerAward({ award = undefined }) {
  const { sec_name, items } = award?.frontmatter || {};

  const charAnim = useRef("");
  const fadeAnim = useRef("");

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasFadeAnim(fadeAnim.current);
  }, []);

  const removeBorder = (length, item) => {
    if (length === item) {
      return true;
    } else if (length - 1 === item && item % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="dm-award-section">
      <div>
        <h4 className="title" ref={charAnim}>
          {sec_name}
        </h4>
      </div>

      <div className="container">
        {items && items.length && (
          <div className="items" ref={fadeAnim}>
            {items.map((item, i) => (
              <AwardCard2
                key={`award_item-${i}`}
                item={item}
                removeBorder={removeBorder(items.length, i + 1)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
