import Link from "next/link";
import Image from "next/image";

import { delayFunction } from "@/lib/utils/helper/delayFunction";
import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

export default function ServiceCard1({
  service = undefined,
  i = 0,
  rootUrl = "",
}) {
  const { title, image, short_description } = service?.frontmatter || {};

  return (
    <div
      className="service-card-1 has_fade_anim"
      data-fade-from="left"
      data-delay={delayFunction(i + 1)}
    >
      <Link href={`${rootUrl}/service/${service.slug}`}>
        <div>
          <h2
            className="title"
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
          <div className="icon">
            <Image width={90} height={90} src={image} alt="Icon" />
          </div>
          <p className="desc">{short_description}</p>
        </div>
      </Link>
    </div>
  );
}
