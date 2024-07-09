"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/app.context";

import Logo from "../common/Logo";
import Menu2 from "../menu/Menu2";
import OffCanvas2 from "../offcanvas/Offcanvas2";

export default function Header4({ headerData, posAbs = true }) {
  const [show, setShow] = useState(false);
  const { direction } = useContext(AppContext);

  return (
    <header className={`header4 ${posAbs ? "pos-abs" : ""}`}>
      <div className="inner">
        <div className="logo">
          <Logo customWidth={81} customHeight={40} />
        </div>
        <div className="nav">
          <Menu2 navData={headerData} />
        </div>
        <>
          <button className="menu-icon" onClick={() => setShow(true)}>
            <span></span>
          </button>
        </>
      </div>
      <OffCanvas2
        show={show}
        setShow={setShow}
        headerData={headerData}
        placement={direction === "rtl" ? "start" : "end"}
      />
    </header>
  );
}
