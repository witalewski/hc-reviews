import mockReviews from "../mocks/reviews.json";

import { uiReducer } from "./uiReducer";

import { receiveReviews } from "../actions/reviewActions";
import { addComment, saveComment, cancelComment } from "../actions/commentActions";
import { expandText } from "../actions/uiActions";

describe("uiReducer", () => {
  it("returns default state", () => {
    const result = uiReducer(undefined, { type: "" });
    expect(result).toBeDefined();
  });

  it("creates entries for received reviews and comments (sample)", () => {
    const reviews = {
      items: {
        allIds: ["review1", "review2"]
      },
      comments: {
        allIds: ["comment1", "comment2"]
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
      },
      comment1: {
        isTextExpanded: false,
      },
      comment2: {
        isTextExpanded: false,
      },
      nextCommentId: "comment3"
    });
  });

  it("creates entries for received reviews and comments (mock data)", () => {
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
      },
      comment1: {
        isTextExpanded: false,
      },
      nextCommentId: "comment2"
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

  it("removes new comment input and updates comments when comment is saved", () => {
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
    const result = uiReducer(initialState, saveComment({id: "comment1"},"review1"));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      comment1: {
        isTextExpanded: false,
      },
      nextCommentId: "comment2"
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

  it("expands review text", () => {
    const initialState = {
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: false,
        isCommentBeingAdded: true
      }
    };
    const result = uiReducer(initialState, expandText("review2"));
    expect(result).toEqual({
      review1: {
        isTextExpanded: false,
        isCommentBeingAdded: false
      },
      review2: {
        isTextExpanded: true,
        isCommentBeingAdded: true
      }
    });
  });
});
