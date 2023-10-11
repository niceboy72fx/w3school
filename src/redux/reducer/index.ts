import { combineReducers } from "redux";
import AuthReducer from "./auth/index.ts";
import PathVariableReducer from "./pathVariable/index.ts";
const rootReducer = combineReducers({
  AuthReducer,
  PathVariableReducer,
});

export default rootReducer;
