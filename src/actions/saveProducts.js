export const saveProducts = (newsProducts) => (dispatch) => {
  dispatch(saveProductsToReducer(newsProducts));
};

export const saveProductsToReducer = (newsProducts) => ({
  type: "SAVE_PRODUCTS",
  payload: newsProducts,
});
