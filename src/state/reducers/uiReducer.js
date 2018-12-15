import { RECEIVE_REVIEWS } from "../actions/reviewActions";
import { ADD_COMMENT, SAVE_COMMENT } from "../actions/commentActions";

const createInitialEntry = () => ({
  isTextExpanded: false,
  isCommentBeingAdded: false
});

const setIsCommentBeingAdded = (state, reviewId, isCommentBeingAdded) => ({
  ...state,
  [reviewId]: {
    ...state[reviewId],
    isCommentBeingAdded
  }
});

const addReviewEntries = (state, reviewIds) =>
  reviewIds.reduce(
    (acc, id) => ({ ...acc, [id]: createInitialEntry() }),
    state
  );

export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return addReviewEntries(state, action.reviews.items.allIds);
    case ADD_COMMENT:
      return setIsCommentBeingAdded(state, action.reviewId, true);
    case SAVE_COMMENT:
      return setIsCommentBeingAdded(state, action.reviewId, false);
    default:
      return state;
  }
};
