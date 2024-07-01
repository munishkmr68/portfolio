import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasItemAnim(main_content) {
  if (main_content) {
    const gsapFunction = (items) => {
      let device_width = window.innerWidth;

      let tHero = gsap.context(() => {
        try {
          if (items) {
            if (device_width < 100) {
              items.forEach((item) => {
                gsap.set(item, { opacity: 0, scale: 0.9 });
                let featured2Timeline = gsap.timeline({
                  scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                  },
                });
                featured2Timeline.to(item, {
                  opacity: 1,
                  scale: 10,
                  duration: 1.5,
                  ease: "bounce",
                });
              });
            } else {
              gsap.set(items, {
                opacity: 0,
                scale: 1.15,
                rotation: 2,
              });
              gsap.to(items, {
                scrollTrigger: {
                  trigger: items,
                  start: "top center+=200",
                },
                opacity: 1,
                scale: 1,
                duration: 2,
                ease: "bounce",
                stagger: 0.2,
                rotation: 0,
              });
            }
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    };
    if (typeof window !== "undefined") {
      let allItem = [];
      if (main_content.children) {
        for (let i = 0; i < main_content.children.length; i++) {
          allItem.push(main_content.children[i]);
        }
        gsapFunction(allItem);
      }
    }
  }
}
