"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

import PortfolioCard2 from "./card/PortfolioCard2";

import { convertWithBrSpanImg } from "@/lib/utils/helper/converter";
import hasCharAnim from "@/lib/utils/animation/hasCharAnim";
import hasFadeAnim from "@/lib/utils/animation/hasFadeAnim";
import hasTextRevealAnim from "@/lib/utils/animation/hasTextRevealAnim";
import hasButtonAnim from "@/lib/utils/animation/hasButtonAnim";
import hasItemAnim from "@/lib/utils/animation/hasItemAnim";

export default function PortfolioInnerPage({
  portfolio = undefined,
  portfolios,
  rootUrl = "",
}) {
  const { sec_name, sec_title, filter_category } = portfolio?.frontmatter || {};

  const [mainData, setMainData] = useState(portfolios.slice(0, 7));
  const [portfolioData, setPortfolioData] = useState(mainData);
  const [isActive, setIsActive] = useState(filter_category[0]);

  const charAnim = useRef("");
  const textRevealAnim = useRef("");
  const fadeAnim = useRef("");
  const btnAnim = useRef("");
  const itemAnim = useRef("");
  const searchParams = useSearchParams();

  useEffect(() => {
    hasCharAnim(charAnim.current);
    hasTextRevealAnim(textRevealAnim.current);
    hasFadeAnim(fadeAnim.current);
    hasButtonAnim(btnAnim.current);
    hasItemAnim(itemAnim.current);
  }, []);

  const filtering = useCallback(
    (data) => {
      setIsActive(data);
      document.startViewTransition(() => {
        if (portfolios && portfolios.length) {
          if (data.toLowerCase() === filter_category[0].toLowerCase()) {
            setPortfolioData(mainData);
          } else {
            let result = mainData.filter((el) =>
              el.frontmatter.category.find(
                (cat) => cat.toLowerCase() === data.toLowerCase()
              )
            );
            setPortfolioData(result);
          }
        }
      });
    },
    [filter_category, mainData, portfolios]
  );

  useEffect(() => {
    if (searchParams.get("tab")) {
      filtering(searchParams.get("tab"));
    }
  }, [searchParams, filtering]);

  const findNumber = (data) => {
    let result;
    if (data.toLowerCase() === filter_category[0].toLowerCase()) {
      result = portfolios;
    } else {
      result = portfolios.filter((el) =>
        el.frontmatter.category.find(
          (cat) => cat.toLowerCase() === data.toLowerCase()
        )
      );
    }

    return result.length.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  const loadFull = () => {
    setIsActive(filter_category[0]);
    setMainData(portfolios);
    setPortfolioData(portfolios);
  };
  return (
    <section className="pd-portfolio pt-70">
      <div className="container line pt-120 pb-130">
        <div className="sec-title-wrapper">
          <div className="pb-20">
            <h2 className="sec-sub-title" ref={charAnim}>
              {sec_name}
            </h2>
          </div>
          <h3
            className="sec-title"
            ref={textRevealAnim}
            dangerouslySetInnerHTML={convertWithBrSpanImg(sec_title)}
          />
        </div>

        {filter_category && filter_category.length && (
          <>
            <div className="btn-list" ref={btnAnim}>
              {filter_category.map((category, i) => (
                <Link
                  key={`portfolio_category-${i}`}
                  href={`portfolio?tab=${category}`}
                >
                  <button
                    data-filter="all"
                    className={isActive === category ? "active" : ""}
                  >
                    <span>{findNumber(category)}</span> {category}
                  </button>
                </Link>
              ))}
            </div>

            {portfolios && portfolios.length && (
              <div className="flex" ref={itemAnim}>
                {portfolioData.map((portfolio, i) => (
                  <PortfolioCard2
                    key={`portfolio_card-${i}`}
                    portfolio={portfolio}
                    rootUrl={rootUrl}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {mainData.length !== portfolios.length && (
          <div
            className="wc-btn"
            ref={fadeAnim}
            data-fade-from="top"
            data-ease="bounce"
          >
            <button onClick={loadFull} className="btn-hover-mask">
              Load More <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
