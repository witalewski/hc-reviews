import React from "react";
import { Provider } from "react-redux";
import { storiesOf, addDecorator } from "@storybook/react";

import { store } from "../state/store";

import mockData from "../state/mocks/reviews.json";
import { ReviewConnected } from "../components/Review";
import { Comment } from "../components/Comment";

storiesOf("Review", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("Review 1", () => (
    <ReviewConnected reviewId="review1" />
  ))
  .add("Review 2", () => (
    <ReviewConnected reviewId="review2" />
  ))
  .add("Review 3", () => (
    <ReviewConnected reviewId="review3" />
  ))
  .add("Review 4", () => (
    <ReviewConnected reviewId="review4" />
  ));

storiesOf("Comment", module).add("Comment 1", () => (
  <Comment comments={mockData.comments.byId} commentId="comment1" />
));
