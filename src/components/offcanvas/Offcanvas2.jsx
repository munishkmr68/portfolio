"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "@/config/siteConfig.json";

import { Offcanvas } from "react-bootstrap";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

import Logo from "../common/Logo";

export default function OffCanvas2({
  show,
  setShow,
  headerData,
  custom_class = "",
  ...props
}) {
  const { site_info, social, gallery } = siteConfig;
  const [accordion, setAccordion] = useState(0);
  const pathname = usePathname();
  const openData = (data) => {
    setAccordion(data);
  };

  useEffect(() => {
    setShow(false);
  }, [pathname, setShow]);

  const socialIcon = (data) => {
    switch (data.toLowerCase()) {
      case "fb":
        return <FaFacebookF />;
      case "tw":
        return <FaTwitter />;
      case "in":
        return <FaInstagram />;
      case "db":
        return <FaDribbble />;
      case "li":
        return <FaLinkedin />;
    }
  };
  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        className={`offcanvas-2 ${custom_class}`}
        {...props}
      >
        <button className="close" onClick={() => setShow(false)}>
          <FaXmark />
        </button>
        <Offcanvas.Body>
          <div className="logo">
            <Logo />
            <p>{site_info.description}</p>
          </div>

          <div className="menu-area">
            <div className="menu-wrapper">
              <nav className="menu">
                {headerData && headerData.length && (
                  <ul>
                    {headerData.map((menu, i) => (
                      <React.Fragment key={`nav-${i}`}>
                        {menu.hasChildren ? (
                          <li>
                            <div className="header_title">
                              <Link href={menu.path}>{menu.name}</Link>
                              <div className="accordian-btn">
                                {accordion === i + 1 ? (
                                  <p onClick={() => openData(0)}>-</p>
                                ) : (
                                  <p onClick={() => openData(i + 1)}>+</p>
                                )}
                              </div>
                            </div>
                            {menu.children && menu.children.length && (
                              <ul
                                className="sub_title_2"
                                style={
                                  accordion === i + 1
                                    ? { display: "" }
                                    : { display: "none" }
                                }
                              >
                                {menu.children.map((child, i) => (
                                  <li key={`child_nav-${i}`}>
                                    <Link href={child.path}>{child.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ) : (
                          <li>
                            <div className="header_title">
                              <Link href={menu.path}>{menu.name}</Link>
                            </div>
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </nav>
            </div>
          </div>

          {gallery && gallery.items && gallery.items.length && (
            <div className="gallery">
              {gallery.title && Object.keys(gallery.title).length && (
                <h2 className="title">{gallery.title}</h2>
              )}

              <div className="gallery__items">
                {gallery.items.map((item, i) => (
                  <div className="gallery__item" key={`gallery_item-${i}`}>
                    <Link href={item.link}>
                      <Image
                        width={90}
                        height={91}
                        src={item.image}
                        priority
                        className="jh-img"
                        alt="gallery Image"
                      />
                      <span>
                        <FaInstagram />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="media">
            {social && social.length ? <h2 className="title">Follow</h2> : ""}
            <div>
              <ul className="social-media">
                {social.map((el, i) => (
                  <li key={`social_icon-${i}`}>
                    <Link target="_blank" href={el.link}>
                      {socialIcon(el.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
