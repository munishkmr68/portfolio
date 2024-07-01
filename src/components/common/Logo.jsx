"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import siteConfig from "@/config/siteConfig.json";

export default function Logo({
  url,
  noChange = false,
  customWidth,
  customHeight,
}) {
  const { logo, logo_dark, logo_width, logo_height, logo_text, title } =
    siteConfig.site_info;
  const { mode } = useContext(AppContext);

  const path = url
    ? url
    : mode === "light"
    ? noChange
      ? logo_dark
      : logo_dark
    : noChange
    ? logo_dark
    : logo;

  return (
    <>
      <Link href={"/"}>
        {path ? (
          <Image
            width={customWidth || logo_width.replace("px", "") * 2}
            height={customHeight || logo_height.replace("px", "") * 2}
            src={path}
            alt={title}
            priority
            style={{
              height: customHeight || logo_height.replace("px", "") + "px",
              width: customWidth || logo_width.replace("px", "") + "px",
            }}
          />
        ) : logo_text ? (
          logo_text
        ) : (
          title
        )}
      </Link>
    </>
  );
}
