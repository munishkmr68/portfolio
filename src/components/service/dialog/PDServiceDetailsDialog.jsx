import { Modal } from "react-bootstrap";

import PDServiceDetails from "../details/PDServiceDetails";

export default function PDServiceDetailsDialog(props) {
  if (!props.details_data.frontmatter) {
    return;
  }
  const detailsData = props.details_data;

  return (
    <>
      <Modal
        {...props}
        size={"xl"}
        centered
        scrollable
        className="details-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <PDServiceDetails details={detailsData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
