import React, { useReducer, createContext, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import LoaderIcon from "react-loader-icon";
import TransferHeader from "../Header/TransferHeader";
import TransferList from "../List/TransferList";
import TransferPageState from "./Page.state";
import TransferPageReducer from "./Page.reducer";
import "./TransferPage.style.css";

export const TransferContext = createContext();

const TransferPage = () => {
  const [state, dispatch] = useReducer(TransferPageReducer, TransferPageState);

  useEffect(() => {
    let tableData;
    axios
      .get(state.apiUrl)
      .then((response) => {
        switch (state.transferText) {
          case "users":
            tableData = response.data.map((item) => {
              return {
                id: item.id,
                name: item.name,
                userName: item.username,
                email: item.email,
                action: {
                  edit: {
                    active: false,
                    link: "",
                  },
                  view: {
                    active: true,
                    link: "",
                  },
                  delete: {
                    active: true,
                    link: "",
                  },
                },
              };
            });
            break;
          case "posts":
            tableData = response.data.map((item) => {
              return {
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body,
                action: {
                  edit: {
                    active: true,
                    link: "",
                  },
                  view: {
                    active: true,
                    link: "",
                  },
                },
              };
            });
            break;
          default:
            tableData = [];
            break;
        }
        dispatch({
          type: "FETCH_SUCCESS",
          payload: tableData,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_FAILURE",
          errMsg: err.message,
        });
      });
  }, [state.transferText, state.searchText, state.statusText, state.apiUrl]);

  return (
    <div className="transfers-page">
      <Container fluid className="m-2">
        {state.loading ? (
          <LoaderIcon type="bubbles" color={"green"} />
        ) : (
          <TransferContext.Provider
            value={{ headerData: state, dispatch: dispatch }}
          >
            <Card>
              <Card.Header>
                <TransferHeader />
              </Card.Header>
              <Card.Body>
                <TransferList />
              </Card.Body>
            </Card>
          </TransferContext.Provider>
        )}
      </Container>
    </div>
  );
};

export default TransferPage;
