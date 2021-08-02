import React, { useState, useCallback } from "react";
import { Card, Container } from "react-bootstrap";
import ModalComp from "./ModalComp";
import ModalButtons from "./ModalButtons";

const initialState = {
  isShow: false,
  title: "",
  body: "",
};

const ShowModal = () => {
  const [modalData, setModalData] = useState(initialState);

  const handleButtonClick = useCallback(
    (title, body) => {
      setModalData({
        isShow: true,
        title: title,
        body: body,
      });
    },
    [modalData.title, modalData.body]
  );

  const handleModalClose = () => {
    setModalData({
      ...modalData,
      isShow: false,
    });
  };
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header className="h3 text-uppercase text-center">
          Show Modals
        </Card.Header>
        <Card.Body>
          <ModalButtons handleButtonClick={handleButtonClick} />
          <ModalComp {...modalData} modalClose={handleModalClose} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ShowModal;
