import { gsap } from "gsap";

let history = [];

export const customDataCursor = ({
  parent_container,
  height = 120,
  width = 120,
  label = "Click <br> Here",
  backgroundColor = "#e8bf96bf",
}) => {
  const gsapFunction = (cursorItem) => {
    if (history.includes(cursorItem)) {
      return;
    } else {
      history.push(cursorItem);
      let tHero = gsap.context(() => {
        try {
          const cursor = {
            element: document.querySelector(".cursor1"),
            states: {
              backgroundColor,
              mixBlendMode: "unset",
              height,
              width,
            },
          };

          function handleMouseMove() {
            gsap.to(cursor.element, 0.3, cursor.states);
            cursor.element.innerHTML = label;
            cursor.element.style.display = "flex";
            cursor.element.style.justifyContent = "center";
            cursor.element.style.alignItems = "center";
            cursor.element.style.color = "white";
            cursor.element.style.fontWeight = "500";
            cursor.element.style.padding = "50px";
          }

          cursorItem.addEventListener("mousemove", handleMouseMove);

          cursorItem.addEventListener("mouseleave", () => {
            gsap.to(cursor.element, 0.3, {
              backgroundColor: "",
              height: 40,
              width: 40,
              mixBlendMode: "difference",
              padding: "unset",
            });
            cursor.element.innerHTML = "";
          });

          cursorItem.addEventListener("click", function () {
            gsap.to(cursor.element, 0.3, {
              backgroundColor: "",
              height: 40,
              width: 40,
              mixBlendMode: "difference",
              padding: "unset",
            });
            cursor.element.innerHTML = "";
          });
        } catch (e) {
          console.log(e);
        }
      });
      return () => tHero.revert();
    }
  };

  if (parent_container) {
    if (typeof window !== "undefined") {
      if (parent_container.children) {
        let children = Object.values(parent_container.children).filter((el) =>
          el.className.includes("custom_cursor")
        );
        if (children && children.length) {
          for (let j = 0; j < children.length; j++) {
            gsapFunction(children[j]);
          }
        } else {
          gsapFunction(parent_container);
        }
      }
    }
  }
};
