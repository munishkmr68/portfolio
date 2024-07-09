import Link from "next/link";
import Image from "next/image";

const PortfolioCard8 = ({ portfolio = undefined, rootUrl = "" }) => {
  const { title, image, date } = portfolio?.frontmatter || {};
  return (
    <div className="portfolio-card8 has_fade_anim">
      <div className="cf_parallax_image">
        <Link href={`${rootUrl}/media/${portfolio.slug}`}>
          <Image
            width={630}
            height={850}
            style={{ height: "auto" }}
            src={image}
            className="jh-img"
            alt="media"
            data-speed="0.9"
          />
        </Link>
      </div>
      <div className="icontent">
        <Link href={`${rootUrl}/media/${portfolio.slug}`}>
          <h2 className="ititle">{title}</h2>
        </Link>
        <p className="idis">{date}</p>
      </div>
    </div>
  );
};

export default PortfolioCard8;
