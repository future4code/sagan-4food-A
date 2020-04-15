import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import RestaurantDetail from "../RestaurantDetail/index";
import Login from '../Login/Login'
import SignUp from '../../containers/SignUp/SignUp'
import NewAddress from '../../containers/NewAddress/NewAddress'
import SplashScreen from '../SplashScreen/SplashScreen'
import UserEdit from "../UserEdit/UserEdit";

export const routes = {
  RestaurantDetailPage: "/restaurant/detail",
  login: "/login",
  newAddress: "/address/new",
  signUp: "/signup",
  root: "/",
  useredit: "/useredit",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.RestaurantDetailPage} component={RestaurantDetail} />
        <Route exact path={routes.root} component={SplashScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.newAddress} component={NewAddress} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.useredit} component={UserEdit} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
