"use client";

const { createContext, useEffect, useReducer } = require("react");

const initialState = {
  mode: "light",
  direction: "",
  layout: "",
  overlay: "",
  switcherDir: "right",
  stopScrollTop: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setMode":
      return { ...state, mode: action.value };
    case "setDirection":
      return { ...state, direction: action.value };
    case "setLayout":
      return { ...state, layout: action.value };
    case "setOverlay":
      return { ...state, layout: action.value };
    case "setSwitcherDir":
      return { ...state, switcherDir: action.value };
    case "setStopScrollTop":
      return { ...state, stopScrollTop: action.value };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [mainState, dispatch] = useReducer(reducer, initialState);

  const { mode, direction, layout, overlay, switcherDir, stopScrollTop } =
    mainState;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (mode == "light") {
        document.querySelector("body").classList.add("light");
      } else {
        if (document.querySelector("body").classList.contains("light")) {
          document.querySelector("body").classList.remove("light");
        }
      }
    }
  }, [mode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (direction == "rtl") {
        document.querySelector("body").classList.add("dir-rtl");
      } else {
        if (document.querySelector("body").classList.contains("dir-rtl")) {
          document.querySelector("body").classList.remove("dir-rtl");
        }
      }
    }
  }, [direction]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (layout == "box") {
        document.getElementById("smooth-content").classList.add("box-layout");
      } else {
        if (
          document.getElementById("smooth-content") &&
          document
            .getElementById("smooth-content")
            .classList.contains("box-layout")
        ) {
          document
            .getElementById("smooth-content")
            .classList.remove("box-layout");
        }
      }
    }
  }, [layout]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (overlay == "yes") {
        document
          .getElementById("overlay-container")
          .classList.add("body-overlay");
      } else {
        if (
          document.getElementById("overlay-container") &&
          document
            .getElementById("overlay-container")
            .classList.contains("body-overlay")
        ) {
          document
            .getElementById("overlay-container")
            .classList.remove("body-overlay");
        }
      }
    }
  }, [overlay]);
  return (
    <AppContext.Provider
      value={{
        mode,
        direction,
        layout,
        overlay,
        switcherDir,
        stopScrollTop,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
