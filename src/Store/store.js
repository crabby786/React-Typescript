import axios from "axios";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/crud_reducer";

import axiosMiddleware from "redux-axios-middleware";

const defaultClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json"
});

const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(defaultClient))
);
export default store;
