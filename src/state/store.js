import { createStore, combineReducers } from "redux";
import mockReviews from "./mocks/reviews.json";

import { receiveReviews } from "./actions/reviewActions";

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
  return store;
};

export const store = initStore(
  createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
