import navigation from "@/config/navigation.json";
import Footer2 from "@/components/footer/Footer2";
import Header4 from "@/components/header/Header4";

export default function PageLayout4({ children }) {
  return (
    <>
      <div className="body-wrapper font-heading-lora">
        {/* <Header4 headerData={navigation.header4} posAbs={false} /> */}
        {children}
        <Footer2 />
      </div>
    </>
  );
}
