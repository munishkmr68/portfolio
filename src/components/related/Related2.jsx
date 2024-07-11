"use client";

import { useEffect, useRef } from "react";

import PortfolioCard4 from "../portfolio/card/PortfolioCard4";

import hasTextMoveAnim from "@/lib/utils/animation/hasTextMoveAnim";
import imgAnimReveal from "@/lib/utils/animation/imgAnimReveal";

export default function Related2({ title, related, rootUrl }) {
  const textMoveAnim = useRef("");
  const imgRevealAnim = useRef("");

  useEffect(() => {
    hasTextMoveAnim(textMoveAnim.current);
    imgAnimReveal(imgRevealAnim.current);
  }, []);
  return (
    <div className="dm-portfolio">
      {related && related.length && (
        <div className="container">
          <h2 className="title-2 mb-30" ref={textMoveAnim}>
            {title}
          </h2>
          <div>
            <div className="items" ref={imgRevealAnim}>
              {related.slice(0, 3).map((item, i) => (
                <PortfolioCard4
                  key={`related_portfolio-card-${i}`}
                  portfolio={item}
                  rootUrl={rootUrl}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
