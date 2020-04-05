import { LOGIN_USER, LOGIN_ERROR } from "./actionTypes";

const initialState = {
	user: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOGIN_USER:
			return { ...state, user: action.payload };
		case LOGIN_ERROR:
			return { ...state, user: action.payload };
		default:
			return state;
	}
}
