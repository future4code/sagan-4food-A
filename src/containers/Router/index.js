import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import FeedPage from '../FeedPage'

const routes = {
  feed:"/home"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.feed} component={FeedPage} />
        <Route path={routes.root} component={() => <div />} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
