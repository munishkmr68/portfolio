import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import PortfolioInnerPage from "@/components/portfolio/PortfolioInnerPage";

export default function DevPortfolio() {
  const portfolio = getListPage("/portfolios/dev/_index.md");
  const portfolios = getSinglePage("/portfolios/dev");

  const { meta_title, meta_description } = portfolio.frontmatter.meta || {};
  return (
    <main>
      <SeoData
        title={portfolio.frontmatter.title || "Portfolio page"}
        meta_title={meta_title || "Portfolio page"}
        description={meta_description || "Portfolio page description"}
      />
      <PortfolioInnerPage
        portfolio={portfolio}
        portfolios={portfolios}
        rootUrl="/developer"
      />
    </main>
  );
}
