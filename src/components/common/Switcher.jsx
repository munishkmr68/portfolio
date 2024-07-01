"use client";

import { useEffect, useRef } from "react";
import { FaGear, FaXmark } from "react-icons/fa6";

const Switcher = ({ dispatch, cursor1, cursor2, switcherDir }) => {
  const switcherIcon = useRef();
  const switcherItems = useRef();
  const switcherOpen = useRef();
  const switcherClose = useRef();
  const cursorStyle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      switcherIcon.current.style.zIndex = "1000";
      switcherItems.current.style.zIndex = "1000";

      // Mode
      const modeList = document.querySelectorAll(".mode-type button");
      for (let i = 0; i < modeList.length; i++) {
        modeList[i].addEventListener("click", function (e) {
          modeList[i].classList.add("active");
          for (let sib of modeList[i].parentElement.children) {
            if (sib !== modeList[i]) {
              sib.classList.remove("active");
            }
          }

          let mode_val = document
            .querySelector(".mode-type button.active")
            .getAttribute("data-mode");
          if (mode_val == "light") {
            document.querySelector("body").classList.add("light");
            dispatch({
              type: "setMode",
              value: "light",
            });
          } else {
            document.querySelector("body").classList.remove("light");
            dispatch({
              type: "setMode",
              value: "",
            });
          }
        });
      }
      // layout
      const layoutList = document.querySelectorAll(".layout-type button");
      for (let i = 0; i < layoutList.length; i++) {
        layoutList[i].addEventListener("click", function (e) {
          layoutList[i].classList.add("active");
          for (let sib of layoutList[i].parentElement.children) {
            if (sib !== layoutList[i]) {
              sib.classList.remove("active");
            }
          }

          let mode_val = document
            .querySelector(".layout-type button.active")
            .getAttribute("data-mode");
          if (mode_val == "box") {
            document
              .getElementById("smooth-content")
              .classList.add("box-layout");
            dispatch({
              type: "setLayout",
              value: "box",
            });
          } else {
            document
              .getElementById("smooth-content")
              .classList.remove("box-layout");
            dispatch({
              type: "setLayout",
              value: "",
            });
          }
        });
      }
      // Direction
      const directionList = document.querySelectorAll(".direction-type button");
      for (let i = 0; i < directionList.length; i++) {
        directionList[i].addEventListener("click", function (e) {
          directionList[i].classList.add("active");
          for (let sib of directionList[i].parentElement.children) {
            if (sib !== directionList[i]) {
              sib.classList.remove("active");
            }
          }

          let mode_val = document
            .querySelector(".direction-type button.active")
            .getAttribute("data-mode");
          if (mode_val == "rtl") {
            document.querySelector("body").classList.add("dir-rtl");
            dispatch({
              type: "setDirection",
              value: "rtl",
            });
          } else {
            document.querySelector("body").classList.remove("dir-rtl");
            dispatch({
              type: "setDirection",
              value: "",
            });
          }
        });
      }
      // overlay
      const OverlayList = document.querySelectorAll(".overlay-type button");
      for (let i = 0; i < OverlayList.length; i++) {
        OverlayList[i].addEventListener("click", function (e) {
          OverlayList[i].classList.add("active");
          for (let sib of OverlayList[i].parentElement.children) {
            if (sib !== OverlayList[i]) {
              sib.classList.remove("active");
            }
          }

          let mode_val = document
            .querySelector(".overlay-type button.active")
            .getAttribute("data-mode");
          if (mode_val == "yes") {
            document
              .getElementById("overlay-container")
              .classList.add("body-overlay");
            dispatch({
              type: "setOverlay",
              value: "yes",
            });
          } else {
            document
              .getElementById("overlay-container")
              .classList.remove("body-overlay");
            dispatch({
              type: "setOverlay",
              value: "",
            });
          }
        });
      }
    }
  }, [dispatch]);

  const openSwitcher = () => {
    switcherOpen.current.style.display = "none";
    switcherClose.current.style.display = "flex";
    switcherIcon.current.style[switcherDir] = "280px";
    switcherItems.current.style[switcherDir] = "0";
  };
  const closeSwitcher = () => {
    switcherClose.current.style.display = "none";
    switcherOpen.current.style.display = "flex";
    switcherIcon.current.style[switcherDir] = "0";
    switcherItems.current.style[switcherDir] = "-280px";
  };
  const cursor = () => {
    let cursor_val = cursorStyle.current.value;

    if (cursor_val == "1") {
      cursor1.current.style.display = "none";
      cursor2.current.style.display = "none";
    } else {
      cursor1.current.style.display = "";
      cursor2.current.style.display = "";
    }
  };
  return (
    <>
      <div className="switcher__area">
        <div
          className={`switcher__icon ${
            switcherDir === "left" ? "switcher_left" : ""
          }`}
          ref={switcherIcon}
        >
          <button id="switcher_open" ref={switcherOpen} onClick={openSwitcher}>
            <FaGear />
          </button>
          <button
            id="switcher_close"
            ref={switcherClose}
            onClick={closeSwitcher}
          >
            <FaXmark />
          </button>
        </div>

        <div
          className={`switcher__items ${
            switcherDir === "left" ? "switcher_left" : ""
          }`}
          ref={switcherItems}
        >
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title text-white">Cursor</h2>
            </div>
            <div className="switcher__btn">
              <select
                defaultValue={2}
                name="cursor-style"
                id="cursor_style"
                ref={cursorStyle}
                onChange={cursor}
              >
                <option value="1">default</option>
                <option value="2">animated</option>
              </select>
            </div>
          </div>

          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title text-white">mode</h2>
            </div>
            <div className="switcher__btn mode-type wc-col-2">
              <button data-mode="light">light</button>
              <button className="active" data-mode="dark">
                dark
              </button>
            </div>
          </div>
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title text-white">Direction</h2>
            </div>
            <div className="switcher__btn direction-type wc-col-2">
              <button className="active" data-mode="ltr">
                LTR
              </button>
              <button data-mode="rtl">RTL</button>
            </div>
          </div>
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title text-white">Layout</h2>
            </div>
            <div className="switcher__btn layout-type wc-col-2">
              <button data-mode="box">Box</button>
              <button className="active" data-mode="full">
                Full
              </button>
            </div>
          </div>
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title text-white">Overlay</h2>
            </div>
            <div className="switcher__btn overlay-type wc-col-2">
              <button data-mode="yes">Yes</button>
              <button className="active" data-mode="full">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
