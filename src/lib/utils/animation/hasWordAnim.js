import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasWordAnim(word_anim_item) {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      try {
        if (word_anim_item) {
          let stagger_value = word_anim_item.getAttribute("data-stagger")
            ? word_anim_item.getAttribute("data-stagger")
            : 0.05;
          let translateX_value = word_anim_item.getAttribute("data-translateX")
            ? word_anim_item.getAttribute("data-translateX")
            : false;
          let translateY_value = word_anim_item.getAttribute("data-translateY")
            ? word_anim_item.getAttribute("data-translateY")
            : false;
          let onscroll_value = word_anim_item.getAttribute("data-on-scroll")
            ? word_anim_item.getAttribute("data-on-scroll")
            : 1;
          let data_delay = word_anim_item.getAttribute("data-delay")
            ? word_anim_item.getAttribute("data-delay")
            : 0.5;

          let split_word = new SplitText(word_anim_item, {
            type: "chars, words",
          });
          gsap.from(split_word.words, {
            duration: 1,
            x: translateX_value ? translateX_value : translateY_value ? 0 : 20,
            y: translateY_value ? translateY_value : 0,
            autoAlpha: 0,
            stagger: stagger_value,
            delay: data_delay,
            scrollTrigger:
              onscroll_value == 1
                ? {
                    trigger: word_anim_item,
                    start: "top 90%",
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
