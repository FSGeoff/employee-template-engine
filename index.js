const fs = require("fs");
const inquirer = require("inquirer");

inquirer
	.prompt([
		{
			type: "input",
			message: "What is the title of your README.md?",
			name: "title",
        }
        
        // The application will prompt the 
        // user for information about the 
        // team manager and then information 
        // about the team members. The user 
        // an input any number of team members, 
        // and they may be a mix of engineers 
        // and interns.