"use client";

import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/context/app.context";

import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const { stopScrollTop } = useContext(AppContext);

  const topScroll = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll_top = topScroll.current;
      if (scroll_top) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            scroll_top.style.display = "block";
          } else {
            scroll_top.style.display = "none";
          }
        };
      }
    }
  }, []);

  if (stopScrollTop) return;

  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <button
        ref={topScroll}
        style={{ display: "none" }}
        className="scroll-top"
        onClick={goToTop}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollTop;
