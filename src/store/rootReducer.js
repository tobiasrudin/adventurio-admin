import { combineReducers } from "redux";
import gamesReducer from "./games/reducer";

const rootReducer = combineReducers({
  gamesReducer
});

export default rootReducer;
