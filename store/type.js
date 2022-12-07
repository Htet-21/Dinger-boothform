import moment from "moment";

export const formUrl = "https://test.dinger.asia/form-payment/api/";
export const payUrl = "https://api.dinger.asia/api/";

export const RedirectUrl = "https://portal.dinger.asia/gateway/redirect";
export const MPU_REDIRECT_URL = "https://portal.dinger.asia/gateway/mpu";
export const CREDIT_CARD_URL = "https://creditcard-portal.dinger.asia";

export const error = {
  REQUEST_SUCCESS: "000",
  SYSTEM_ERROR: "001",
  ACCESS_DENIED: "002",
  AUTHENTICATION_FAILED: "003",
  UNSUPPORTED_MEDIA_TYPE: "008",
  DATABASE_ERROR: "009",
  INVALID_CHANNEL_VERSION: "100",
  INVALID_DATE_TIME_TIMEZONE: "101",
  INVALID_PARAMETER: "102",
  USER_NAME_ALREADY_EXIST: "103",
  INVALID_OLD_PASSWORD: "104",
  PROJECT_NAME_ALREADY_EXIST: "300",
  INVALID_OTP: "201",
  TOKEN_EXPIRE: "401",
  TOKEN_NOT_EXIST: "105",
};

export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_SUCCESS = "AUTHENTICATE_SUCCESS";
export const AUTHENTICATE_FAIL = "AUTHENTICATE_FAIL";

export const ERROR_EXIST = "ERROR_EXIST";
export const NO_ERROR = "NO_ERROR";

export const CLIENT_VERSION_NO = "1.0";
export const CHANNEL = "WEB";
export const TIME_ZONE = "Asia/Yangon";
export const DATE = moment().format("YYYYMMDD");
export const TIME = moment().format("HHmmss");
