import { createStore } from "redux";
import { thunk } from "redux-thunk";
import Reducer from "./Reducer";

let store = createStore(Reducer);

export default store;
