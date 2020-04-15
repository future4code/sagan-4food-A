import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import SaveDetailInState from "./RestaurantDetailReducer";
import saveProdutcs from "./saveProducts";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    SaveDetailInState,
    saveProdutcs,
  });
