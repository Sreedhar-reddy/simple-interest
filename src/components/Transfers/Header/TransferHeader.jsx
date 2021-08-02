import React, { useContext } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TransferContext } from "../Page/TransferPage";

const TransferHeader = () => {
  const { headerData, dispatch } = useContext(TransferContext);

  return (
    <Row>
      <Col md={2}>
        <Form.Control
          as="select"
          aria-label="Choose Data"
          value={headerData.transferText}
          onChange={(e) => {
            dispatch({ type: "FILTER_TRANSFER", data: e.target.value });
          }}
        >
          <option disabled>Choose Data</option>
          {Object.entries(headerData.transferType).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Form.Control>
      </Col>
      <Col md={2}>
        <InputGroup>
          <Form.Control
            type="text"
            value={headerData.searchInput}
            placeholder={headerData.search}
            onChange={(e) => {
              dispatch({ type: "SEARCH_INPUT", data: e.target.value });
            }}
          />
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => {
                  dispatch({ type: "SEARCH_TRANSFER" });
                }}
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
      </Col>
      <Col
        md={4}
        className="font-weight-bold text-uppercase text-center my-auto"
      >
        {headerData.title}
      </Col>
      <Col md={2}>
        <Link to="/transfer-initiate">
          <Button varient="primary" block>
            {headerData.btnText}
          </Button>
        </Link>
      </Col>
      <Col md={2}>
        <Form.Control
          as="select"
          aria-label="Choose Status"
          value={headerData.statusText}
          onChange={(e) => {
            dispatch({ type: "FILTER_STATUS", data: e.target.value });
          }}
        >
          <option disabled>Choose Status</option>
          {Object.entries(headerData.searchType).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Row>
  );
};
export default TransferHeader;
