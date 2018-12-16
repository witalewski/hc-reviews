import { RECEIVE_REVIEWS } from "../actions/reviewActions";
import {
  ADD_COMMENT,
  SAVE_COMMENT,
  CANCEL_COMMENT
} from "../actions/commentActions";
import { EXPAND_TEXT } from "../actions/uiActions";

const nextCommentId = lastCommentId =>
  `comment${parseInt(lastCommentId.match(/\d+/)[0]) + 1}`;

const createReviewEntry = () => ({
  isTextExpanded: false,
  isCommentBeingAdded: false
});

const createCommentEntry = () => ({
  isTextExpanded: false
});

const addReviewEntries = (state, reviewIds) =>
  reviewIds.reduce((acc, id) => ({ ...acc, [id]: createReviewEntry() }), state);

const addCommentEntry = (state, comentId) => ({
  ...state,
  [comentId]: createCommentEntry(),
  nextCommentId: nextCommentId(comentId)
});

const addCommentEntries = (state, commentIds) =>
  commentIds.reduce(addCommentEntry, state);

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

const initialState = { nextCommentId: 1 };

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return addCommentEntries(
        addReviewEntries(state, action.reviews.items.allIds),
        action.reviews.comments.allIds
      );
    case ADD_COMMENT:
      return setIsCommentBeingAdded(state, action.reviewId, true);
    case SAVE_COMMENT:
      return setIsCommentBeingAdded(
        addCommentEntry(state, action.comment.id),
        action.reviewId,
        false
      );
    case CANCEL_COMMENT:
      return setIsCommentBeingAdded(state, action.reviewId, false);
    case EXPAND_TEXT:
      return setIsTextExpanded(state, action.reviewId, true);
    default:
      return state;
  }
};
