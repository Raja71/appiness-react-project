import { EMPLOYEES_LIST } from "./actionTypes";
import employeeList from "./../../utils/employeeList.json";

export const getEmployees = () => dispatch => {
	return dispatch({ type: EMPLOYEES_LIST, payload: employeeList });
};
