import { configureStore } from "@reduxjs/toolkit";
import registerStateReducer from "./auth/register/registerSlicer";
import loginStateReducer from "./auth/login/loginSlice";
import forgotPasswordStateReducer from "./auth/forgotPassword/forgetPasswordSlice";
import checkResetPasswordStateReducer from "./auth/checkTokenResetPassword/checkTokenResetPasswordSlice";

const store = configureStore({
  reducer: {
    registerState: registerStateReducer,
    loginState: loginStateReducer,
    forgotPasswordState: forgotPasswordStateReducer,
    checkResetPasswordState: checkResetPasswordStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
