import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import SaveDetailInState from "./RestaurantDetailReducer";
import Error from './error'

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    SaveDetailInState,
    Error
  });
