import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class HeaderComponent extends Component {
	state = {
		auth: false,
		anchorEl: false,
		open: false,
		username: ""
	};
	componentDidMount() {
		let user = JSON.parse(localStorage.getItem("state"));
		console.log(user);
		if (user) {
			if (user.user.user.username) {
				this.setState({
					auth: true,
					username: user.user.user.username
				});
			}
		}
	}

	handleChange = event => {
		console.log(event.currentTarget);
		this.setState({
			anchorEl: event.currentTarget,
			open: true
		});
	};

	handleClose = () => {
		this.setState({
			open: false
		});
	};

	handleLogout = () => {
		localStorage.removeItem("state");
		this.setState({
			auth: false
		});
	};

	render() {
		return (
			<div className="header-root">
				<AppBar position="static">
					<Toolbar>
						{this.state.auth === true ? (
							<div>
								<Button color="inherit">HI!.... {this.state.username}</Button>
							</div>
						) : null}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default HeaderComponent;
