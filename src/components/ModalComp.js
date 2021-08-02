import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComp = ({ title, body, isShow, modalClose }) => {
  return (
    <Modal show={isShow} onHide={modalClose} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
