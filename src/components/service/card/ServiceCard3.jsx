import Link from "next/link";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

export default function ServiceCard3({ service = undefined, rootUrl = "" }) {
  const { title, short_description, feature } = service?.frontmatter || {};
  return (
    <div className="service-card-3 title-hover-flip has_fade_anim">
      <Link href={`${rootUrl}/service/${service.slug}`}>
        <h3 className="title">
          <strong
            data-hover="Interaction Design"
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
        </h3>
        <p>{short_description}</p>
        {feature && feature.length && (
          <ul className="list-plus">
            {feature.map((item, i) => (
              <li key={`service_feature-${i}`}>{item}</li>
            ))}
          </ul>
        )}
      </Link>
    </div>
  );
}
