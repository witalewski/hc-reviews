export const SAVE_COMMENT = "SAVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export const saveComment = (comment, reviewId) => ({
  type: SAVE_COMMENT,
  comment,
  reviewId
});

export const addComment = reviewId => ({
  type: ADD_COMMENT,
  reviewId
});
