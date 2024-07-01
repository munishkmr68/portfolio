import Image from "next/image";
import ImageComponent from "@/components/common/ImageComponent";

export default function TestimonialCard3({ item }) {
  const { name, role, quote, image, text } = item || {};
  return (
    <div className="testimonial-card-3">
      <div className="picture">
        <Image
          width={265}
          height={370}
          style={{ height: "auto" }}
          src={image}
          alt="Client Image"
        />
      </div>

      <div className="content">
        <div className="quote">
          <ImageComponent
            width={40}
            height={30}
            src={quote.light_img}
            darkSrc={quote.dark_img || quote.light_img}
            alt="Client Image"
          />
        </div>
        <p className="feedback">{text}</p>
        <h3 className="name">{name}</h3>
        <p className="designation">{role}</p>
      </div>
    </div>
  );
}
