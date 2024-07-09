import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasCharAnim(item) {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      try {
        if (item) {
          let stagger_value = item.getAttribute("data-stagger")
            ? item.getAttribute("data-stagger")
            : 0.05;
          let translateX_value = item.getAttribute("data-translateX")
            ? item.getAttribute("data-translateX")
            : false;
          let translateY_value = item.getAttribute("data-translateY")
            ? item.getAttribute("data-translateY")
            : false;
          let onscroll_value = item.getAttribute("data-on-scroll")
            ? item.getAttribute("data-on-scroll")
            : 1;
          let data_delay = item.getAttribute("data-delay")
            ? item.getAttribute("data-delay")
            : 0.5;

          let split_char = new SplitText(item, {
            type: "chars, words",
          });
          gsap.from(split_char.chars, {
            duration: 1,
            delay: data_delay,
            x: translateX_value ? translateX_value : translateY_value ? 0 : 20,
            y: translateY_value ? translateY_value : 0,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger:
              onscroll_value == 1
                ? {
                    trigger: item,
                    start: "top 85%",
                  }
                : "",
          });
        }
      } catch (e) {
        console.log(e);
      }
    });
    return () => tHero.revert();
  }
}
