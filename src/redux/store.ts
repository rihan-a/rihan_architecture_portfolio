import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import projectReducer from "./features/project/projectSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    project: projectReducer,
});
const store = configureStore({
    reducer,
});
export default store;
