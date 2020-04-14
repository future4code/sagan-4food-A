import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import SaveDetailInState from "./RestaurantDetailReducer";
import Error from './error'
import orderHistory from './orderHistory'

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    SaveDetailInState,
    Error,
    orderHistory
  });
