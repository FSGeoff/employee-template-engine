const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "Please input the name of the manager?",
			name: "managerName",
		},
		{
			type: "input",
			message: "Please input the number of the manager?",
			name: "managerNumber",
		},
		{
			type: "input",
			message: "Please input the email of the manager?",
			name: "managerEmail",
		},
		{
			type: "input",
			message: "Please input the office phone number of the manager?",
			name: "managerOfficePhone",
		},
		{
			type: "list",
			message: "What other members are on the team?",
			name: "teamMemebers",
			choices: ["Engineer", "Intern"],
		},
		{
			type: "input",
			message: "Please input the name of the engineer?",
			name: "engineerName",
			when: function (answers) {
				return answers.teamMembers === "Engineer";
			},
		},
		{
			type: "input",
			message: "Please input the number of the engineer?",
			name: "engineerNumber",
			when: function (answers) {
				return answers.teamMembers === "Engineer";
			},
		},
		{
			type: "input",
			message: "Please input the email of the Engineer?",
			name: "engineerEmail",
			when: function (answers) {
				return answers.teamMembers === "Engineer";
			},
		},
		{
			type: "input",
			message: "Please input the Github user name of the Engineer?",
			name: "engineerName",
			when: function (answers) {
				return answers.teamMembers === "Engineer";
			},
		},

		{
			type: "input",
			message: "Please input the number of the Intern?",
			name: "internNumber",
			when: function (answers) {
				return answers.teamMembers === "Intern";
			},
		},
		{
			type: "input",
			message: "Please input the email of the Intern?",
			name: "internEmail",
			when: function (answers) {
				return answers.teamMembers === "Intern";
			},
		},
		{
			type: "input",
			message: "Please input the School of the Intern?",
			name: "internSchool",
			when: function (answers) {
				return answers.teamMembers === "Intern";
			},
		},
	])
	.then((response) => {
		console.log("hello");
		console.log(response);
	});

// const managerTemplate = `<!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>Manager HTML Template</title>
//             <link
//                 rel="stylesheet"
//                 href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
//                 integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
//                 crossorigin="anonymous"
//             />
//             <script
//                 src="https://code.jquery.com/jquery-3.5.1.min.js"
//                 integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
//                 crossorigin="anonymous"
//             ></script>
//             <script
//                 src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
//                 integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
//                 crossorigin="anonymous"
//             ></script>
//             <script
//                 src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
//                 integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
//                 crossorigin="anonymous"
//             ></script>
//             <script
//                 src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
//                 integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
//                 crossorigin="anonymous"
//             ></script>
//         </head>
//         <body>
//             <div class="card" style="width: 18rem;">
//                 <h2 class="card-hdr" id="emp-hdr">Manager</h2>
//                 <div class="card-body">
//                   <p class="card-text">${answers.managerName}</p>
//                   <p class="card-text">${answers.managerNumber}</p>
//                   <p class="card-text">${answers.managerOfficePhone}</p>
//                   <p class="card-text">${answers.managerEmail}</p>
//                 </div>
//               </div>
//         </body>
//     </html>`;

fs.writeFile("managerInfo.html", managerTemplate, "utf8", (err) => {
	if (err) throw err;
	console.log("Successfully created document");
});
