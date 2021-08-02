import React, { memo } from "react";
import { Button, Row, Col } from "react-bootstrap";

const ModalButtons = ({ handleButtonClick }) => {
  return (
    <Row>
      <Col
        className="d-flex justify-content-around"
        md={{ offset: 2, span: 8 }}
      >
        <Button
          variant="primary"
          onClick={() => handleButtonClick("Button 1", "Button 1 Body")}
        >
          Button 1
        </Button>
        <Button
          variant="info"
          onClick={() => handleButtonClick("Button 2", "Button 2 Body")}
        >
          Button 2
        </Button>
        <Button
          variant="danger"
          onClick={() => handleButtonClick("Danger", "Danger Text")}
        >
          Danger
        </Button>
      </Col>
    </Row>
  );
};

export default memo(ModalButtons);
