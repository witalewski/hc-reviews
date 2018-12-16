import mockReviews from "../mocks/reviews.json";

import { userReducer } from "./userReducer";

import { receiveReviews } from "../actions/reviewActions";

describe("userReducer", () => {
  it("returns default state", () => {
    const result = userReducer(undefined, { type: "" });
    expect(result).toBeDefined();
  });

  it("stores information about current user", () => {
    const result = userReducer(undefined, receiveReviews(mockReviews));
    expect(result).toEqual({
        id: "user6",
        name: "Ava George",
        picture: "https://randomuser.me/api/portraits/women/2.jpg",
        isCurrentUser: true
    });
  });
});
