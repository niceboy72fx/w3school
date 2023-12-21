import { combineReducers } from "redux";
import AuthReducer from "./auth/index.ts";
import PathVariableReducer from "./pathVariable/index.ts";
import codeRunner from "./codeRunner/index.ts";
import toastMessage from "./toastMessage/index.ts";
import dataDefine from "./dataDefine.ts";
const rootReducer = combineReducers({
  AuthReducer,
  PathVariableReducer,
  codeRunner,
  toastMessage,
  dataDefine,
});

export default rootReducer;
