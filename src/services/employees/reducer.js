import { EMPLOYEES_LIST } from "./actionTypes";

const initialState = {
	employees: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case EMPLOYEES_LIST:
			return { ...state, employees: action.payload };
		default:
			return state;
	}
}
