import ImageComponent from "@/components/common/ImageComponent";

export default function AwardCard2({ item = undefined, removeBorder = false }) {
  const { name, light_img, dark_img, status } = item || {};
  return (
    <div
      className={`award-card2 has_fade_anim ${removeBorder ? "no-border" : ""}`}
    >
      <div className="thumb">
        <ImageComponent
          width={81}
          height={43}
          src={light_img}
          darkSrc={dark_img || light_img}
          customWidth="auto"
          alt="icon"
        />
      </div>
      <div className="content">
        <h4 className="awtitle">{name}</h4>
        <span>{status}</span>
      </div>
    </div>
  );
}
