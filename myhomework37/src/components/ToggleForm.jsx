import { useState } from 'react';
import ReviewForm from './ReviewForm';

function ToggleForm() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <h2>ToggleForm</h2>
      {!showForm && (
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-yellow-200"
        >
          New review
        </button>
      )}
      {showForm && (
        <div>
          <ReviewForm />
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-green-300"
          >
            저장
          </button>
        </div>
      )}
    </div>
  );
}

export default ToggleForm;
