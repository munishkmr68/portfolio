import Link from "next/link";

import ImageComponent from "@/components/common/ImageComponent";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import { delayFunction } from "@/lib/utils/helper/delayFunction";

export default function ServiceCard7({ service = undefined, i, rootUrl = "" }) {
  const { title, short_description, icon } = service?.frontmatter || {};
  return (
    <div
      className="service-card-7 has_fade_anim"
      data-fade-from="left"
      data-delay={delayFunction(i + 1)}
    >
      <span className="cw-icon"></span>
      {icon && icon.enable && (
        <div className="thumb mb-55">
          <ImageComponent
            width={108}
            height={108}
            src={icon.light_img}
            darkSrc={icon.dark_img || icon.light_img}
            alt="Service Icon"
          />
        </div>
      )}

      <div>
        <div className="mb-30">
          <Link href={`${rootUrl}/service/${service.slug}`}>
            <h3
              className="title"
              dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
            />
          </Link>
        </div>
        <div className="dis2">
          <p>{short_description}</p>
        </div>
      </div>
    </div>
  );
}
