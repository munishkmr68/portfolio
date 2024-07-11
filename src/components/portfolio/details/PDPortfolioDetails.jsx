import Image from "next/image";

const contentSection = (item) => {
  if (item.type === "only-text") {
    return (
      <div className="overview">
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "column-text") {
    return (
      <div className="column-text">
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "image-image") {
    return (
      <div className="sm-thumb">
        <Image
          width={520}
          height={300}
          priority
          src={item.image1}
          className="jh-img"
          alt="image"
        />
        <Image
          width={300}
          height={300}
          priority
          src={item.image2}
          className="jh-img"
          alt="image"
        />
      </div>
    );
  } else if (item.type === "only-heading") {
    return <h2 className="subtag">{item.heading}</h2>;
  } else if (item.type === "only-list") {
    return (
      <div className="list-plus">
        {item.list && item.list.length && (
          <ul>
            {item.list.map((el, i) => (
              <li key={`list_item-${i + Math.random() * 100}`}>{el} </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
};

export default function PDPortfolioDetails({
  details = undefined,
  customPaddingClass,
}) {
  const {
    title,
    image,
    category,
    start_date,
    end_date,
    client,
    tools,
    main_content,
  } = details?.frontmatter || {};

  return (
    <section className={`pd-portfolio-details ${customPaddingClass || ""}`}>
      <div
        className={`container line ${customPaddingClass ? "ptf-70" : "pb-30"}`}
      >
        <div className="detail_cover cf_parallax_image">
          <Image
            width={1290}
            height={700}
            style={{ height: "auto" }}
            priority
            src={image}
            className="jh-img"
            alt="image"
            data-speed="0.9"
          />
        </div>
        <div className="details">
          <h2 className="details_title">{title}</h2>
          <ul className="details_info">
            <li>
              <span className="title">Client</span>
              <p className="info">{client}</p>
            </li>
            <li>
              <span className="title">Category</span>
              <p className="info">{category[0]}</p>
            </li>
            <li>
              <span className="title">Start Date</span>
              <p className="info">{start_date}</p>
            </li>
            <li>
              <span className="title">End Date</span>
              <p className="info">{end_date}</p>
            </li>
            <li>
              <span className="title">Tools</span>
              <p className="info">{tools}</p>
            </li>
          </ul>
          {main_content && main_content.length
            ? main_content.map((content, i) => (
                <div key={`project_details-content-${i}`}>
                  {contentSection(content)}
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
