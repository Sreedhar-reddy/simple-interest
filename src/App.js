import React from "react";
import { Route, Switch } from "react-router-dom";
import TransferPage from "./components/Transfers/Page/TransferPage";
import TransferInitiation from "./components/Transfers/Initiation/TransferInitiation";
import ShowModal from "./components/ShowModal";
import InterestPage from "./components/Interest/Interest.component";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/transfer-initiate" component={TransferInitiation} />
        <Route exact path="/transfers" component={TransferPage} />
        <Route exact path="/model-demo" component={ShowModal} />
      </Switch>
      <InterestPage />
    </div>
  );
}

export default App;
