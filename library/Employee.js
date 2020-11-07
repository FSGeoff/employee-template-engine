const inquirer = require("inquirer");

class Employee {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
