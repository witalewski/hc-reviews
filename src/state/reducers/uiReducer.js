import { RECEIVE_REVIEWS } from "../actions/reviewActions";
import { ADD_COMMENT, SAVE_COMMENT, CANCEL_COMMENT } from "../actions/commentActions";
import { EXPAND_TEXT } from "../actions/uiActions";

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
const setIsTextExpanded = (state, reviewId, isTextExpanded) => ({
  ...state,
  [reviewId]: {
    ...state[reviewId],
    isTextExpanded
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
    case CANCEL_COMMENT:
      return setIsCommentBeingAdded(state, action.reviewId, false);
      case EXPAND_TEXT:
      return setIsTextExpanded(state, action.reviewId, true);
    default:
      return state;
  }
};
