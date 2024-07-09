import Link from "next/link";
import Image from "next/image";

const ServiceCard9 = ({ service = undefined, rootUrl = "" }) => {
  const { image, shape, service_type, title } = service?.frontmatter || {};
  return (
    <div
      className="service-card-9 service-hover-default has_fade_anim"
      style={{ height: "97%" }}
    >
      <Link href={`${rootUrl}/service/${service.slug}`} className="zi-1">
        <div className="thumb">
          <Image
            width={48}
            height={47}
            style={{ height: "auto" }}
            src={image}
            className="jh-img"
            alt="service"
          />
          {shape && shape.enable ? (
            <Image
              width={19}
              height={15}
              className="icon"
              src={shape.image}
              alt="service"
            />
          ) : (
            ""
          )}
        </div>
        <div className="content">
          <h5 className="category">{service_type}</h5>
          <h3 className="subject">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard9;
