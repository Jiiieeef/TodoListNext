import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { todoSlice } from "./todoSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: combineReducers({
      [todoSlice.name]: todoSlice.reducer,
    }),
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
