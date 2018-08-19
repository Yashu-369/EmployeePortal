import * as Type from "../actions/ActionTypes";

const initialState = {
  username: "",
  password: "",
  userObject: "",
  isUserLoggedIn: false,
  googleLogin: false
};

const handleLoginServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    isUserLoggedIn: true,
    userObject: { username : "yashu"  } //action.result
  });
  return { ...newState };
};

const handleGoogleLoginServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    isUserLoggedIn: true,
    googleLogin: true,
    userObject: action.result
  });
  return { ...newState };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Type.LOGIN_USER:
      return { ...state };
    case Type.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
      return handleLoginServerResponseSuccess(state, action);
    case Type.LOGIN_USER_SERVER_RESPONSE_ERROR:
      return { ...state };
    case Type.GOOGLE_LOGIN_USER:
      return { ...state };
    case Type.GOOGLE_LOGIN_USER_SERVER_RESPONSE_SUCCESS:
      return handleGoogleLoginServerResponseSuccess(state, action);
    case Type.GOOGLE_LOGIN_USER_SERVER_RESPONSE_ERROR:
      return { ...state };
    case Type.SERVER_CALL_FAILED:
      return { ...state };      
    default:
      return { ...state };
  }
};
// now run the app
// now can you add two more fields adn implement the flow?
// add username and nick name fields
