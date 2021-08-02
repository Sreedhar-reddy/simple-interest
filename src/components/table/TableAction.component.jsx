import React from "react";
import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const TableActionButton = ({ disabled, type }) => (
  <Col className="p-0">
    <Button variant="link" disabled={disabled}>
      <FontAwesomeIcon
        icon={
          type === "edit" ? faPenSquare : type === "view" ? faEye : faTrashAlt
        }
      />
    </Button>
  </Col>
);

export default TableActionButton;
