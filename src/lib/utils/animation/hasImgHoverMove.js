export default function hasImgHoverMove(content, direction = "ltr") {
  if (typeof window !== "undefined") {
    const mainContent = content;
    const eventItem = mainContent.querySelectorAll(".img_move");
    const imageItem = mainContent.querySelectorAll(".hoverImg");
    const isRTL = direction === "rtl";

    function ImageMove(event, eventImg) {
      const contentBox = eventImg.getBoundingClientRect();

      const dx = isRTL
        ? contentBox.right - event.clientX
        : event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      imageItem.forEach((img) => {
        img.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    }

    eventItem.forEach((item) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(ImageMove(event, item), 1000);
      });
    });
  }
}
