import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { UserState, userReducer } from "../redux/user/userReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type AppThunkAction<R = void> = ThunkAction<
  R,
  AppStore,
  undefined,
  AnyAction
>;

export interface AppStore {
  user: UserState;
}

export const store = configureStore({
  reducer: { user: userReducer },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
