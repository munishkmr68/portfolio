import Image from "next/image";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

const contentSection = (item) => {
  if (item.type === "only-text") {
    return (
      <div>
        <p>{item.text}</p>
      </div>
    );
  } else if (item.type === "only-image") {
    return (
      <div className="thumb1">
        <Image
          width={660}
          height={350}
          style={{ height: "auto" }}
          priority
          src={item.image}
          className="jh-img"
          alt="Image"
        />
      </div>
    );
  } else if (item.type === "only-heading") {
    return <h2>{item.heading}</h2>;
  } else if (item.type === "only-list") {
    return (
      <>
        {item.list && item.list.length && (
          <ul className="servicelist list-plus">
            {item.list.map((el, i) => (
              <li key={`list_item-${i + Math.random() * 100}`}>{el} </li>
            ))}
          </ul>
        )}
      </>
    );
  }
};

export default function PDServiceDetails({
  details = undefined,
  customPadding = "",
  titleUppercase = false,
}) {
  const { title, image, category, main_content } = details?.frontmatter || {};

  return (
    <section
      className={`pd-service-details ${
        customPadding ? customPadding : "pb-30"
      } `}
    >
      <div className="container">
        <div className="wrapper">
          <h2
            className={`title ${titleUppercase ? "text-uppercase" : ""}`}
            data-on-scroll="0"
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
          <h2
            className={`dis ${titleUppercase ? "text-uppercase" : ""}`}
            data-on-scroll="0"
          >
            {category}
          </h2>
          <div className="detail-thumb-anim mt-70 mb-60">
            <Image
              width={1290}
              height={700}
              src={image}
              className="jh-img"
              alt="details thumb"
              data-speed="auto"
            />
          </div>
          <div className="content mb-60">
            <h3
              className={`title2 mb-30 ${
                titleUppercase ? "text-uppercase" : ""
              }`}
            >
              {main_content.title}
            </h3>
            <div className="dis2">
              <p>{main_content.description}</p>
            </div>
          </div>
          {main_content.items && main_content.items.length && (
            <div className="items">
              {main_content.items.map((item, i) => (
                <div className="item" key={`main_content-item-${i}`}>
                  <div className="left">
                    <h3 className="list ">
                      {i + 1 <= 9 ? "0" + (i + 1) : i + 1}/{" "}
                      <span
                        className={`${titleUppercase ? "text-uppercase" : ""}`}
                      >
                        {item.name}
                      </span>
                    </h3>
                  </div>
                  <div className="right">
                    {item.content && item.content.length
                      ? item.content.map((content, j) => (
                          <div key={`item_content-${j}`}>
                            {contentSection(content)}
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
