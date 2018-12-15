import { createStore, combineReducers } from "redux";
import { reviewsReducer } from "./reducers/reviewsReducer";

const reducers = {
  reviews: reviewsReducer
};

export const store = createStore(
  combineReducers(reducers),
  process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
