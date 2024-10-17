import { combineReducers } from "redux";
import authenticateReducer from "./reducers/autenticateReducer";
import productReducer from "./reducers/productReducer";
const rootReducer = combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
export default rootReducer;
