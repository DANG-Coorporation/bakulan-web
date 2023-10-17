import { configureStore } from "@reduxjs/toolkit";
import registerStateReducer from "./auth/register/registerSlicer";
const store = configureStore({
  reducer: {
    registerState: registerStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
