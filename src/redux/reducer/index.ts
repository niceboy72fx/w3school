import { combineReducers } from "redux";
import AuthReducer from "./auth/index.ts";
import PathVariableReducer from "./pathVariable/index.ts";
import codeRunner from "./codeRunner/index.ts";
const rootReducer = combineReducers({
  AuthReducer,
  PathVariableReducer,
  codeRunner,
});

export default rootReducer;
