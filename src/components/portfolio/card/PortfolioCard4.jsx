import Link from "next/link";
import Image from "next/image";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

export default function PortfolioCard4({
  portfolio = undefined,
  rootUrl = "",
  dataSpreed = "auto",
}) {
  const { title, image, client, date } = portfolio?.frontmatter || {};
  return (
    <div className="portfolio-card4 img_anim_reveal">

        <div className="thumb" data-speed={dataSpreed}>
          <Image
            width={410}
            height={540}
            style={{ height: "auto" }}
            src={image}
            className="jh-img"
            alt="work-4"
          />
        </div>
        {/* <div className="content">
          <h4
            className="title"
            dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
          />
          <span className="name">{client}</span>
          <p className="date">{date}</p>
        </div> */}
    
    </div>
  );
}
