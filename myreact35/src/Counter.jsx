import { useState, useReducer } from "react/cjs/react.development";

function reducer(prevState, action) {
  const { type, amount, color } = action;

  if (type === "PLUS") {
    return { ...prevState, value: prevState.value + amount };
  } else if (type === "MINUS") {
    return { ...prevState, value: prevState.value - amount };
  } else if (type === "CHANGE_COLOR") {
    return { ...prevState, color: color };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0, color: "red" });

  const handlePlus = () => {
    return dispatch({ type: "PLUS", amount: 1 });
  };

  const handleMinus = () => {
    return dispatch({ type: "MINUS", amount: 1 });
  };

  const handleGreen = () => {
    return dispatch({ type: "CHANGE_COLOR", color: "green" });
  };

  const handleBlue = () => {
    return dispatch({ type: "CHANGE_COLOR", color: "blue" });
  };

  const handleRed = () => {
    return dispatch({ type: "CHANGE_COLOR", color: "red" });
  };

  // const handleMinus = () => {
  //   const action = { type: "MINUS", amount: 1 };
  //   setState((prevState) => {
  //     return dispatch(action, prevState);
  //   });
  // };
  // const handleGreen = () => {
  //   const action = { type: "CHANGE_COLOR", color: "green" };
  //   setState((prevState) => {
  //     return reducer(action, prevState);
  //   });
  // };
  // const handleBlue = () => {
  //   const action = { type: "CHANGE_COLOR", color: "blue" };
  //   setState((prevState) => {
  //     return reducer(action, prevState);
  //   });
  // };
  // const handleRed = () => {
  //   const action = { type: "CHANGE_COLOR", color: "red" };
  //   setState((prevState) => {
  //     return reducer(action, prevState);
  //   });
  // };

  return (
    <div>
      <h2>Counter</h2>

      <div style={{ ...defaultStyle, backgroundColor: state.color }}>
        {state.value}
      </div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleGreen}>Green</button>
      <button onClick={handleBlue}>Blue</button>
      <button onClick={handleRed}>Red</button>
    </div>
  );
}

const defaultStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  lineHeight: "100px",
  textAlign: "center",
  display: "inline-block",
  fontSize: "3rem",
  userSelect: "none",
};

export default Counter;
