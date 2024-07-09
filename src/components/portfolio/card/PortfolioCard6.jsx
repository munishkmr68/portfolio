import Link from "next/link";
import Image from "next/image";

const PortfolioCard6 = ({ portfolio = undefined, rootUrl = "" }) => {
  const { title, image, category, date } = portfolio?.frontmatter || {};

  const getOnlyYear = (data) => {
    let date = new Date(data);
    return date.getFullYear();
  };
  return (
    <div className="portfolio-card6 custom_cursor">
      <Link href={`${rootUrl}/portfolio/${portfolio.slug}`}>
        <div className="thumb-2">
          <Image
            width={630}
            height={800}
            style={{ width: "100%", height: "100%" }}
            src={image}
            className="jh-img"
            alt="Image"
          />
        </div>
        <div className="content">
          <Image
            width={24}
            height={19}
            className="d-block"
            src="/assets/imgs/common/arrow-up-white.png"
            alt="Icon"
          />
          <span className="name">
            {category} - {getOnlyYear(date)}
          </span>
          <h4 className="title">{title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard6;
