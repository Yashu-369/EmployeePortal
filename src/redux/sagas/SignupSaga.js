import { takeEvery, call, put, select } from "redux-saga/effects";
import * as Types from "../actions/ActionTypes";
import * as API from "../../config/config";
import { GetDataFromServer } from "../service";

export function* fetchSignupUser(action) {
  try {
    let formBody = {};
    formBody.firstname = action.firstname;
    formBody.middlename = action.middlename;
    formBody.lastname = action.lastname;
    const reqMethod = "POST";
    const response = yield call(
      GetDataFromServer,
      API.SIGNUP_USER_API,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.SIGNUP_USER_SERVER_RESPONSE_ERROR,
        error: result.error
      });
    } else {
      yield put({ type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    //yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
    yield put({ type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, result:"" });
  }
}

export function* storeUser(action) {
  try {
    let formBody = {};
    formBody.firstname = action.firstname;
    formBody.middlename = action.middlename;
    formBody.lastname = action.lastname;
    const reqMethod = "POST";
    const response = yield call(
      GetDataFromServer,
      API.SIGNUP_USER_API,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.SIGNUP_USER_SERVER_RESPONSE_ERROR,
        error: result.error
      });
    } else {
      yield put({ type: Types.SIGNUP_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
  }
}

 
