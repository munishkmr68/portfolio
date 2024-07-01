"use client";

import { useEffect, useState } from "react";

import { ProgressBar } from "react-bootstrap";

export default function SkillCard3({
  dataName,
  dataPercentage,
  dataColor = "#9A9EFF",
}) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < dataPercentage) {
        setPercentage(percentage + 1);
      }
    }, 30);
  }, [percentage, dataPercentage]);
  return (
    <div className="skill-card-3" >
      <div className="content">
        <p>{dataName}</p>
        <p>{percentage}%</p>
      </div>
      <ProgressBar
        now={percentage}
        style={{ "--progress-bg-color": dataColor }}
      />
    </div>
  );
}
