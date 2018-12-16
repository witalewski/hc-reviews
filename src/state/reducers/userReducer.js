import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const getCurrentUser = usersById =>
  usersById[
    Object.keys(usersById).find(userId => usersById[userId].isCurrentUser)
  ];

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return getCurrentUser(action.reviews.users.byId);
    default:
      return state;
  }
};
