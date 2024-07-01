import Image from "next/image";

const TestimonialCard4 = ({ item = undefined }) => {
  const { image, name, role, text } = item || {};
  return (
    <div className="testimonial-card-4 has_fade_anim">
      <div className="thumb">
        <Image width={100} height={100} src={image} alt="Image" />
      </div>
      <div className="content">
        <h4 className="name">{name}</h4>
        <span className="position">{role}</span>
        <p className="discription">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard4;
