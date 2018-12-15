import { SAVE_COMMENT } from "../actions/commentActions";
import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const getNextId = (label, ids) =>
  `${label}${
    ids.length ? parseInt(ids[ids.length - 1].match(/\d+/)[0]) + 1 : 1
  }`;

const addCommentToReview = (state, reviewId, comment) => {

  const commentId = getNextId("comment", state.comments.allIds);
  return {
    ...state,
    items: {
      ...state.items,
      byId: {
        ...state.items.byId,
        [reviewId]: {
          ...state.items.byId[reviewId],
          comments: [
            ...state.items.byId[reviewId].comments,
            commentId
          ]
        }
      }
    },
    comments: {
      byId: {
        ...state.comments.byId,
        [commentId]: { id: commentId, ...comment }
      },
      allIds: [...state.comments.allIds, commentId]
    }
  }
}

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
