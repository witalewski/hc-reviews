import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const createInitialEntry = () => ({
    isTextExpanded: false,
    isCommentBeingAdded: false,
});

const addReviewEntries = (state, reviewIds) =>
  reviewIds.reduce((acc, id) => ({ ...acc, [id]: createInitialEntry() }), state);

export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return addReviewEntries(state, action.reviews.items.allIds);
    default:
      return state;
  }
};
