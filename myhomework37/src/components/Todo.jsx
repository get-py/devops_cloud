import './Todo.css';

function Todo({ todo, onClick }) {
  return (
    <div
      className="m-1 p-1 rounded-lg text-lg
    border-cyan-300"
      style={{ backgroundColor: todo.color }}
      onClick={onClick}
    >
      {todo.content}
    </div>
  );
}

export default Todo;
