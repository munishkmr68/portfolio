"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "@/context/app.context";
import siteConfig from "@/config/siteConfig.json";

export default function Logo2({
  url,
  noChange = false,
  customWidth,
  customHeight,
}) {
  const { logo2, logo_dark2, logo_width2, logo_height2, logo_text, title } =
    siteConfig.site_info;
  const { mode } = useContext(AppContext);

  const path = url
    ? url
    : mode === "light"
    ? noChange
      ? logo_dark2
      : logo_dark2
    : noChange
    ? logo_dark2
    : logo2;

  return (
    <>
      <Link href={"/"}>
        {path ? (
          <Image
            width={customWidth || logo_width2.replace("px", "") * 2}
            height={customHeight || logo_height2.replace("px", "") * 2}
            src={path}
            alt={title}
            priority
            style={{
              height: customHeight || logo_height2.replace("px", "") + "px",
              width: customWidth || logo_width2.replace("px", "") + "px",
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
