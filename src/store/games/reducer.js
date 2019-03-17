import Immutable from "seamless-immutable";

const initialState = Immutable({});

export default function todos(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
