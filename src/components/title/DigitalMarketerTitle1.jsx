"use client";

import { useEffect, useRef } from "react";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";

export default function DigitalMarketerTitle1({
  title,
  mainClass = "",
  titleClass = "sec-title-4",
  animation = true,
}) {
  const textRevealAnim = useRef("");

  useEffect(() => {
    if (animation) {
      hasTextRevealAnim(textRevealAnim.current);
    }
  }, [animation]);
  return (
    <div className={mainClass}>
      <h2
        className={titleClass}
        ref={textRevealAnim}
        dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
      />
    </div>
  );
}
