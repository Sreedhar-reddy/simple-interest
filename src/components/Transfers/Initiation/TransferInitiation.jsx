import React, { useReducer } from "react";
import { Container, Card } from "react-bootstrap";
import TransferDetail from "../Detail/TransferDetail";
import TransferInitiationState from "./Initiation.state";
import TransferIntiationReducer from "./Initiation.reducer";
import "./TransferInitiation.style.css";

const TransferInitiation = () => {
  const [state, dispatch] = useReducer(
    TransferIntiationReducer,
    TransferInitiationState
  );

  return (
    <div className="transfer-initiation">
      <Container className="m-2">
        <Card>
          <Card.Header>
            <h5 className="text-uppercase">Transfer Initiation</h5>
          </Card.Header>
          <Card.Body>
            <TransferDetail transferDetail={state} dispatch={dispatch} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default TransferInitiation;
