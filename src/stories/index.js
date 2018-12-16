import React from "react";
import { Provider } from "react-redux";
import { storiesOf } from "@storybook/react";

import "../index.css";
import { colors } from "../global/styleConstants";

import { store } from "../state/store";

import { Header } from "../components/Header";
import { ReviewConnected } from "../components/Review";
import { CommentConnected } from "../components/Comment";
import { UserConnected } from "../components/User";

const providerDecorator = story => <Provider store={store}>{story()}</Provider>;
const reviewDecorator = story => (
  <div
    style={{
      paddingTop: 200,
      paddingBottom: 200,
      background: colors.lightGray
    }}
  >
    {story()}
  </div>
);
const userDecorator = story => (
  <div
    style={{
      marginTop: 200,
      marginBottom: 200,
      background: colors.lightGray
    }}
  >
    {story()}
  </div>
);

storiesOf("Header", module).add("Header", () => <Header />);

storiesOf("User", module)
  .addDecorator(providerDecorator)
  .addDecorator(userDecorator)
  .add("User 1", () => <UserConnected userId="user1" />)
  .add("User 2", () => <UserConnected userId="user2" />)
  .add("User 3", () => <UserConnected userId="user3" />)
  .add("User 4", () => <UserConnected userId="user4" />)
  .add("User 5", () => <UserConnected userId="user5" />)
  .add("User 6", () => <UserConnected userId="user6" />);

storiesOf("Review", module)
  .addDecorator(providerDecorator)
  .addDecorator(reviewDecorator)
  .add("Review 1", () => <ReviewConnected reviewId="review1" />)
  .add("Review 2", () => <ReviewConnected reviewId="review2" />)
  .add("Review 3", () => <ReviewConnected reviewId="review3" />)
  .add("Review 4", () => <ReviewConnected reviewId="review4" />);
