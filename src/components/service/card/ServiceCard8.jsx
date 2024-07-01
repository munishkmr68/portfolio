import Link from "next/link";
import Image from "next/image";

export default function ServiceCard8({
  service = undefined,
  number = 0,
  rootUrl = "",
}) {
  const { title, thumb } = service?.frontmatter || {};
  return (
    <div className="service-card-8 has_fade_anim img_move">
      <div className="content">
        <Link href={`${rootUrl}/service/${service.slug}`}>
          <div className="wrapper">
            <span className="count">{number <= 9 ? "0" + number : number}</span>
            <h2 className="title hover-left-right">{title}</h2>
          </div>
          <Image
            width={250}
            height={350}
            className="hoverImg jh-img"
            src={thumb}
            alt="work-7"
          />
        </Link>
      </div>
    </div>
  );
}
