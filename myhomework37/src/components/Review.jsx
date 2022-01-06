import { useState } from 'react';
import Rating from './Rating';

function Review({ review, handleEdit, handleDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickEditButton = () => {
    if (handleEdit) {
      handleEdit();
    } else {
      console.warn('[Riview] handleEdit 속성값이 지정되지 않았습니다.');
    }
  };

  const handleClickDeleteButton = () => {
    if (handleDelete) {
      handleDelete();
    } else {
      console.warn('[Review] handleDelete 속성값이 지정되지 않았습니다.');
    }
  };

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="bg-white my-1 p-1 pt-3 border-2 border-green-600 relative m-1 rounded-lg text-lg"
    >
      {showMenu && (
        <div className="text-xs absolute top-0 right-0">
          <span
            onClick={handleClickEditButton}
            className="text-green-900 hover:bg-green-300 cursor-pointer mr-1"
          >
            수정
          </span>
          <span
            onClick={handleClickDeleteButton}
            className="text-red-700 hover:bg-red-300 cursor-pointer"
          >
            삭제
          </span>
        </div>
      )}
      {review.content}
      <Rating score={review.score} />
    </div>
  );
}

export default Review;
