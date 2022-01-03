import { useState } from "react/cjs/react.development";

function Counter() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("red");

  // const HandlePlus = () => {
  //   setValue(value + 1);
  // };

  // const HandleMinus = () => {
  //   setValue(value - 1);
  // };

  // const HandleGreen = () => {
  //   setColor("green");
  // };

  // const HandleBlue = () => {
  //   setColor("blue");
  // };

  // const HandleRed = () => {
  //   setColor("red");
  // };

  const HandlePlus = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const HandleMinus = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const HandleGreen = () => {
    setColor((prevColor) => "green");
  };

  const HandleBlue = () => {
    setColor((prevColor) => "blue");
  };

  const HandleRed = () => {
    setColor((prevColor) => "red");
  };

  return (
    <div>
      <h2>Counter</h2>
      <div style={{ ...defaultStyle, backgroundColor: color }}>{value}</div>
      <button onClick={HandlePlus}>+</button>
      <button onClick={HandleMinus}>-</button>
      <button onClick={HandleGreen}>Green</button>
      <button onClick={HandleBlue}>Blue</button>
      <button onClick={HandleRed}>Red</button>
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
