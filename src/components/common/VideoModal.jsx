"use client";

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function VideoModal(props) {
  const [deviceWidth, setDeviceWidth] = useState("");

  useEffect(() => {
    let device_width = window.innerWidth;
    setDeviceWidth(device_width);
  }, []);

  const findVideoWidth = (data) => {
    if (data <= 425) {
      return "95vw";
    } else if (data > 425 && data <= 820) {
      return "520px";
    } else {
      return "640px";
    }
  };
  return (
    <>
      <Modal {...props} size="lg" centered className="video-modal">
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body style={{ padding: "0px" }}>
          <ReactPlayer
            url={props.link}
            width={findVideoWidth(deviceWidth)}
            controls
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
