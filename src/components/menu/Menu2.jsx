"use client";

import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

export default function Menu2({ navData }) {
  const pathname = usePathname();

  return (
    <nav className="main-menu">
      {navData && navData.length && (
        <ul>
          {navData.map((menu, i) => (
            <React.Fragment key={`nav-${i}`}>
              {menu.hasChildren ? (
                <li>
                  <span className="angle-icon">
                    {menu.name}{" "}
                    <>
                      <FaAngleDown />
                    </>
                  </span>

                  <ul className="dp-menu">
                    {menu.children.length &&
                      menu.children.map((child, i) => (
                        <li key={`child-${i}`}>
                          <Link
                            className={
                              pathname === `${child.path}/` ||
                              pathname === child.path
                                ? "active-nav"
                                : ""
                            }
                            href={child.path}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ) : (
                <li>
                  <Link
                    className={
                      pathname === `${menu.path}/` || pathname === menu.path
                        ? "active-nav"
                        : ""
                    }
                    href={menu.path}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </nav>
  );
}
