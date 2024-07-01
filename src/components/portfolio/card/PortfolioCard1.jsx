import Image from "next/image";

export default function PortfolioCard1({
  portfolio = undefined,
  setModalShow,
  setDetailsData,
}) {
  const { image, category, title } = portfolio?.frontmatter || {};
  return (
    <>
      <div
        className="portfolio-card1"
        onClick={() => {
          setModalShow(true);
          setDetailsData(portfolio);
        }}
      >
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
      </div>
    </>
  );
}
