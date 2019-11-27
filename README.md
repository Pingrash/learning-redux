# Learning Redux With React Hooks

## About

A simple example of using Redux for state management.
App has a counter with buttons to increment or decrement the count by different amounts.
Also has a login/logout button that reveals/hides a h3 based on the state.

## Example Boilerplate

```jsx
import { createStore } from "redux";

// ACTION INCREMENT
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

// STORE -> GLOBALIZED STATE
const store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
```

## Hook Examples

```jsx
// Hooks
import { useSelector, useDispatch } from "react-redux";
// Actions for example
import { increment, decrement } from "./actions";

// Setting some state variables using the useSelector hook.
const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);

// Set useDispatch hook to dispatch variable.
const dispatch = useDispatch();

// Buttons utilise dispatch to send actions on click.
<button onClick={() => dispatch(increment(1))}>+1</button>
<button onClick={() => dispatch(decrement(5))}>-5</button>
```
