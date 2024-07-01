import ImageComponent from "../common/ImageComponent";
import TextAutoSlider from "../common/TextAutoSlider";

export default function DigitalMarketerTextSlider({ textSlider = undefined }) {
  const { items, shape } = textSlider?.frontmatter || {};
  return (
    <div className="dm-text-slider pb-120 pt-120">
      {shape && shape.enable && (
        <ImageComponent
          width={384}
          height={64}
          className="waveline"
          src={shape.light_img}
          darkSrc={shape.dark_img || shape.light_img}
          alt="about shape"
        />
      )}
      {items && items.length && (
        <TextAutoSlider
          slides={items}
          identity={"text_auto-slider"}
          spreed={200}
        />
      )}
    </div>
  );
}
