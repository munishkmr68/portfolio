import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasTextRevealAnim(areveal) {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      try {
        if (areveal) {
          let duration_value = areveal.getAttribute("data-duration")
            ? areveal.getAttribute("data-duration")
            : 1.5;
          let onscroll_value = areveal.getAttribute("data-on-scroll")
            ? areveal.getAttribute("data-on-scroll")
            : 1;
          let stagger_value = areveal.getAttribute("data-stagger")
            ? areveal.getAttribute("data-stagger")
            : 0.02;
          let data_delay = areveal.getAttribute("data-delay")
            ? areveal.getAttribute("data-delay")
            : 0.05;

          areveal.split = new SplitText(areveal, {
            type: "lines,words,chars",
            linesClass: "anim-reveal-line",
          });
          areveal.anim = gsap.from(areveal.split.chars, {
            scrollTrigger:
              onscroll_value == 1
                ? {
                    trigger: areveal,
                    start: "top 85%",
                  }
                : "",
            duration: duration_value,
            delay: data_delay,
            ease: "circ.out",
            y: 80,
            stagger: stagger_value,
            opacity: 0,
          });
        }
      } catch (e) {
        console.log(e);
      }
    });
    return () => tHero.revert();
  }
}
