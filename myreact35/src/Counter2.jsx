import { useState } from "react";

function dispatch(action, prevState) {
  const { type, amount } = action;
  if (type === "PLUS") {
    return prevState + amount;
  } else if (type === "MINUS") {
    return prevState - amount;
  }
  return prevState;
}

function dispatch_color(action, prevState) {
  const { type, color } = action;
  if (type === "CHANGE_COLOR") {
    return (prevState = color);
  }
}

function Counter2() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("red");

  const HandlePlus = () => {
    const action = { type: "PLUS", amount: 1 };
    setValue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };
  const HandleMinus = () => {
    const action = { type: "MINUS", amount: 1 };
    setValue((prevValue) => {
      return dispatch(action, prevValue);
    });
  };
  const HandleGreen = () => {
    const action = { type: "CHANGE_COLOR", color: "green" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };
  const HandleBlue = () => {
    const action = { type: "CHANGE_COLOR", color: "blue" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };
  const HandleRed = () => {
    const action = { type: "CHANGE_COLOR", color: "red" };
    setColor((prevColor) => {
      return dispatch_color(action, prevColor);
    });
  };

  return (
    <div>
      <h2>Counter2</h2>
      <div style={{ backgroundColor: color }}>{value}</div>
      <hr />
      <button onClick={HandlePlus}>증가</button>
      <button onClick={HandleMinus}>감소</button>
      <button onClick={HandleGreen}>Green</button>
      <button onClick={HandleBlue}>Blue</button>
      <button onClick={HandleRed}>Red</button>
    </div>
  );
}

export default Counter2;
