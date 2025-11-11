import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import themeReducer from "./themeSlice";

export const makeStore = () =>
  configureStore({
    reducer: { theme: themeReducer },
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = makeStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


