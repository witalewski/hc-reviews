import React from "react";
import { Provider } from "react-redux";
import { storiesOf } from "@storybook/react";

import "../index.css";

import { store } from "../state/store";

import { ReviewConnected } from "../components/Review";
import { CommentConnected } from "../components/Comment";
import { UserConnected } from "../components/User";

const addProvider = story => <Provider store={store}>{story()}</Provider>;

storiesOf("User", module)
  .addDecorator(addProvider)
  .add("User 1", () => <UserConnected userId="user1" />)
  .add("User 2", () => <UserConnected userId="user2" />)
  .add("User 3", () => <UserConnected userId="user3" />)
  .add("User 4", () => <UserConnected userId="user4" />)
  .add("User 5", () => <UserConnected userId="user5" />)
  .add("User 6", () => <UserConnected userId="user6" />);

storiesOf("Comment", module)
  .addDecorator(addProvider)
  .add("Comment 1", () => <CommentConnected commentId="comment1" />);

storiesOf("Review", module)
  .addDecorator(addProvider)
  .add("Review 1", () => <ReviewConnected reviewId="review1" />)
  .add("Review 2", () => <ReviewConnected reviewId="review2" />)
  .add("Review 3", () => <ReviewConnected reviewId="review3" />)
  .add("Review 4", () => <ReviewConnected reviewId="review4" />);
