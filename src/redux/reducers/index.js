import { combineReducers } from "redux";
import Auth from "./AuthReducer";
import Images from "./ImagesReducer";
import Signup from "./SignupReducer";

export default combineReducers({
  Auth,
  Signup,
  Images
});
