"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/config/siteConfig.json";

import { Modal } from "react-bootstrap";

import { socialShare1 } from "@/lib/utils/helper/social";

export default function OffCanvas3({ show, setShow, headerData, ...props }) {
  const { footer_info, social } = siteConfig;
  const { email, mobile, address } = footer_info;
  const pathname = usePathname();

  useEffect(() => {
    setShow(false);
  }, [pathname, setShow]);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="offcanvas-3"
      fullscreen={true}
      {...props}
    >
      <div className="area">
        <div className="inner">
          <div className="button-wrapper">
            <button
              className="text-close-button"
              onClick={() => setShow(false)}
            >
              CLOSE
            </button>
          </div>
          <div className="content-wrapper">
            {social && social.length && (
              <div className="social d-none d-md-flex">
                <div className="social-links">
                  {social.map((item) => socialShare1(item))}
                </div>
                <h4 className="title has-left-line">FOLLOW</h4>
              </div>
            )}
            <div className="thumb d-none d-lg-block">
              <Image
                width={410}
                height={620}
                src="/assets/imgs/gallery/gallery-01.jpg"
                className="jh-img"
                alt="image"
              />
            </div>
            <div className="menu-wrapper">
              <nav className="menu hover-border-move">
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
            <div className="meta">
              <ul>
                <li>
                  <Link href={`tel:${mobile}`}>{mobile}</Link>
                  <br />
                  <Link href={`mailto:${email}`}>{email}</Link>
                </li>
                <li>
                  <Link href={address.link}>{address.name}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
