import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./styles/styles.css";
import { checkAuth } from "./utils/auth";
import { ToastProvider } from "react-toast-notifications";

export default () => (
  <ToastProvider
    autoDismiss
    autoDismissTimeout={3000}
    // components={{ Toast: Snack }}
    placement="bottom-right"
  >
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                checkAuth({ auth: route.auth, history: props.history });
                return (
                  <route.layout {...props} layoutProps={route.layoutProps}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </Switch>
    </Router>
  </ToastProvider>
);
