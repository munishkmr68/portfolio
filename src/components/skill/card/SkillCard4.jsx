"use client";

import { useEffect, useState } from "react";

export default function SkillCard4({
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
    }, 20);
  }, [percentage, dataPercentage]);
  return (
    <div className="skill-card-4">
      <p className="title">{dataName}</p>
      <div
        className="dot-progress"
        style={{ "--value": percentage, "--primary": dataColor }}
      ></div>
    </div>
  );
}
