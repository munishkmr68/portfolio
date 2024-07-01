import { getListPage } from "@/lib/utils/helper/contentConverter";

import CTA2 from "@/components/cta/CTA2";

export default function PageLayout4Inner({ children }) {
  const cta = getListPage("/ctas/cta2.md");
  return (
    <>
      {children}
      <CTA2 cta={cta} rootUrl="/digital-marketer" />
    </>
  );
}
