import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/favorites";
import Articles from "./pages/articles";
import Layout from "./pages/layout";
import Settings from "./pages/settings";

const main = document.getElementById('main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Articles}></IndexRoute>
      <Route path="favorites" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
main);