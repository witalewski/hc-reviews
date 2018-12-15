import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const addReviewEntries = (state, reviewIds) =>
  reviewIds.reduce((acc, id) => ({ ...acc, [id]: {} }), state);

export const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return addReviewEntries(state, action.reviews.items.allIds);
    default:
      return state;
  }
};
