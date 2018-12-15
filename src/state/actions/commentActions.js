export const SAVE_COMMENT = "SAVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const CANCEL_COMMENT = "CANCEL_COMMENT";

export const saveComment = (comment, reviewId) => ({
  type: SAVE_COMMENT,
  comment,
  reviewId
});

export const addComment = reviewId => ({
  type: ADD_COMMENT,
  reviewId
});

export const cancelComment = reviewId => ({
  type: CANCEL_COMMENT,
  reviewId
});
