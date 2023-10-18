// Imported packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// const import = require('./utils/generateMarkdown.js');

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
    //     choices: ['license1', 'license2', 'license3', 'license4'],
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

// TODO: Create a function to write README file
// call in fs to create the file and place the data inside
// needs to import the generatemarkdown file and **call the functions within**
function writeToFile(fileName, answers) {
    console.log('writetofile', answers);
    const markdownContent = generateMarkdown(answers);
    console.log('markdown', markdownContent);
    // fs.writeFile('genREADME.md', JSON.stringify(answers), (err) =>
    // err ? console.log(err) : console.log('Successfully generated genREADME.md!')
    // );
};

// Function to initialize the questions for user
function init() {
    inquirer
        .prompt (questions)
        .then ((answers) => {
            console.log('init', answers);
            writeToFile('genREADME.md', answers);
        });
};

// Function call to initialize app
init();


// path
// init, write to file, gen markdown, render license section -> badge & link