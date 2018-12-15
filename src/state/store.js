import { createStore, combineReducers } from "redux";
import mockReviews from "./mocks/reviews.json";

import { receiveReviews } from "./actions/reviewActions";
import { reviewsReducer } from "./reducers/reviewsReducer";
import { uiReducer } from "./reducers/uiReducer";

const reducers = {
  reviews: reviewsReducer,
  ui: uiReducer
};

const initStore = store => {
  store.dispatch(receiveReviews(mockReviews));
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
