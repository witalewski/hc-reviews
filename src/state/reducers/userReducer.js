import { RECEIVE_CURRENT_USER } from "../actions/userActions";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};
