import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import restaurants from "./restaurants";
import SaveDetailInState from "./RestaurantDetailReducer";
import Error from './error'
import orderHistory from './orderHistory'

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    restaurants,
    SaveDetailInState,
    Error,
    orderHistory
  });
