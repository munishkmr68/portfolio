import Link from "next/link";
import Image from "next/image";

export default function PortfolioCard3({
  portfolio = undefined,
  rootUrl = "",
}) {
  const { title, image, client, end_date } = portfolio?.frontmatter || {};
  return (
    <div className="portfolio-card3 has_fade_anim">
      <Link href={`${rootUrl}/portfolio/${portfolio.slug}`}>
        <div className="pimg">
          <Image
            width={410}
            height={510}
            style={{ height: "auto", aspectRatio: "41/51", objectFit: "cover" }}
            src={image}
            className="jh-img"
            alt="Portfolio Thumbnail"
          />
        </div>
        <div className="content">
          <h3 className="title">{title}</h3>
          <p>
            {client}, {end_date}
          </p>
        </div>
      </Link>
    </div>
  );
}
