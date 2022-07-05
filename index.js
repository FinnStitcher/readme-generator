const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project."
    },
	{
		type: "input",
		name: "description",
		message: "Enter a description of your project.",
	},
	{
		type: "input",
		name: "install",
		message: "Describe how to install the project.",
	},
    {
        type: "list",
        name: "license",
        message: "Select the license you want to release your project under.",
        choices: [
            "Apache 2.0",
            "CC0 1.0",
            "CC Attribution 4.0",
            "CC Attribution-NonCommercial 4.0",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "ISC License",
            "MIT License",
            "ODC Attribution License",
            "Open Database License"
        ]
    },
    {
        type: "input",
        name: "use",
        message: "Provide any information about using this program that you wish to share."
    },
    {
        type: "input",
        name: "contribute",
        message: "Provide contribution guidelines."
    },
    {
        type: "input",
        name: "test",
        message: "Describe how to test this program after installing it."
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username. This will be displayed in a 'Contact Me' section."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address. This will be displayed in a 'Contact Me' section."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.error(err)
            return;
        };

        console.log("File created. Look in the dist folder to see it.");
    })
};

// TODO: Create a function to initialize app
function init() {
	console.log(
		"Welcome to the README Generator. In the following prompts, type '\\n' anywhere you want a linebreak in the final product."
	);
    
    inquirer.prompt(questions)
    .then(data => generateMarkdown(data))
    .then(markdown => writeToFile("README", markdown));
}

// Function call to initialize app
init();
