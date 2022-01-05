function TodoForm({ fieldValues, handleChange, handleSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="border-2 border-purple-400 p-2">
      <h2 className="text-lg">TodoForm</h2>
      <select onChange={handleChange} name="color" value={fieldValues.color}>
        <option>cyan</option>
        <option>blue</option>
      </select>

      <input
        type="text"
        className="border-2 border-gray-200"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
        value={fieldValues.content}
      />

      <button onClick={() => handleKeyPress}>저장</button>
    </div>
  );
}

export default TodoForm;
