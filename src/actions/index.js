import axios from "axios";
import { BaseUrl } from "./BaseUrl";

export const getRestaurants = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${BaseUrl}/restaurants`, {
      headers: {
        auth: token,
      },
    });
    dispatch(getRestaurantsToReducer(response.data.restaurants));
  } catch (error) {
    alert("Não foi possível carregar lista de restuarantes!");
  }
};

export const getRestaurantsToReducer = (restaurants) => ({
  type: "GET_RESTAURANTS",
  payload: restaurants,
});

export const setFilteredRestaurants = (restaurants) => ({
  type: "SET_FILTERED_RESTAURANTS",
  payload: restaurants,
});

export const setInputSearch = (inputData) => ({
  type: "SET_INPUT_SEARCH",
  payload: {
    inputData, // verificar necessidade de objeto
  },
});
