import { Modal } from "react-bootstrap";

import PDPortfolioDetails from "../details/PDPortfolioDetails";

export default function PDPortfolioDetailsDialog(props) {
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
          <PDPortfolioDetails details={detailsData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
