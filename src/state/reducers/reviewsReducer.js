import { SAVE_COMMENT } from "../actions/commentActions";
import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const addCommentToReview = (state, reviewId, comment) => ({
  ...state,
  items: {
    ...state.items,
    byId: {
      ...state.items.byId,
      [reviewId]: {
        ...state.items.byId[reviewId],
        comments: [...state.items.byId[reviewId].comments, comment.id]
      }
    }
  },
  comments: {
    byId: {
      ...state.comments.byId,
      [comment.id]: comment
    },
    allIds: [...state.comments.allIds, comment.id]
  }
});

export const reviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case SAVE_COMMENT:
      return addCommentToReview(state, action.reviewId, action.comment);
    default:
      return state;
  }
};
