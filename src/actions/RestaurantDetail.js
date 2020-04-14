import axios from "axios";
import { BaseUrl } from "./BaseUrl";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im85U1lCUERTZmZhbTNhek5ONnJnIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU4Njc5MzQxM30.3hxx4bicH8owiYQJqAnWP-x4iLAeReoa8V7yJlUHW5w";
export const getRestaurantDetail = (id) => async (dispatch) => {
  const headers = {
    headers: {
      auth: token,
    },
  };
  try {
    const response = await axios.get(`${BaseUrl}/restaurants/${id}`, headers);
    dispatch(getRestaurantDetailToReducer(response.data.restaurant));
  } catch (error) {
    console.error(error);
  }
};

export const getRestaurantDetailToReducer = (restaurantDetail) => ({
  type: "GET_RESTAURANT_DETAIL",
  payload: restaurantDetail,
});
