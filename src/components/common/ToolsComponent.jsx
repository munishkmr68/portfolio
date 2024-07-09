"use client";

import { useContext, useRef } from "react";
import { AppContext } from "@/context/app.context";

import CursorAnimation from "./CursorAnimation";
import Switcher from "./Switcher";

export default function ToolsComponent() {
  const { dispatch, switcherDir } = useContext(AppContext);
  const cursor1 = useRef();
  const cursor2 = useRef();
  return (
    <>
      <CursorAnimation cursor1={cursor1} cursor2={cursor2} />

    </>
  );
}
