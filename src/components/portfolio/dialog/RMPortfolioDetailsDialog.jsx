import { Modal } from "react-bootstrap";

import RMPortfolioDetails from "../details/RMPortfolioDetails";

export default function RMPortfolioDetailsDialog(props) {
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
        className="details-modal version-2"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <RMPortfolioDetails details={detailsData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
