import mockReviews from "../mocks/reviews.json";

import { uiReducer } from "./uiReducer";

import { receiveReviews } from "../actions/reviewActions";
import { addComment, saveComment, cancelComment } from "../actions/commentActions";

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

  it("adds new comment to a review", () => {
    const initialState = {
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    };
    const result = uiReducer(initialState, addComment("review1"));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    });
  });

  it("adds new comment to another review", () => {
    const initialState = {
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    };
    const result = uiReducer(initialState, addComment("review2"));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      }
    });
  });

  it("removes new comment input when it is saved", () => {
    const initialState = {
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    };
    const result = uiReducer(initialState, saveComment(null,"review1"));
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
  it("removes new comment input when it is cancelled", () => {
    const initialState = {
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      }
    };
    const result = uiReducer(initialState, cancelComment("review2"));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      }
    });
  });
});
