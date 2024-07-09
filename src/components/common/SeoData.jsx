"use client";

import { usePathname } from "next/navigation";
import siteConfig from "@/config/siteConfig.json";

import { plainText } from "@/lib/utils/helper/converter";

export default function SeoData({
  title,
  meta_title,
  image,
  description,
  canonical,
  noindex,
}) {
  const { meta_image, meta_author, meta_description } = siteConfig.metadata;
  const { base_url } = siteConfig.site_info;
  const pathname = usePathname();
  return (
    <>
      {/* title */}
      <title>
        {plainText(
          meta_title ? meta_title : title ? title : siteConfig.site_info.title
        )}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={plainText(description ? description : meta_description)}
      />

      {/* author from siteConfig.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={plainText(
          meta_title ? meta_title : title ? title : siteConfig.site_info.title
        )}
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={plainText(description ? description : meta_description)}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={plainText(
          meta_title ? meta_title : title ? title : siteConfig.site_info.title
        )}
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={plainText(description ? description : meta_description)}
      />

      {/* og-image */}
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
