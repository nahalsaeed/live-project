import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";


const reducers = combineReducers({

});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
