import { configureStore } from "@reduxjs/toolkit";
import registerStateReducer from "./auth/register/registerSlicer";
import loginStateReducer from "./auth/login/loginSlice";

const store = configureStore({
  reducer: {
    registerState: registerStateReducer,
    loginState: loginStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
