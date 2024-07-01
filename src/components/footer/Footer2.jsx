import Link from "next/link";
import siteConfig from "@/config/siteConfig.json";

import Logo from "../common/Logo";

import { socialShare1 } from "@/lib/utils/helper/social";

export default function Footer2() {
  const { social, footer_info } = siteConfig;
  const { mobile, email, copyright } = footer_info;

  return (
    <footer className="footer2 pb-0">
      <div className="top">
        <div className="container g-0">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Logo customWidth={100} customHeight={50} />
              </div>
            </div>
            <div className="col-lg-9">
              <div className="info">
                <div>
                  <h3 className="title">Contact</h3>
                  <Link href={`tel:${mobile}`} className="link">
                    {mobile}
                  </Link>
                </div>
                <div>
                  <h3 className="title">Email</h3>
                  <Link href={`mailto:${email}`} className="link">
                    {email}
                  </Link>
                </div>
                {social && social.length && (
                  <div className="social">
                    <h3 className="title">Follow</h3>
                    <ul className="hover-zoom">
                      {social.map((item, i) => (
                        <li key={`hero_social_link-${i}`}>
                          {socialShare1(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {copyright && copyright.enable && (
        <div className="footer__btm">
          <div className="container">
            <div className="copyright">
              <p>
                {copyright.label}{" "}
                <Link href={copyright.link}>{copyright.company}</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
