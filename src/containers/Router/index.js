import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import RestaurantDetail from "../RestaurantDetail/index";

const routes = {
  RestaurantDetailPage: "/restaurant/detail",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route
          exact
          path={routes.RestaurantDetailPage}
          component={RestaurantDetail}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
