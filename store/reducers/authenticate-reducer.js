import { AUTHENTICATE, AUTHENTICATE_FAIL, AUTHENTICATE_SUCCESS } from "../type";

const initialState = {
    response: {},
    message: "",
    debugMessage: "",
    loading : true,
    success : false,
    code:"",
  };
  export const AuthenticateReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTHENTICATE:
        return {
          ...state,
          loading: true,
        };
      case AUTHENTICATE_SUCCESS:
        return {
          ...state,
          loading: false,
          response:action.payload.response,
          message: action.payload.message,
          code: action.payload.code,
          success : true
        };
      case AUTHENTICATE_FAIL:
        return {
          ...state,
          loading: false,
          success :false,
          message: action.payload.message,
          debugMessage: action.payload.debug,
          code: action.payload.code,
        };
      default:
        return state;
    }
  };
