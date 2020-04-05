import React, { Component } from "react";
import { Redirect } from "react-router";

class App extends Component {
	render() {
		if ("data") {
			return <Redirect to={"/employee-list"} />;
		}
		return (
			<React.Fragment>
				<div id="page-container" class={this.props.pageContainerClass}>
					<div id="main-container">{this.props.children}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
