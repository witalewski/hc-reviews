import React from "react";
import { storiesOf } from "@storybook/react";

import mockData from "../mockData/reviews.json";
import { Review } from "../components/Review.js";

storiesOf("Review", module).add("Review 1", () => (
  <Review reviews={mockData.items.byId} reviewId="review1" />
));
