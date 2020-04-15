const initialState = [];

const SaveProdutsInState = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SAVE_PRODUCTS":
      return state.push(action.payload);
    default:
      return state;
  }
};

export default SaveProdutsInState;
