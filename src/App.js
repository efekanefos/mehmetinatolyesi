import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/header.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import pageinfo from "./data/pageinfo";

function App() {
  const routeMaps = pageinfo.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routeMaps}
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
<BrowserRouter>

          <Switch>
            {routeMaps}
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>

*/
