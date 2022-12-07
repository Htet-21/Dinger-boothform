import { combineReducers } from "redux";
import { AuthenticateReducer } from "./authenticate-reducer";

export default combineReducers({
  authenticateResponse: AuthenticateReducer
});
