import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasImgScaleAnim(container) {
  if (container) {
    const gsapFunction = (items) => {
      let tHero = gsap.context(() => {
        try {
          if (items) {
            gsap.set(items, {
              scale: 0.7,
            });
            gsap.to(items, {
              scrollTrigger: {
                trigger: items,
                start: "top 90%",
                scrub: true,
              },
              scale: 1,
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    };
    if (typeof window !== "undefined") {
      let allItem = [];
      if (container.children) {
        for (let i = 0; i < container.children.length; i++) {
          allItem.push(container.children[i]);
        }
        gsapFunction(allItem);
      }
    }
  }
}
