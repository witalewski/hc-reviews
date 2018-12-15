import mockCurrentUser from "../mocks/currentUser.json";

import { userReducer } from "./userReducer";

import { receiveCurrentUser } from "../actions/userActions";

describe("userReducer", () => {
  it("returns default state", () => {
    const result = userReducer(undefined, { type: "" });
    expect(result).toBeDefined();
  });

  it("stores information about current user", () => {
    const result = userReducer(undefined, receiveCurrentUser(mockCurrentUser));
    expect(result).toEqual(mockCurrentUser);
  });
});
