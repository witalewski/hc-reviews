import { uiReducer } from "./uiReducer";
import { receiveReviews } from "../actions/reviewActions";
import mockReviews from "../mocks/reviews.json";

describe("uiReducer", () => {
  it("returns default state", () => {
    const result = uiReducer(undefined, { type: "" });
    expect(result).toBeDefined();
  });

  it("creates entries for received reviews (sample)", () => {
    const reviews = {
      items: {
        allIds: ["review1", "review2"]
      }
    };
    const result = uiReducer(undefined, receiveReviews(reviews));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    });
  });

  it("creates entries for received reviews (mock data)", () => {
    const result = uiReducer(undefined, receiveReviews(mockReviews));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review3: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review4: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    });
  });
});
