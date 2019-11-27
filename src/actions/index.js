/*
  Actions are dispatched in components to interact with the reducers.
*/

export const increment = multiplier => {
  return {
    type: "INCREMENT",
    payload: multiplier
  };
};

export const decrement = multiplier => {
  return {
    type: "DECREMENT",
    payload: multiplier
  };
};

export const logged = () => {
  return {
    type: "SIGN_IN"
  };
};
