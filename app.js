const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function createManager() {
	inquirer
		.prompt([
			{
				type: "input",
				message:
					"Good day. You will be using this application to build your development team and it will be generated in an HTML document. We will start with the manager. Please input the name of the manager?",
				name: "managerName",
				validate: function (managerName) {
					if (managerName.length < 2) {
						console.log(managerName);
						alert("Please enter a valid name");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please input the id number of the Manager?",
				name: "managerNumber",
				validate: function (managerNumber) {
					if (managerNumber.length < 1) {
						console.log(managerNumber);
						alert("Please enter a valid number");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please input the email of the Manager?",
				name: "managerEmail",
				validate: function (managerEmail) {
					if (managerEmail.length < 7) {
						console.log(managerEmail)
						alert("Please enter a valid email");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please input the office phone number of the Manager?",
				name: "managerOfficePhone",
				validate: function (managerOfficePhone) {
					if (managerOfficePhone.length < 10) {
						console.log(managerOfficePhone)
						alert("Please enter a valid response");
						return false;
					}
					return true;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			addToTeam();
		});
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
			switch (answers.choices) {
				case answers.choices === "Intern":
					addIntern();
					break;
				case answers.choices === "Engineer":
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
				validation: function (engineerName) {
					if (engineerName.length < 2) {
						console.log(engineerName)
						alert("Please enter a valid name");
						return false
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please input the phone number of the Engineer",
				name: "engineerPhoneNumber",
				validation: function (engineerPhoneNumber) {
					if (engineerPhoneNumber.length < 9) {
						console.log(engineerPhoneNumber)
						alert("Please enter a valid phone number");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please enter the ID number for the Engineer",
				name: "engineerId",
				validation: function (engineerId) {
					if (engineerId.length < 1) {
						console.log(engineerId)
						alert("Please enter a valid ID number");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please enter the email for the Engineer",
				name: "engineerEmail",
				validation: function (engineerEmail) {
					if (engineerEmail.length < 1) {
						console.log(engineerEmail)
						alert("Please enter a valid email");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please enter the Github user name for the Engineer",
				name: "engineerGithub",
				validation: function (engineerGithub) {
					console.log(engineerGithub);
					if (engineerGithub.length < 2) {
						console.log("Please enter a valid Github username");
						return false;
					}
					return true;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			addToTeam();
		});
}

function createIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please enter the name of the Intern",
				name: "internName",
				validation: function (internName) {
					if (internName.length < 2) {
						console.log(internName);
						alert.log("Please enter a valid name");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please enter the ID number of the Intern",
				name: "internId",
				validation: function (internId) {
					if (internId.length < 1) {
						console.log(internId);
						alert("Please enter a valid ID number");
						return false;
					}
					return true;
				},
			},
			{
				type: "input",
				message: "Please enter the email of the Intern",
				name: "internEmail",
				validation: function (internEmail) {
					if (internEmail.length < 2) {
						console.log(internEmail);
						alert("Please enter a valid email");
					}
					return;
				},
			},
			{
				type: "input",
				message: "Please enter the school of the Intern",
				name: "internSchool",
				validation: function (internSchool) {
					if (internSchool.length < 2) {
						console.log(internSchool);
						alert("Please enter a valid School name");
						return false;
					}
					return true;
				},
			},
		])
		.then((answers) => {
			console.log(answers);
			addToTeam();
		});
}

function buildHTML() {
	fs.writeFile("managerInfo.html", managerTemplate, "utf8", (err) => {
		if (err) throw err;
		console.log("Successfully created document");
	});
}

createManager();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
