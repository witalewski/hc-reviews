import { RECEIVE_REVIEWS } from "../actions/reviewActions";

const getCurrentUser = usersById =>
  usersById[
    Object.keys(usersById).filter(userId => usersById[userId].isCurrentUser)[0]
  ];

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return getCurrentUser(action.reviews.users.byId);
    default:
      return state;
  }
};
