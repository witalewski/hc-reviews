import { createStore, combineReducers } from "redux";
import mockReviews from "./mocks/reviews.json";
import mockCurrentUser from "./mocks/currentUser.json";

import { receiveReviews } from "./actions/reviewActions";
import { receiveCurrentUser } from "./actions/userActions";

import { reviewsReducer } from "./reducers/reviewsReducer";
import { uiReducer } from "./reducers/uiReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = {
  reviews: reviewsReducer,
  ui: uiReducer,
  user: userReducer
};

const initStore = store => {
  store.dispatch(receiveReviews(mockReviews));
  store.dispatch(receiveCurrentUser(mockCurrentUser));
  return store;
};

export const store = initStore(
  createStore(
    combineReducers(reducers),
    process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
