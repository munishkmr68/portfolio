import Link from "next/link";
import Image from "next/image";

const ServiceCard11 = ({ service = undefined, rootUrl = "", number = 0 }) => {
  const { title, thumb, short_description } = service?.frontmatter || {};
  return (
    <div className="service-card-11">
      <Link href={`${rootUrl}/class/${service.slug}`}>
        <div
          className="cf_parallax_image thumb img_anim_reveal"
          style={{ maxHeight: "700px" }}
        >
          <Image
            width={520}
            height={750}
            style={{ height: "auto" }}
            src={thumb}
            className="jh-img"
            alt="Image"
            data-speed="auto"
          />
        </div>
      </Link>

      <div className="content">
        <span className="counter">{number <= 9 ? "0" + number : number}</span>
        <div className="titlewrap">
          <Link href={`${rootUrl}/class/${service.slug}`}>
            <h2 className="title">{title}</h2>
          </Link>
        </div>
        <div className="text">
          <p>{short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard11;
