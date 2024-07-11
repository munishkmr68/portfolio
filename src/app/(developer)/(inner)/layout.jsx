import navigation from "@/config/navigation.json";
// import Header2 from "@/components/header/Header2";

export default function PageLayout2({ children }) {
  return (
    <>
      {/* <Header2 headerData={navigation.header2} menu={true} /> */}
      {children}
    </>
  );
}
