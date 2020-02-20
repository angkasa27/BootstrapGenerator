import React from "react";
import { Switch, Route } from "react-router-dom";

import CardGenerator from "./Page/CardGenerator.jsx";
import AlertGenerator from "./Page/AlertGenerator.jsx";
import ButtonGenerator from "./Page/ButtonGenerator";
import Home from "./Page/Home";

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/CardGenerator" component={CardGenerator} />
    <Route path="/AlertGenerator" component={AlertGenerator} />
    <Route path="/ButtonGenerator" component={ButtonGenerator} />
  </Switch>
);
export default Utama;
