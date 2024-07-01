"use client";

import Link from "next/link";
import { useEffect } from "react";

import hasSinglePageNavigation from "@/lib/utils/animation/hasSinglePageNavigation";

export default function Menu1({ navData }) {
  useEffect(() => {
    hasSinglePageNavigation();
  }, []);
  return (
    <div className="menu1">
      {navData && navData.length && (
        <ul className="sidebar-menu one_page_menu hover-space">
          {navData.map((item, i) => (
            <li key={`header_nav-${i}`}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
