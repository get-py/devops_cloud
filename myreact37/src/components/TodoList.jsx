import { useState } from 'react';
import Todo from './Todo';
import './TodoList.css';

const INITIAL_STATE = [
  { content: '뻔뻔해지기' },
  { content: '재미있게 하기' },
  { content: '자유를 기억하기' },
];

function TodoList() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState(INITIAL_STATE);

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  const changedInputText = (e) => {
    setInputText(e.target.value);
  };

  const appendInputText = (e) => {
    if (e.key == 'Enter') {
      // todoList 배열 끝에 inputText 추가
      // inputText 다시 비우기
      console.log('inputText:', inputText);
      setTodoList((prevTodoList) => {
        return [...prevTodoList, { content: inputText }];
      });
    }
    setInputText('');
  };

  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>

      <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      />

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
