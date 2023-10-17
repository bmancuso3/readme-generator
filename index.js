// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Hello, what is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter project desription:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Describe your installation instructions:',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Do you have any usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Input your test instructions:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please choose a license:',
        name: 'license',
        choices: ['license1', 'license2', 'license3', 'license4'],
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter any other contact or communication preferences:',
        name: 'contact',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {

};

// Function call to initialize app
init();
