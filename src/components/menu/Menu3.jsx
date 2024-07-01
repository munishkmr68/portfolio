"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import hasSinglePageNavigation from "@/lib/utils/animation/hasSinglePageNavigation";

export default function Menu3({ headerData }) {
  useEffect(() => {
    hasSinglePageNavigation();
  }, []);
  return (
    <nav className="menu3">
      {headerData && headerData.length && (
        <ul className="one_page_menu">
          {headerData.map((item, i) => (
            <li key={`header_nav-${i}`}>
              <Link href={item.path}>
                {item.image && (
                  <Image
                    width={20}
                    height={24}
                    style={{ height: "auto", width: "auto" }}
                    src={item.image}
                    alt="icon"
                  />
                )}

                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
