"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/config/siteConfig.json";

import { Modal } from "react-bootstrap";

import { socialShare1 } from "@/lib/utils/helper/social";

export default function OffCanvas1({ show, setShow, headerData, ...props }) {
  const { footer_info, social } = siteConfig;
  const { email, mobile, address } = footer_info;
  const pathname = usePathname();

  useEffect(() => {
    setShow(false);
  }, [pathname, setShow]);
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        className="offcanvas-1"
        fullscreen={true}
        {...props}
      >
        <div className="area">
          <div className="inner">
            <div className="meta-wrapper">
              <div className="">
                <button
                  id="close_offcanvas"
                  className="close-button"
                  onClick={() => setShow(false)}
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className="">
                <div className="meta mb-145 d-none d-md-block">
                  <ul>
                    <li>
                      <Link href={`tel:${mobile}`} className="unnerline">
                        <u>{mobile}</u>
                      </Link>
                    </li>
                    <li>
                      <Link href={`mailto:${email}`}>{email}</Link>
                    </li>
                    <li>
                      <Link href={address.link}>{address.name}</Link>
                    </li>
                  </ul>
                </div>
                {social && social.length && (
                  <div className="social d-none d-md-block">
                    <h4 className="title">Follow Me</h4>
                    <div className="social-links">
                      {social.map((item) => socialShare1(item))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="menu-wrapper">
              <nav className="nav-menu menu">
                {headerData && headerData.length && (
                  <ul>
                    {headerData.map((item, i) => (
                      <li
                        key={`offcanvas_nav-${i}`}
                        onClick={() => setShow(false)}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
