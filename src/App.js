import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged } from "./actions";

const App = () => {
  // Set state variables using useSelector hook
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  /*
    Basic counter and login/logout.
    Each counter button uses the appropriate action method and passes a multiplier to it.
    The login/logout button uses the logged action which simple alternates isLogged in state between true and false.
  */
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(increment(10))}>+10</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
      <br />
      <button onClick={() => dispatch(logged())}>Login/Logout</button>
      {isLogged ? <h3>Valuable information</h3> : null}
    </div>
  );
};

export default App;
