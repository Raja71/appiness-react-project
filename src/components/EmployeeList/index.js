import React, { Component } from "react";
import { getEmployees } from "./../../services/employees/actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Redirect } from "react-router";

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

class EmployeeList extends Component {
	state = {
		user: JSON.parse(localStorage.getItem("state"))
	};

	//calling service to get all employees
	componentDidMount() {
		this.props.getEmployees();
	}
	render() {
		console.log(this.props);
		if (this.props.user.length <= 0) {
			return <Redirect to={"/login"} />;
		}
		return (
			<div className="col-10 mx-auto mt-5">
				<TableContainer component={Paper}>
					<Table className={useStyles.table} aria-label="simple table">
						<TableHead>
							<TableRow className="table-header-background">
								<TableCell>ID</TableCell>
								<TableCell align="center">Name</TableCell>
								<TableCell align="center">Age</TableCell>
								<TableCell align="center">Gender</TableCell>
								<TableCell align="center">Email</TableCell>
								<TableCell align="center">Phone No.</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.employees.user && (
								<React.Fragment>
									{this.props.employees.user.map(employee => (
										<TableRow key={employee.id}>
											<TableCell component="th" scope="row">
												{employee.id}
											</TableCell>
											<TableCell align="center">{employee.name}</TableCell>
											<TableCell align="center">{employee.age}</TableCell>
											<TableCell align="center">{employee.gender}</TableCell>
											<TableCell align="center">{employee.email}</TableCell>
											<TableCell align="center">{employee.phoneNo}</TableCell>
										</TableRow>
									))}
								</React.Fragment>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	employees: state.employees.employees,
	user: state.user.user
});

export default connect(
	mapStateToProps,
	{ getEmployees }
)(EmployeeList);
