import {
  getListPage,
  getSinglePage,
} from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import DeveloperBrand2 from "@/components/brand/DeveloperBrand2";
import DeveloperServiceHero from "@/components/hero/DeveloperServiceHero";
import Separator2 from "@/components/separator/Separator2";
import DeveloperService from "@/components/service/DeveloperService";

export default function DevService() {
  const service = getListPage("/services/dev/_index.md");
  const services = getSinglePage("/services/dev");
  const brand = getListPage("/brands/pd-brand.md");

  const { meta_title, meta_description } = service.frontmatter.meta || {};
  return (
    <main>
      <SeoData
        title={service.frontmatter.title || "Service page"}
        meta_title={meta_title || "Service page"}
        description={meta_description || "Service page description"}
      />
      <DeveloperServiceHero service={service} />
      <Separator2 />
      <DeveloperService services={services} rootUrl="/developer" />
      <DeveloperBrand2 brand={brand} />
    </main>
  );
}
