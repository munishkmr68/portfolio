import DigitalMarketerTitle1 from "../title/DigitalMarketerTitle1";
import ServiceCard4 from "./card/ServiceCard4";

export default function DigitalMarketerService({
  service = undefined,
  services,
  rootUrl,
}) {
  const { title } = service?.frontmatter || {};
  return (
    <section className="dm-service pb-100">
      <div className="container">
        <DigitalMarketerTitle1 title={title} titleClass="main-title" />
        {services && services.length && (
          <div className="grid">
            {services.map((item, i) => (
              <ServiceCard4
                key={`service_item-${i}`}
                service={item}
                dataSpreed={(i + 1) % 2 === 0 ? "0.95" : "1.15"}
                rootUrl={rootUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
