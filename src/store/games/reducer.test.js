import Immutable from "seamless-immutable";
import reducer from "./reducer";

const initialState = Immutable({});

describe("games reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
