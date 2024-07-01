import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialCard2({ item = undefined }) {
  const { name, role, text } = item || {};
  return (
    <div className="testimonial-card-2">
      <div className="thumb">
        <RiDoubleQuotesL />
      </div>
      <div className="content">
        <p className="dis">{text}</p>
        <h4 className="name">{name}</h4>
        <span className="position">{role}</span>
      </div>
    </div>
  );
}
