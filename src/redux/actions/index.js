import * as Type from "./ActionTypes";

export const loginUser = (username, password) => {
  return {
    type: Type.LOGIN_USER,
    username,
    password
  };
};

export const signupUser = (firstname,middlename, lastName, email, phone, address, address1, place,
  state,city,zipcode, apt, fullname,clientname) => {
  return {
    type: Type.SIGNUP_USER,
    firstname,
    middlename,
    lastName,
    email,
    phone,
    address,
    address1,
    place,
    state,
    city,
    zipcode,
    apt,
    fullname,
    clientname

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
