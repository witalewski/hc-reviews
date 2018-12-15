export const SAVE_COMMENT = "SAVE_COMMENT";

export const saveComment = (comment, reviewId) => ({
  type: SAVE_COMMENT,
  comment,
  reviewId
});
