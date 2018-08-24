import * as Type from "../actions/ActionTypes";

const initialState = {
 
  firstname:"",
  middlename: "",
  lastname: "",
   email: "", 
  phone: "",
   address:"",
   apt:"",
   city:"",
    state:"",
  zipcode:"",
  fullname:"",
   clientname:"",
   address1:"",
  userObject: "",
  isUserSignedIn: false,
  
};

const handleSignupServerResponseSuccess = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, {
    isUserSignedIn: true,
   firstname:"wini",
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
