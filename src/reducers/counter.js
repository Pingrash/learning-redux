/*
  Reducer for the counter.
  Takes an INCREMENT and DECREMENT action to alter the state based on the payload.
*/

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;

    case "DECREMENT":
      return state - action.payload;

    default:
      return state;
  }
};

export default counterReducer;
