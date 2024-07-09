"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/lib/plugins";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmootherComponents = () => {
  const [changePath, setChangePath] = useState("");
  const pathname = usePathname();
  let history = "";

  useEffect(() => {
    if (history !== pathname) {
      setChangePath(pathname);
    }
    if (changePath) {
      try {
        let device_width = window.innerWidth;
        let tHero = gsap.context(() => {
          ScrollSmoother.create({
            smooth: 1,
            effects: device_width < 1025 ? false : true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
          });
        });
        return () => tHero.revert();
      } catch (e) {
        console.log("scrollSmootherError", e);
      }
    }
  }, [changePath, pathname, history]);
  return <div></div>;
};

export default ScrollSmootherComponents;
