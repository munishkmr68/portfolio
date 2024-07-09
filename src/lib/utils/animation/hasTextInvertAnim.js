import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function hasTextInvertAnim(text_invert) {
  if (typeof window !== "undefined") {
    if (history.includes(text_invert)) {
      return;
    } else {
      history.push(text_invert);
      let tHero = gsap.context(() => {
        try {
          if (text_invert) {
            const split = new SplitText(text_invert, { type: "lines" });

            split.lines.forEach((target) => {
              gsap.to(target, {
                backgroundPositionX: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: target,
                  scrub: 1,
                  start: "top 85%",
                  end: "bottom center",
                },
              });
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    }
  }
}
