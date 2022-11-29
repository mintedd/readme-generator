// TODO: Include packages needed for this application
// which was npm inquirer 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
];
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'project',
            message: `What is your project's name?`,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Pleas write a short description of your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [`MIT`, `Apache 2.0`, `GPL 3.0`, `BSD 3`, `None`]
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run test?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    //put everything in the questions array OR put all of the inquirer.prompt directly into init
    inquirer.prompt(questions)
}

// Function call to initialize app
init();


//What is your Github username?
//What is your email address?
//What is your project's name?
//Pleas write a short description of your project
//What kind of license should your project have?
    //arrow pick option
    // MIT
    // Apache 2.0
    // GPL 3.0
    // BSD 3
    // None
//What command should be run to install dependencies? npm install
//What command should be run to run test? -- n,p run test
//What does user need to know about using the repo? - read the repo
//What does the user need to know avout contributing to the repo? -ask before 