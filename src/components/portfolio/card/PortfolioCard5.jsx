import Link from "next/link";
import Image from "next/image";

export default function PortfolioCard5({
  portfolio = undefined,
  setModalShow,
  setDetailsData,
}) {
  const { image, category, title, start_date } = portfolio?.frontmatter || {};
  const getOnlyYear = (data) => {
    let date = new Date(data);
    return date.getFullYear();
  };
  return (
    <div className="portfolio-card5 anim_img_zoom">
      <div
        className="thumb"
        onClick={() => {
          setModalShow(true);
          setDetailsData(portfolio);
        }}
      >
        <Image
          width={450}
          height={470}
          style={{ height: "auto", aspectRatio: "45/47" }}
          src={image}
          className="jh-img"
          alt="Thumbnail"
        />
      </div>
      <div className="content">
        <h2
          className="title"
          onClick={() => {
            setModalShow(true);
            setDetailsData(portfolio);
          }}
        >
          {title}
        </h2>
        <div className="meta">
          <Link href="#">{category[0]}</Link>,{" "}
          <time>{getOnlyYear(start_date)}</time>
        </div>
      </div>
    </div>
  );
}
