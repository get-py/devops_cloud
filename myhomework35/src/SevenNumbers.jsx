import { useReducer, useState } from 'react';

const range = (size) => [...Array(size).keys()];

function shuffleArray(array) {
  return array.sort(() => Math.random() - Math.random());
}

function randomNumbers() {
  const random_numbers = shuffleArray(range(45))
    .map((number) => number + 1)
    .slice(0, 7);
  return random_numbers;
}

function reducer(state, action) {
  switch (action.type) {
    case 'GENERATE_NUMBERS':
      return { ...state, numbers: randomNumbers() };
    case 'SHUFFLE_NUMBERS':
      return { ...state, numbers: shuffleArray(state.numbers) };
    case 'SHUFFLE_COLORS':
      return { ...state, colors: shuffleArray(state.colors) };
    default:
      return state;
  }
}

function SevenNumbers() {
  const [state, dispatch] = useReducer(reducer, {
    numbers: [0, 0, 0, 0, 0, 0, 0],
    colors: [
      '#1B62BF',
      '#1755A6',
      '#37A647',
      '#F29F05',
      '#F23838',
      'purple',
      'pink',
    ],
  });

  const generateNumbers = () => {
    return dispatch({ type: 'GENERATE_NUMBERS' });
  };
  const shuffleNumbers = () => {
    return dispatch({ type: 'SHUFFLE_NUMBERS' });
  };
  const shuffleColors = () => {
    return dispatch({ type: 'SHUFFLE_COLORS' });
  };

  return (
    <>
      <h2>SEVEN NUMBERS</h2>
      {state.numbers.map((number, index) => {
        return (
          <div
            style={{ ...defaultStyle, backgroundColor: state.colors[index] }}
          >
            {number}
          </div>
        );
      })}

      <button onClick={generateNumbers}>Generate Numbers</button>
      <button onClick={shuffleNumbers}>Shuffle Numbers</button>
      <button onClick={shuffleColors}>Shuffle Colors</button>
    </>
  );
}

const defaultStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  userSelect: 'none',
};

export default SevenNumbers;
