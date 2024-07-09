import Link from "next/link";
import Image from "next/image";

const PortfolioCard7 = ({ portfolio = undefined, rootUrl = "" }) => {
  const { title, image, shape, main_content } = portfolio?.frontmatter || {};
  return (
    <div className="portfolio-card7 has_fade_anim">
      <Image
        width={250}
        height={150}
        style={{ height: "auto" }}
        className="thumb rounded-pill jh-img"
        src={image}
        alt="portfolio"
      />
      <h4 className="title">
        <Link href={`${rootUrl}/portfolio/${portfolio.slug}`}>{title}</Link>
      </h4>
      <p className="dis">{main_content[0].text.slice(0, 150)}</p>
      {shape && shape.enable && (
        <div className="arrow">
          <Link href={`${rootUrl}/portfolio/${portfolio.slug}`}>
            <Image width={21} height={18} src={shape.image} alt="portfolio" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard7;
