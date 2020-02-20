import React from "react";
import { Switch, Route } from "react-router-dom";

import CardGenerator from "./CardGenerator.jsx";
import AlertGenerator from "./AlertGenerator.jsx";
import Home from "./Home";

const Utama = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home" component={Home} />
    <Route path="/CardGenerator" component={CardGenerator} />
    <Route path="/AlertGenerator" component={AlertGenerator} />
  </Switch>
);
export default Utama;
