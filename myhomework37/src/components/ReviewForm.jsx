function ReviewForm({ handleSubmit, handleChange, fieldValues }) {
  return (
    <div className="w-full max-w-xs my-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            평점
          </label>
          <select
            onChange={handleChange}
            name="score"
            value={fieldValues.score}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            리뷰
          </label>
          <textarea
            onChange={handleChange}
            name="content"
            value={fieldValues.content}
          />
        </div>

        <div className="flex items-center justify-between">
          <button onClick={handleSubmit}>저장하기</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
