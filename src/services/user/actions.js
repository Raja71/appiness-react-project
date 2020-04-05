import { LOGIN_USER, LOGIN_ERROR } from "./actionTypes";
import userCredentials from "./../../utils/LoginCredentials.json";

export const loginUser = (username, password) => dispatch => {
	if (username === userCredentials[0].username && password === userCredentials[0].password) {
		return dispatch({ type: LOGIN_USER, payload: { username: userCredentials[0].username } });
	} else {
		return dispatch({ type: LOGIN_ERROR, payload: { message: "Invalid Credentials" } });
	}
};
