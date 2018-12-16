import { reviewsReducer } from "./reviewsReducer";
import { saveComment } from "../actions/commentActions";
import mockState from "../mocks/reviews.json";

describe("reviewsReducer", () => {
  it("returns default state", () => {
    const result = reviewsReducer(undefined, { type: "" });
    expect(result).toBeDefined();
  });

  it("saves first comment", () => {
    const initialState = {
      items: {
        byId: {
          review1: {
            comments: []
          }
        },
        allIds: ["review1"]
      },
      comments: {
        byId: {},
        allIds: []
      }
    };
    const comment = {
      id: "comment1",
      author: "user3",
      date: "2016-09-21T15:00",
      body: [
        "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
        "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."
      ]
    };
    const result = reviewsReducer(
      initialState,
      saveComment(comment, "review1")
    );
    expect(result).toEqual({
      items: {
        byId: {
          review1: {
            comments: ["comment1"]
          }
        },
        allIds: ["review1"]
      },
      comments: {
        byId: {
          comment1: comment
        },
        allIds: ["comment1"]
      }
    });
  });

  it("saves subsequent comment", () => {
    const initialState = {
      items: {
        byId: {
          review1: {
            comments: ["comment1"]
          }
        },
        allIds: ["review1"]
      },
      comments: {
        byId: {
          comment1: {
            id: "comment1",
            author: "user3",
            date: "2016-09-21T15:00",
            body: [
              "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
              "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."
            ]
          }
        },
        allIds: ["comment1"]
      }
    };
    const comment = {
      id: "comment2",
      author: "user4",
      date: "2016-09-21T16:00",
      body: [
        "Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am."
      ]
    };
    const result = reviewsReducer(
      initialState,
      saveComment(comment, "review1")
    );
    expect(result).toEqual({
      items: {
        byId: {
          review1: {
            comments: ["comment1", "comment2"]
          }
        },
        allIds: ["review1"]
      },
      comments: {
        byId: {
          comment1: {
            id: "comment1",
            author: "user3",
            date: "2016-09-21T15:00",
            body: [
              "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
              "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."
            ]
          },
          comment2: comment
        },
        allIds: ["comment1", "comment2"]
      }
    });
  });

  it("saves subsequent comment for another review", () => {
    const initialState = {
      items: {
        byId: {
          review1: {
            comments: ["comment1"]
          },
          review2: {
            comments: []
          }
        },
        allIds: ["review1", "review2"]
      },
      comments: {
        byId: {
          comment1: {
            id: "comment1",
            author: "user3",
            date: "2016-09-21T15:00",
            body: [
              "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
              "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."
            ]
          }
        },
        allIds: ["comment1"]
      }
    };
    const comment = {
      id: "comment2",
      author: "user4",
      date: "2016-09-21T16:00",
      body: [
        "Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am."
      ]
    };
    const result = reviewsReducer(
      initialState,
      saveComment(comment, "review2")
    );
    expect(result).toEqual({
      items: {
        byId: {
          review1: {
            comments: ["comment1"]
          },
          review2: {
            comments: ["comment2"]
          }
        },
        allIds: ["review1", "review2"]
      },
      comments: {
        byId: {
          comment1: {
            id: "comment1",
            author: "user3",
            date: "2016-09-21T15:00",
            body: [
              "Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.",
              "In show dull give need so held. One order all scale sense her gay style wrote. Incommode our not one ourselves residence. Shall there whose those stand she end. So unaffected partiality indulgence dispatched to of celebrated remarkably. Unfeeling are had allowance own perceived abilities."
            ]
          },
          comment2: comment
        },
        allIds: ["comment1", "comment2"]
      }
    });
  });

  it("saves new comment in a larger structure", () => {
    const comment = {
      id: "comment2",
      author: "user4",
      date: "2016-09-21T16:00",
      body: [
        "Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am."
      ]
    };
    const result = reviewsReducer(mockState, saveComment(comment, "review3"));
    expect(result).toEqual({
      ...mockState,
      items: {
        ...mockState.items,
        byId: {
          ...mockState.items.byId,
          review3: {
            ...mockState.items.byId.review3,
            comments: ["comment2"]
          }
        }
      },
      comments: {
        byId: {
          ...mockState.comments.byId,
          comment2: comment
        },
        allIds: [...mockState.comments.allIds, "comment2"]
      }
    });
  });
});
