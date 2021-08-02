import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import ModalComp from "../ModalComp";
import "./Intetest.style.css";

const InterestPage = () => {
  const modalState = {
    isShow: false,
    title: "",
    body: "",
  };

  const [modalData, setModalData] = useState(modalState);

  const [principal, setPrincipal] = useState({
    value: "",
    errMsg: "",
  });
  const [interest, setInterest] = useState({
    value: "",
    errMsg: "",
  });
  const [fromDate, setFromDate] = useState({
    value: new Date(),
    errMsg: "",
  });
  const [toDate, setToDate] = useState({
    value: new Date(),
    errMsg: "",
  });

  const handleModalClose = () => {
    setModalData({
      ...modalData,
      isShow: false,
    });
  };

  const principalAmountHandler = (e) => {
    setPrincipal({
      value: e.target.value,
      errMsg: "",
    });
  };

  const interestHandler = (e) => {
    setInterest({
      value: e.target.value,
      errMsg: "",
    });
  };

  const fromDateHandler = (date) => {
    setFromDate({
      value: date,
      errMsg: "",
    });
  };

  const toDateHandler = (date) => {
    setToDate({
      value: date,
      errMsg: "",
    });
  };

  const checkValidation = () => {
    let formValid = true;

    if (principal.value === "") {
      formValid = false;
      setPrincipal({
        ...principal,
        errMsg: "Please enter principal amount",
      });
    }

    if (interest.value === "") {
      formValid = false;
      setInterest({
        ...interest,
        errMsg: "Please enter interest",
      });
    }

    if (
      fromDate.value === null ||
      fromDate.value === undefined ||
      fromDate.value === ""
    ) {
      formValid = false;
      setFromDate({
        ...fromDate,
        errMsg: "Please selet from date",
      });
    }

    if (
      toDate.value === null ||
      toDate.value === undefined ||
      toDate.value === ""
    ) {
      formValid = false;
      setToDate({
        ...toDate,
        errMsg: "Please selet to date",
      });
    }

    return formValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formValid = checkValidation();
    if (formValid === true) {
      const eDate = moment(fromDate.value);
      const rDate = moment(toDate.value);
      rDate.add(1, "days");
      const months = rDate.diff(eDate, "months", true).toFixed(2);
      const interestValue = (
        (principal.value * months * interest.value) /
        100
      ).toFixed(2);
      setModalData({
        isShow: true,
        title: "Simple Interest",
        body: (
          <>
            <Row className="mb-3">
              <Col md={6}>Principal Amount: </Col>
              <Col md={6} className="font-weight-bold">
                {principal.value}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>Rate of Interest: </Col>
              <Col md={6} className="font-weight-bold">
                {interest.value}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>Time Duration: </Col>
              <Col md={6} className="font-weight-bold">
                {calDateDiff()}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>Total Interest: </Col>
              <Col md={6} className="font-weight-bold">
                {interestValue}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>Total Money: </Col>
              <Col md={6} className="font-weight-bold">
                {(
                  parseFloat(principal.value) + parseFloat(interestValue)
                ).toFixed(2)}
              </Col>
            </Row>
          </>
        ),
      });
    }
  };

  const calDateDiff = () => {
    const eDate = moment(fromDate.value);
    const rDate = moment(toDate.value);
    rDate.add(1, "days");
    const years = rDate.diff(eDate, "year");
    eDate.add(years, "years");
    const months = rDate.diff(eDate, "months");
    eDate.add(months, "months");
    const days = rDate.diff(eDate, "days");
    const projectDuration = `${
      years > 0 ? (years > 1 ? years + " Years" : years + " Year") : ""
    } ${
      months > 0 ? (months > 1 ? months + " months" : months + " month") : ""
    } ${days > 0 ? (days > 1 ? days + " days" : days + " day") : ""}`;
    return projectDuration.trim() === "" ? "0 days" : projectDuration.trim();
  };

  return (
    <Card className="col-md-8 offset-md-2 mt-5">
      <Card.Header className="text-center h3">
        Calculate Simple Interest
      </Card.Header>
      <Card.Body>
        <Form>
          <Row className="mb-3">
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group controlId="principalAmount">
                <Form.Label>Principal Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Principal Amount"
                  value={principal.value}
                  onChange={principalAmountHandler}
                />
                {principal.errMsg !== "" && (
                  <div className="text-danger">{principal.errMsg}</div>
                )}
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Form.Group controlId="interstAmount">
                <Form.Label>Rate of Interest</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Interest"
                  value={interest.value}
                  onChange={interestHandler}
                />
                {interest.errMsg !== "" && (
                  <div className="text-danger">{interest.errMsg}</div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={{ span: 4, offset: 1 }}>
              <Form.Group controlId="fromDate">
                <Form.Label>From Date</Form.Label>
                <div>
                  <DatePicker
                    className="form-control"
                    placeholder="from date"
                    dateFormat="dd/MM/yyyy"
                    closeOnScroll={true}
                    selected={fromDate.value}
                    maxDate={new Date()}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={(date) => fromDateHandler(date)}
                  />
                </div>
                {fromDate.errMsg !== "" && (
                  <div className="text-danger">{fromDate.errMsg}</div>
                )}
              </Form.Group>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <Form.Group controlId="toDate">
                <Form.Label>To Date</Form.Label>
                <div>
                  <DatePicker
                    className="form-control"
                    placeholder="to date"
                    dateFormat="dd/MM/yyyy"
                    closeOnScroll={true}
                    selected={toDate.value}
                    minDate={fromDate.value}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={(date) => toDateHandler(date)}
                  />
                </div>
                {toDate.errMsg !== "" && (
                  <div className="text-danger">{toDate.errMsg}</div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="text-center">
              <Button variant="primary" type="button" onClick={submitHandler}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <ModalComp {...modalData} modalClose={handleModalClose} />
      </Card.Body>
    </Card>
  );
};

export default InterestPage;
