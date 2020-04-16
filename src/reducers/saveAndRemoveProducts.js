const initialState = [];

const SaveProdutsInState = (state = initialState, action) => {
  const newState = [...state];
  let indexArray;
  console.log(newState);
  switch (action.type) {
    case "SAVE_PRODUCTS":
      return newState.push(action.payload), (state = newState);

    case "REMOVE_PRODUCTS":
      return (
        (indexArray = newState.findIndex((food) => food.id === action.payload)),
        newState.splice(indexArray, 1),
        (state = newState)
      );
    default:
      return state;
  }
};

export default SaveProdutsInState;
