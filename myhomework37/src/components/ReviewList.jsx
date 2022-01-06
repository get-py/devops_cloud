import useFieldValues from 'hooks/useFieldValues';
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import Review from './Review';

const INITIAL_STATE = [
  { id: 1, content: 'be more confident', score: 4 },
  { id: 2, content: 'be more confident', score: 5 },
];

function ReviewList() {
  const [reviewList, setReviewList] = useState(INITIAL_STATE);
  const [fieldValues, handleChange, clearFieldValues, setFieldValues] =
    useFieldValues({
      content: '',
      score: 5,
    });
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  const saveReview = () => {
    let { id: reviewId } = fieldValues;

    if (!reviewId) {
      const reviewId = new Date().getTime();
      const createdReview = { ...fieldValues, id: reviewId };
      console.log(fieldValues);
      setReviewList((prevReviewList) => [...prevReviewList, createdReview]);
    } else {
      const editedReview = { ...fieldValues };
      console.log(fieldValues);
      setReviewList((prevReviewList) =>
        prevReviewList.map((review) => {
          if (review.id === editedReview.id) return editedReview;
          return review;
        }),
      );
    }

    clearFieldValues();
    setIsShowReviewForm(false);
  };

  const willEditReview = (editingReview) => {
    console.log(editingReview);
    setFieldValues(editingReview);
    setIsShowReviewForm(true);
  };

  const deleteReview = (deletingReview) => {
    console.log('Deleting', deletingReview);

    setReviewList((prevReviewList) => {
      return prevReviewList.filter((review) => review.id !== deletingReview.id);
    });
  };

  return (
    <div className="w-[400px] m-auto">
      <h2 className="text-xl mb-2 border-b-2 border-orange-500">Review List</h2>

      {!isShowReviewForm && (
        <button
          onClick={() => setIsShowReviewForm(true)}
          className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm"
        >
          New Review
        </button>
      )}
      {isShowReviewForm && (
        <ReviewForm
          fieldValues={fieldValues}
          handleChange={handleChange}
          handleSubmit={saveReview}
        />
      )}

      {reviewList.length === 0 && (
        <div className="bg-red-100 p-1 my-1 rounded border-1 border-red-200">
          등록된 리뷰가 없습니다.
        </div>
      )}
      {reviewList.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleEdit={() => willEditReview(review)}
          handleDelete={() => deleteReview(review)}
        />
      ))}
    </div>
  );
}

export default ReviewList;
