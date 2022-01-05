import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

const INITIAL_STATE = [{ content: '2022년에는 살 빼기', color: 'red' }];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFiledValues] = useFieldValues({
    content: '',
    color: 'cyan',
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  const appendTodo = () => {
    console.log('새로운 todo 저장');

    const todo = { ...fieldValues };

    // setter에 값 지정 방식
    // setTodoList([...todoList, todo]);

    // setter 에 함수 지정방식
    setTodoList((prevTodoList) => [...prevTodoList, todo]);

    clearFiledValues();
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>

      <TodoForm
        handleChange={handleChange}
        fieldValues={fieldValues}
        handleSubmit={appendTodo}
      />
      <hr />
      {JSON.stringify(fieldValues)}

      <button
        className="text-red-500 cursor=pointer"
        onClick={clearFiledValues}
      >
        clear
      </button>

      {/* <input
        type="text"
        value={inputText}
        onChange={changedInputText}
        onKeyPress={appendInputText}
      /> */}

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}
export default TodoList;
