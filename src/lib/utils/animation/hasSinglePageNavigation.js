import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function hasSinglePageNavigation() {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      try {
        let sidebar_links = gsap.utils.toArray(".one_page_menu li a");
        sidebar_links.forEach((a) => {
          let element = document.querySelector(
            "#" + a.getAttribute("href").split("#")[1]
          );
          let linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top",
          });
          ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => self.trigger && setActive(a),
          });
          a.addEventListener("click", (e) => {
            e.preventDefault();
            gsap.to(window, {
              duration: 0.1,
              scrollTo: linkST.start,
              overwrite: "auto",
            });
          });
        });

        function setActive(link) {
          sidebar_links.forEach((el) => el.classList.remove("active"));
          link.classList.add("active");
        }
      } catch (e) {
        console.log(e);
      }
    });
    return () => tHero.revert();
  }
}

export function hasSingleNavigation(navItem) {
  if (typeof window !== "undefined") {
    let tHero = gsap.context(() => {
      try {
        let element = document.querySelector(
          "#" + navItem.getAttribute("href").split("#")[1]
        );
        let linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
        });
        navItem.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 0.1,
            scrollTo: linkST.start,
            overwrite: "auto",
          });
        });
      } catch (e) {
        console.log(e);
      }
    });
    return () => tHero.revert();
  }
}
