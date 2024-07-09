import Link from "next/link";
import Image from "next/image";

export default function PortfolioCard2({
  portfolio = undefined,
  rootUrl = "",
  smallItem = false,
}) {
  const { image, category, title } = portfolio?.frontmatter || {};
  return (
    <>
      <div className={smallItem ? "portfolio-card1-small" : "portfolio-card1"}>
        <Link href={`${rootUrl}/portfolio/${portfolio.slug}`}>
          <Image
            width={755}
            height={410}
            src={image}
            className="jh-img"
            alt="Portfolio Thumbnail"
          />
          <div className="content">
            <ul>
              <li>
                <p className="category">{category[0]}</p>
              </li>
              <li>
                <p className="title">{title}</p>
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
}
