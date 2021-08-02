import React from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TransferDetail.style.css";

const TransferDetail = ({ transferDetail, dispatch }) => {
  return (
    <div className="transfer-initiation">
      {Object.entries(transferDetail).map(([key, item]) => {
        return (
          <Form.Group as={Row} className="mb-3" key={key} controlId={key}>
            {Object.entries(item).map(([index, column]) => {
              const widthProp = column.width
                ? column.width
                : {
                    span: column.span ? column.span : undefined,
                    offset: column.offset ? column.offset : undefined,
                  };
              const keyProp = `${key}_${index}`;
              const containerClass = column.class ? column.class : undefined;
              const containerId = column.id ? column.id : undefined;
              const valueProp = column.value ? column.value : undefined;
              const placeholderProp = column.placeholder
                ? column.placeholder
                : undefined;
              const elmClass = column.elmClass ? column.elmClass : undefined;
              const elmId = column.elmId ? column.elmId : undefined;
              const changeHandler = column.onChange
                ? column.changeHandler
                  ? column.changeHandler
                  : undefined
                : undefined;
              const clickHandler = column.onClick
                ? column.clickHandler
                  ? column.clickHandler
                  : undefined
                : undefined;

              switch (column.type) {
                case "label":
                  return (
                    <Form.Label
                      column
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      {valueProp}
                    </Form.Label>
                  );
                case "select":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      <Form.Control
                        as="select"
                        aria-label={key}
                        value={valueProp}
                        placeholder={placeholderProp}
                        className={elmClass}
                        id={elmId}
                        onChange={(e) => {
                          if (changeHandler) {
                            dispatch({
                              ...changeHandler,
                              data: e.target.value,
                            });
                          }
                        }}
                      >
                        {Object.entries(column.options).map(
                          ([optKey, optValue]) => (
                            <option key={optKey} value={optValue}>
                              {optValue}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  );
                case "search":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder={placeholderProp}
                          value={valueProp}
                          className={elmClass}
                          id={elmId}
                          onChange={(e) => {
                            if (changeHandler) {
                              dispatch({
                                ...changeHandler,
                                data: e.target.value,
                              });
                            }
                          }}
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon
                              icon={faSearch}
                              onClick={() => {
                                if (clickHandler) {
                                  dispatch({
                                    ...clickHandler,
                                  });
                                }
                              }}
                            />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                    </Col>
                  );
                case "textBox":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      <Form.Control
                        type="text"
                        placeholder={placeholderProp}
                        value={valueProp}
                        className={elmClass}
                        id={elmId}
                        onChange={(e) => {
                          if (changeHandler) {
                            dispatch({
                              ...changeHandler,
                              data: e.target.value,
                            });
                          }
                        }}
                      ></Form.Control>
                    </Col>
                  );
                case "text":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      {valueProp}
                    </Col>
                  );
                case "date":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      <DatePicker
                        className={elmClass}
                        selected={valueProp}
                        closeOnScroll={
                          column.closeOnScroll ? column.closeOnScroll : true
                        }
                        dateFormat={
                          column.dateFormat ? column.dateFormat : "dd/MM/yyyy"
                        }
                        onChange={(date) => {
                          if (changeHandler) {
                            dispatch({
                              ...changeHandler,
                              data: date,
                            });
                          }
                        }}
                      />
                    </Col>
                  );
                case "button":
                  return (
                    <Col
                      key={keyProp}
                      md={widthProp}
                      className={containerClass}
                      id={containerId}
                    >
                      <Button
                        variant={column.variant ? column.variant : "primary"}
                        className={elmClass}
                        id={elmId}
                      >
                        {valueProp}
                      </Button>
                    </Col>
                  );
                default:
                  return <div key={keyProp} />;
              }
            })}
          </Form.Group>
        );
      })}
    </div>
  );
};

export default TransferDetail;
