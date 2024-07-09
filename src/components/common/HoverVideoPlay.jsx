"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function HoverVideoPlay({ url }) {
  const hoverIn = (event) => {
    if (event.target.getAttribute("preload")) {
      event.target.play();
    }
  };
  const hoverOut = (event) => {
    if (event.target.getAttribute("preload")) {
      event.target.pause();
    }
  };
  return (
    <>
      <ReactPlayer
        width="100%"
        height="100%"
        url={url}
        muted={true}
        loop={true}
        onMouseOver={(event) => hoverIn(event)}
        onMouseOut={(event) => hoverOut(event)}
      />
    </>
  );
}
