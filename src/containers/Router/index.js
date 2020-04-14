import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from '../Login/Login'
import SignUp from '../../containers/SignUp/SignUp'
import NewAddress from '../../containers/NewAddress/NewAddress'
import SplashScreen from '../SplashScreen/SplashScreen'

export const routes = {
  login: "/login",
  newAddress: "/address/new",
  signUp: "/signup",
  root: "/",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={SplashScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.newAddress} component={NewAddress} />
        <Route exact path={routes.signUp} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
