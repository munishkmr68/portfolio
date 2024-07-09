import { gsap } from "gsap";
import { ScrollTrigger } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

let history = [];

export default function hasPinContent(pin_content, trigger_content, width) {
  if (typeof window !== "undefined") {
    let device_width = window.innerWidth;
    if (history.includes(pin_content)) {
      return;
    } else {
      history.push(pin_content);
      let tHero = gsap.context(() => {
        try {
          if (pin_content) {
            if (width) {
              if (device_width > width) {
                gsap.to(pin_content, {
                  scrollTrigger: {
                    trigger: trigger_content,
                    pin: pin_content,
                    pinSpacing: false,
                    start: "top top",
                    end: "bottom bottom",
                    delay: 1,
                  },
                });
              }
            } else {
              gsap.to(pin_content, {
                scrollTrigger: {
                  trigger: trigger_content,
                  pin: pin_content,
                  pinSpacing: false,
                  start: "top top",
                  end: "bottom bottom",
                  delay: 1,
                },
              });
            }
          }
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    }
  }
}
