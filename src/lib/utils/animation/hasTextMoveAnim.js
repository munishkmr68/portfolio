import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function hasTextMoveAnim(splitTextLine) {
  if (typeof window !== "undefined") {
    if (history.includes(splitTextLine)) {
      return;
    } else {
      history.push(splitTextLine);
      let tHero = gsap.context(() => {
        try {
          if (splitTextLine) {
            let delay_value = splitTextLine.getAttribute("data-delay")
              ? splitTextLine.getAttribute("data-delay")
              : 0.5;
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: splitTextLine,
                start: "top 85%",
                duration: 1.5,
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
              },
            });

            const itemSplitted = new SplitText(splitTextLine, {
              type: "lines",
            });
            gsap.set(splitTextLine, {
              perspective: 400,
            });
            itemSplitted.split({
              type: "lines",
            });
            tl.from(itemSplitted.lines, {
              duration: 1,
              delay: delay_value,
              opacity: 0,
              rotationX: -80,
              force3D: true,
              transformOrigin: "top center -50",
              stagger: 0.1,
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
