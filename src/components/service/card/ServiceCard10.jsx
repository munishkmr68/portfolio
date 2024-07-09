import Link from "next/link";
import Image from "next/image";

import { delayFunction } from "@/lib/utils/helper/delayFunction";

const ServiceCard10 = ({ service = undefined, rootUrl = "", number = 0 }) => {
  const { title, thumb, short_description } = service?.frontmatter || {};
  return (
    <div
      className="service-card-10 has_fade_anim"
      data-fade-from="left"
      data-delay={delayFunction(number)}
    >
      <Link href={`${rootUrl}/class/${service.slug}`}>
        <div className="item hover">
          <span className="count">{number <= 9 ? "0" + number : number}</span>
          <div className="thumb">
            <Image
              width={370}
              height={600}
              style={{ height: "auto" }}
              src={thumb}
              className="jh-img"
              alt="service-thumb"
            />
          </div>
          <div className="footer">
            <h4 className="title">{title}</h4>
            <p className="dis">{short_description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard10;
