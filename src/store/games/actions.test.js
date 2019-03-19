import * as actions from "./actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: types.FETCH_GAMES
    };
    expect(actions.fetchGames()).toEqual(expectedAction);
  });
});
