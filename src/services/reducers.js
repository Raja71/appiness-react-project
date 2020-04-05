import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import employeesReducer from "./employees/reducer";
export default combineReducers({
	user: userReducer,
	employees: employeesReducer
});
