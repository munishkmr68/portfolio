import Link from "next/link";
import Image from "next/image";

import { delayFunction2 } from "@/lib/utils/helper/delayFunction";

export default function ServiceCard6({ item, slug, i = 1, rootUrl = "" }) {
  return (
    <div
      className="service-card-6 has_fade_anim"
      data-fade-from="left"
      data-fade-offset="100"
      data-delay={delayFunction2(i + 1)}
    >
      <div className="thumb mb-25">
        <Link href={`${rootUrl}/service/${slug}`}>
          <Image
            width={420}
            height={530}
            style={{ height: "auto" }}
            src={item.image}
            className="jh-img"
            alt="Image"
          />
          {item.info && item.info.enable && (
            <div className="info">
              <p>{item.info.text}</p>
            </div>
          )}
        </Link>
      </div>
      <h3 className="duration pb-15">{item.duration}</h3>
      <Link href={`${rootUrl}/service/${slug}`}>
        <h3 className="title">{item.title}</h3>
      </Link>
    </div>
  );
}
