import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasButtonAnim(main_content) {
  if (main_content) {
    const gsapFunction = (items) => {
      let tHero = gsap.context(() => {
        try {
          if (items) {
            gsap.set(items, { opacity: 0, x: 35 });
            gsap.to(items, {
              scrollTrigger: {
                trigger: main_content,
                start: "top 85%",
              },
              opacity: 1,
              x: 0,
              duration: 2,
              ease: "power4.out",
              stagger: 0.3,
              rotation: 0,
            });
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    };
    if (typeof window !== "undefined") {
      let allBtn = [];
      if (main_content.children) {
        for (let i = 0; i < main_content.children.length; i++) {
          allBtn.push(main_content.children[i]);
        }
        gsapFunction(allBtn);
      }
    }
  }
}
