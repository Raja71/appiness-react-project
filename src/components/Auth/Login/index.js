import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { loginUser } from "../../../services/user/actions";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { Redirect } from "react-router-dom";

class Login extends Component {
	state = {
		loginusername: "",
		loginpassword: "",
		btnLoading: true,
		loginusernameErr: ""
	};

	//to set state
	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	//call login service
	handleLogin = event => {
		event.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			this.props.loginUser(this.state.loginusername, this.state.loginpassword);
			this.setState({
				loginusernameErr: ""
			});
		}
	};

	constructor() {
		super();
		this.validator = new SimpleReactValidator({
			autoForceUpdate: this,
			messages: {
				required: "",
				email: ""
			}
		});
	}

	//validate email id
	validate = () => {
		let loginusernameErr = "";
		if (!this.state.loginusername.includes("@")) {
			loginusernameErr = "Invalid email";
		}
		if (loginusernameErr) {
			this.setState({
				loginusernameErr: loginusernameErr
			});
			return false;
		}
		return true;
	};

	render() {
		const { user } = this.props;
		console.log(localStorage.getItem("state"));
		if (user.username === "hruday@gmail.com") {
			return <Redirect to={"/employee-list"} />;
		}
		return (
			<Grid item md={6} sm={9} xs={12} className="mx-auto mt-5 p-5" component={Paper} elevation={6} square>
				<div className="paper">
					<div className="row">
						<div className="col-5"></div>
						<div className="col-5">
							<Avatar className="avatar" style={{ backgroundColor: "#f50057" }}>
								<LockOutlinedIcon />
							</Avatar>
							<span className="p-0 m-0">Sign in</span>
						</div>
					</div>
					<form>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							label="enter email"
							name="loginusername"
							autoComplete="loginusername"
							autoFocus
							onChange={this.handleInputChange}
						/>
						<span style={{ color: "red" }}>{this.state.loginusernameErr}</span>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="loginpassword"
							label="Password"
							type="password"
							autoComplete="current-password"
							onChange={this.handleInputChange}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							disabled={this.state.loginusername === "" || this.state.loginpassword === ""}
							color="primary"
							onClick={this.handleLogin}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<div className="mt-2">
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</div>
							</Grid>
							<Grid item>
								<div className="mt-2">
									<Link href="#" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</div>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Typography variant="body2" color="textSecondary" align="center">
								{"Copyright © "}
								<Link color="inherit" target="_blank" href="https://www.appinessworld.com/">
									appiness interactive
								</Link>{" "}
								{new Date().getFullYear()}
								{"."}
							</Typography>
						</Box>
					</form>
				</div>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user.user
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
