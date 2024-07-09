"use client";

import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";

export default function ImageComponent({
  src = "",
  darkSrc = "",
  width = 0,
  height = 0,
  customHeight = "",
  customWidth = "",
  dataSpeed = 1,
  alt = "Image",
  className = "",
  priority = false,
}) {
  const { mode } = useContext(AppContext);
  return (
    <>
      <Image
        width={width}
        height={height}
        style={{ width: customWidth, height: customHeight }}
        src={mode === "light" ? darkSrc : src}
        className={className}
        alt={alt}
        priority={priority}
        data-speed={dataSpeed}
      />
    </>
  );
}
