"use client";

import { AppContext } from "@/context/app.context";
import { useContext, useEffect, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SkillCard2({ dataValue = 90, dataColor = "#9A9EFF" }) {
  const [percentage, setPercentage] = useState(0);
  const { mode } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < dataValue) {
        setPercentage(percentage + 1);
      }
    }, 30);
  }, [percentage, dataValue]);
  return (
    <div style={{ width: 110, height: 110 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "18px",
          pathTransitionDuration: 0.5,
          pathColor: `${dataColor}`,
          textColor: mode === "light" ? "#16254C" : "#fcfaf5",
          trailColor: mode === "light" ? "#cfcfcf" : "#233259",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
}
