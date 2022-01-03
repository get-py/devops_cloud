import { useState } from "react/cjs/react.development";

function Counter() {
  const [state, setState] = useState({ value: 0, color: "red" });
  // const [value, setValue] = useState(0);
  // const [color, setColor] = useState("red");

  const HandlePlus = () => {
    setState((prevState) => ({
      ...prevState,
      value: prevState.value + 1,
    }));
  };
  const HandleMinus = () => {
    setState({
      ...state,
      value: state.value - 1,
    });
  };
  const HandleGreen = () => {
    setState({
      ...state,
      color: "green",
    });
  };
  const HandleBlue = () => {
    setState({
      ...state,
      color: "blue",
    });
  };
  const HandleRed = () => {
    setState({
      ...state,
      color: "red",
    });
  };

  return (
    <div>
      <h2>Counter</h2>

      <div style={{ ...defaultStyle, backgroundColor: state.color }}>
        {state.value}
      </div>
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
