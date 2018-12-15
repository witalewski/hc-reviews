import React from "react";
import { storiesOf } from "@storybook/react";

import mockData from "../mockData/reviews.json";
import { Review } from "../components/Review.js";

storiesOf("Review", module)
  .add("Review 1", () => (
    <Review reviews={mockData.items.byId} reviewId="review1" />
  ))
  .add("Review 2", () => (
    <Review reviews={mockData.items.byId} reviewId="review2" />
  ))
  .add("Review 3", () => (
    <Review reviews={mockData.items.byId} reviewId="review3" />
  ))
  .add("Review 4", () => (
    <Review reviews={mockData.items.byId} reviewId="review4" />
  ));
