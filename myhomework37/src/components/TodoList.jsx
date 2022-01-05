import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

const INITIAL_STATE = [{ content: 'be more confident', color: '#FFEFD5' }];

function TodoList() {
  const [todoList, setTodoList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    content: '',
    color: 'PeachPuff',
  });

  const removeTodo = (todoIndex) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, index) => index !== todoIndex),
    );
  };

  const appendTodo = () => {
    console.log('새로운 todo 저장');

    const todo = { ...fieldValues };

    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    clearFieldValues();
  };

  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>

      <TodoForm
        handleChange={handleChange}
        fieldValues={fieldValues}
        handleSubmit={appendTodo}
      />

      <button className="text-violet-300" onClick={clearFieldValues}>
        Clear
      </button>

      {todoList.map((todo, index) => (
        <Todo todo={todo} onClick={() => removeTodo(index)} />
      ))}
    </div>
  );
}

export default TodoList;
