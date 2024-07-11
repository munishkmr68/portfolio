export default function Related1(props) {
  return (
    <section className="related1 pb-130">
      <div className="container">
        <div className="sec-title-wrapper pt-120 pb-60">
          <h2 className="sec-sub-title pb-20">{props.section_name}</h2>
          <h3 className="sec-title">{props.title}</h3>
        </div>
        {props.children}
      </div>
    </section>
  );
}
