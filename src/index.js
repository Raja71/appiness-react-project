import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Root from "./Root";
import App from "./components/App";
import Login from "./components/Auth/Login";
import NotFound from "./components/NotFound";
import EmployeeList from "./components/EmployeeList";

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact component={App} />
				<Route path={"/login"} exact component={Login} />
				<Route path={"/employee-list"} exact component={EmployeeList} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Root>,
	document.getElementById("root")
);
