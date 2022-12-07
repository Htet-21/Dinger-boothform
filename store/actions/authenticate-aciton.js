import Axios from "axios";
import {
  AUTHENTICATE_FAIL,
  AUTHENTICATE_SUCCESS,
  error,
  ERROR_EXIST,
  formUrl,
  NO_ERROR,
} from "../type";
import Cookies from "universal-cookie";
import localforage from "localforage";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const cookie = new Cookies();
export const AuthenticateAcition = (data) => {
  return async (dispatch) => {
    try {
      const res = await Axios.post(`${formUrl}authenticate`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res_1 = res.data;
      if (res_1.code == error.REQUEST_SUCCESS) {
        localforage.setItem("amount", res_1.response.totalAmount);
        localforage.setItem("icon", res_1.response.icon);
        localforage.setItem("items", res_1.response.items);
        localforage.setItem("secretKey", res_1.response.secretKey);
        localforage.setItem("returnUrl", res_1.response.returnUrl);
        cookie.set("token", res_1.response.accessKey, { path: "/" });
        dispatch({
          type: AUTHENTICATE_SUCCESS,
          payload: {
            success: true,
            response: res_1.response,
            message: res_1.message,
            code: res_1.code,
            loading: false,
          },
        });
       
        
      } else if (
        res_1.code == error.TOKEN_EXPIRE ||
        res_1.code == error.TOKEN_NOT_EXIST
      ) {
        router.push({ pathname: "/expire", query: { msg: res_1.message } });
      } else {
        dispatch({
          type: ERROR_EXIST,
          message: res_1.message,
          code: res_1.code,
        });
        dispatch({
          type: AUTHENTICATE_FAIL,
          payload: {
            debug: res_1.debugMessage,
            success: false,
            message: res_1.message,
            code: res_1.code,
            loading: false,
          },
        });
        // router.push({ pathname: "/expire", query: { msg: res_1.message } });
      }
    } catch (error) {
      console.log("error " + error);
    }
  };
};
