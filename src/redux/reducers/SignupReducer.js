import * as Type from "../actions/ActionTypes";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  emailId: "",
  password: "",
  userObject: "",
  isUserSignedIn: false,
  
 
};

const handleSignupServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    isUserSignedIn: true,
    username: "yashu is great",
  firstname: "yashu",
  lastname: " is great",
  emailId: "yashu",
  password: "yashupassword",
    userObject: { username : "yashu"  } //action.result
  });
  return { ...newState };
};


export default (state = initialState, action) => {
  switch (action.type) {
    case Type.SIGNUP_USER:
      return { ...state };
    case Type.SIGNUP_USER_SERVER_RESPONSE_SUCCESS:
      return handleSignupServerResponseSuccess(state, action);
    case Type.SIGNUP_USER_SERVER_RESPONSE_ERROR:
      return { ...state };
   
    case Type.SERVER_CALL_FAILED:
      return { ...state };      
    default:
      return { ...state };
  }
};
