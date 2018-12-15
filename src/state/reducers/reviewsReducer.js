import mockReviews from "../mocks/reviews.json";
import { SAVE_COMMENT } from "../actions/commentActions";

const getNextId = (label, ids) =>
  `${label}${
    ids.length ? parseInt(ids[ids.length - 1].match(/\d+/)[0]) + 1 : 1
  }`;

export const reviewsReducer = (state = mockReviews, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      const commentId = getNextId("comment", state.comments.allIds);
      return {
        ...state,
        items: {
          ...state.items,
          byId: {
            ...state.items.byId,
            [action.reviewId]: {
              ...state.items.byId[action.reviewId],
              comments: [
                ...state.items.byId[action.reviewId].comments,
                commentId
              ]
            }
          }
        },
        comments: {
          byId: {
            ...state.comments.byId,
            [commentId]: { id: commentId, ...action.comment }
          },
          allIds: [...state.comments.allIds, commentId]
        }
      };
    default:
      return state;
  }
};
