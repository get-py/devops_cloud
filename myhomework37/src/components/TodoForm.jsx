function TodoForm({ fieldValues, handleChange, handleSubmit }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="border-2 border-gray-200 p-2">
      <h2 className="text-lg">TodoForm</h2>
      <select onChange={handleChange} name="color" value={fieldValues.color}>
        <option>cyan</option>
        <option>blue</option>
      </select>

      <input
        type="text"
        className="border-2 border-gray-2"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="content"
        value={fieldValues.content}
      />
    </div>
  );
}

export default TodoForm;
