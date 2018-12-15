import mockReviews from "../mockData/reviews.json";

export const reviewsReducer = (state = mockReviews, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
