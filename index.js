// Imported packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown')

// Question array
const questions = [
    {
        type: 'input',
        message: 'Hello, what is the title of your project?',
        name: 'title',
    },
    // {
    //     type: 'input',
    //     message: 'Enter project desription:',
    //     name: 'description',
    // },
    // {
    //     type: 'input',
    //     message: 'Describe your installation instructions:',
    //     name: 'instructions',
    // },
    // {
    //     type: 'input',
    //     message: 'Do you have any usage information?',
    //     name: 'usage',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter your contribution guidelines:',
    //     name: 'contributing',
    // },
    // {
    //     type: 'input',
    //     message: 'Input your test instructions:',
    //     name: 'tests',
    // },
    // {
    //     type: 'list',
    //     message: 'Please choose a license:',
    //     name: 'license',
    //     choices: ['None', 'MIT', 'Apache 2.0', 'Mozilla', 'GNU'],
    // },
    // {
    //     type: 'input',
    //     message: 'Enter your github username:',
    //     name: 'github',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter your email address:',
    //     name: 'email',
    // },
    // {
    //     type: 'input',
    //     message: 'Please enter any other contact or communication preferences:',
    //     name: 'contact',
    // },
];

// Function to import generateMarkdown and run answers through it
function writeToFile(fileName, answers) {
    // console.log('writetofile', answers);
    const markdownContent = genMarkdown.generateMarkdown(answers);
    // console.log('markdown', markdownContent);

// Writes markdowncontent to file and logs necessary result
    fs.writeFile(fileName, markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully generated genREADME.md!')
    );
};

// Function to initialize the questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            // console.log('init', answers);
            writeToFile('genREADME.md', answers);
        });
};

// Function call to initialize app
init();