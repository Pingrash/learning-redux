/*
  Reducer for handling login/logout.
  When SIGN_IN action is received will alternate the state between true and false.
*/

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;

    default:
      return state;
  }
};

export default loggedReducer;
