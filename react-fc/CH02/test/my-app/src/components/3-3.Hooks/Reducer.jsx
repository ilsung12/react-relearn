import React, { useReducer, useState } from "react";

export default function Reducer() {
  const initialState = { count: 0, name: "none" };

  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return { count: state.count + 1, name: "inc" };
      case "decrement":
        return { count: state.count - 1, name: "dec" };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count(Reducer): {state.count}
      Name : {state.name}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Rese
      </button>
    </div>
  );
}
