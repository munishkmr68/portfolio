"use client";

import { useState } from "react";

import PDServiceDetailsDialog from "../dialog/PDServiceDetailsDialog";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";

export default function ServiceCard2({ service = undefined, i }) {
  const { title, short_description, feature } = service?.frontmatter || {};
  const [modalShow, setModalShow] = useState(false);
  const [detailsData, setDetailsData] = useState({});
  return (
    <>
      <div
        className="service-card-2 has_fade_anim"
        onClick={() => {
          setModalShow(true);
          setDetailsData(service);
        }}
        style={{ cursor: "pointer" }}
      >
        <h2 className="number">{i + 1 <= 9 ? "0" + (i + 1) : i + 1}</h2>
        <h3
          className="title"
          dangerouslySetInnerHTML={convertWithBrSpanImg(title)}
        />
        <p>{short_description}</p>
        {feature && feature.length && (
          <ul className="list-plus">
            {feature.map((item, j) => (
              <li key={`service_feature-${i}${j}`}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <PDServiceDetailsDialog
        show={modalShow}
        onHide={() => setModalShow(false)}
        details_data={detailsData}
      />
    </>
  );
}
