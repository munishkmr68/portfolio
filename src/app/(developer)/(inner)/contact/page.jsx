import SeoData from "@/components/common/SeoData";
import ProductDesignerContact from "@/components/contact/ProductDesignerContact";

export default function DevContact() {
  return (
    <main>
      <SeoData
        title="Contact page"
        meta_title="Contact page"
        description="Contact page description"
      />
      <ProductDesignerContact customPaddingClass={"pt-90"} />
    </main>
  );
}
