import { notFound } from "next/navigation";
import { getSinglePage } from "@/lib/utils/helper/contentConverter";

import SeoData from "@/components/common/SeoData";
import CTA1 from "@/components/cta/CTA1";
import DeveloperServiceDetails from "@/components/service/details/DeveloperServiceDetails";

export const generateStaticParams = () => {
  const services = getSinglePage("services/dev");
  const paths = services.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

export default function DevServiceDetails({ params }) {
  const services = getSinglePage("services/dev");
  if (!(services && services.length)) {
    notFound();
  }
  const service = services.find((item) => item.slug === params.title);
  const related = services.filter((item) => item.slug !== params.title);

  if (!(service && service.frontmatter)) {
    notFound();
  }

  const { meta_title, meta_description } = service.frontmatter.meta || {};
  return (
    <main>
      <SeoData
        title={service.frontmatter.title || "Service details page"}
        meta_title={meta_title || "Service details page"}
        description={meta_description || "Service details page description"}
      />
      <DeveloperServiceDetails
        details={service}
        related={related.slice(0, 4)}
        rootUrl="/developer"
      />
      <CTA1 rootUrl="/developer" />
    </main>
  );
}
