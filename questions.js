const fs = require("fs");
const inquirer = require("inquirer");

function createManager() {
	inquirer
		.prompt([
			{
				type: "input",
				message:
					"Good day. You will be using this application to build your development team and it will be generated in an HTML document. We will start with the manager. Please input the name of the manager?",
				name: "managerName",
				validate: function () {
					if (managerName.length < 2) {
						console.log("Please enter a valid name");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please input the id number of the Manager?",
				name: "managerNumber",
				validate: function () {
					if (managerNumber.length < 1) {
						console.log("Please enter a valid number");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please input the email of the Manager?",
				name: "managerEmail",
				validate: function () {
					if (managerEmail.length < 7) {
						console.log("Please enter a valid email");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please input the office phone number of the Manager?",
				name: "managerOfficePhone",
				validate: function () {
					if (managerOfficePhone.length < 1) {
						console.log("Please enter a valid response");
					}
					return;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
		});
	addToTeam();
}

function addToTeam() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "Would you like to add more members to the team?",
				name: "addMembers",
				choices: ["Intern", "Engineer", "Finished Building Team"],
			},
		])
		.then((answers) => {
			switch (answers) {
				case answers === "Intern":
					addIntern();
					break;
				case answers === "Engineer":
					addEngineer();
					break;
				default:
					buildHTML();
			}
		});
}

function addEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please input the name of the Engineer",
				name: "engineerName",
				validation: function () {
					if (engineerName.length < 2) {
						console.log("Please enter a valid name");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please input the phone number of the Engineer",
				name: "engineerPhoneNumber",
				validation: function () {
					if (engineerPhoneNumber.length < 9) {
						console.log("Please enter a valid phone number");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the ID number for the Engineer",
				name: "engineerId",
				validation: function () {
					if (engineerId.length < 1) {
						console.log("Please enter a valid ID number");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the email for the Engineer",
				name: "engineerEmail",
				validation: function () {
					if (engineerEmail.length < 1) {
						console.log("Please enter a valid email");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the Github user name for the Engineer",
				name: "engineerGithub",
				validation: function () {
					if (engineerGithub.length < 2) {
						console.log("Please enter a valid Github username");
					}
					return;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
		});
	addToTeam();
}

function createIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the Intern",
				name: "internName",
				validation: function () {
					if (internName.length < 2) {
						console.log("Please enter a valid name");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the ID number of the Intern",
				name: "internId",
				validation: function () {
					if (internId.length < 1) {
						console.log("Please enter a valid ID number");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the email of the Intern",
				name: "internEmail",
				validation: function () {
					if (internEmail.length < 2) {
						console.log("Please enter a valid email");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the school of the Intern",
				name: "internSchool",
				validation: function () {
					if (internEmail.length < 2) {
						console.log("Please enter a valid School name");
					}
					return;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
		});
	addToTeam();
}

function buildHTML() {
	fs.writeFile("managerInfo.html", managerTemplate, "utf8", (err) => {
		if (err) throw err;
		console.log("Successfully created document");
	});
}

createManager();
