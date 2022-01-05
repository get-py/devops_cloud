import './Counter.css';

import { useReducer } from 'react';

function reducer(prevValue, action) {
  const { type } = action;

  if (type === 'INCREASE') {
    return prevValue + 1;
  } else if (type === 'DECREASE') {
    return prevValue - 1;
  }
  return prevValue;
}

function Counter() {
  const [value, dispatch] = useReducer(reducer, 0);

  const increase = () => {
    const action = { type: 'INCREASE' };
    dispatch(action);
  };

  const decrease = (e) => {
    e.preventDefault();
    const action = { type: 'DECREASE' };
    dispatch(action);
  };

  return (
    <>
      <div
        className="counter"
        style={{ backgroundColor: 'red' }}
        onClick={increase}
        onContextMenu={decrease}
      >
        {value}
      </div>
    </>
  );
}

export default Counter;
