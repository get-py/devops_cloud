import './Todo.css';

function Todo({ todo, onClick }) {
  return (
    <div
      className="bg-blue-200 
      hover:bg-blue-400 
      m-1 p-1 rounded-lg text-lg 
      border-cyan-700 border-2 hover:border-cyan-300 
      hover:scale-110 cursor-pointer"
      onClick={onClick}
    >
      {todo.content}
    </div>
  );
}

export default Todo;
