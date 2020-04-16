const initialState = [];

const SaveProdutsInState = (state = initialState, action) => {
  const newState = [...state];
  console.log(newState);
  switch (action.type) {
    case "SAVE_PRODUCTS":
      return newState.push(action.payload), (state = newState);

    case "REMOVE_PRODUCTS":
      return; // falta função de remover item
    default:
      return state;
  }
};

export default SaveProdutsInState;
