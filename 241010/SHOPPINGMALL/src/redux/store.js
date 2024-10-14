import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "../pages/reducers/productReducer";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
