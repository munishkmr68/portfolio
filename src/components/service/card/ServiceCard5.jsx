import Link from "next/link";
import Image from "next/image";

export default function ServiceCard5({
  service = undefined,
  rootUrl = "",
  noLink = false,
}) {
  const { title, image, short_description } = service?.frontmatter || {};
  return (
    <div className="service-card-5">
      {noLink ? (
        <>
          <div className="icon">
            <Image width={34} height={34} src={image} alt="Icon" />
          </div>
          <h2 className="title">{title}</h2>
          <p className="desc">{short_description}</p>
        </>
      ) : (
        <Link href={`${rootUrl}/service/${service.slug}`}>
          <div className="icon">
            <Image width={34} height={34} src={image} alt="Icon" />
          </div>
          <h2 className="title">{title}</h2>
          <p className="desc">{short_description}</p>
        </Link>
      )}
    </div>
  );
}
