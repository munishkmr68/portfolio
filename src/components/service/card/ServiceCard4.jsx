import Link from "next/link";
import Image from "next/image";

export default function ServiceCard4({
  service = undefined,
  dataSpreed = "1",
  rootUrl = "",
}) {
  const { title, short_description, image } = service?.frontmatter || {};
  return (
    <div className="service-card-4" data-speed={dataSpreed}>
      <Link href={`${rootUrl}/service/${service.slug}`}>
        <div className="content">
          <div className="heading">
            <h4 className="title">{title}</h4>
          </div>
          <div className="body">
            <div className="bthumb">
              <Image
                width={90}
                height={90}
                src={image}
                alt="expert"
              />
            </div>
          </div>
          <div className="footer">
            <p>{short_description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
