import * as Type from "./ActionTypes";

export const loginUser = (emailID, password,username,nickname) => {
  return {
    type: Type.LOGIN_USER,
    emailID,
    password,
    username,
    nickname

  };
};


export const signupUser = (firstname,middlename, lastName, email, phone, address, apt,
  city,state,zipcode,fullname,clientname,address1) => {
  return {
    type: Type.SIGNUP_USER,
        firstname,
        middlename,
        lastName, 
        email,
        phone,
        address, 
        apt,
        city,
        state,
        zipcode,
        fullname,
        clientname,
        address1
  };
};

export const googleLogin = () => {
  return {
    type: Type.GOOGLE_LOGIN_USER
  };
};

export const getDefaultImages = () => {
  return {
    type: Type.GET_DEFAULT_IMAGES
  };
};

export const newPost = () => {
  return {
    type: Type.NEW_POST
  };
};
