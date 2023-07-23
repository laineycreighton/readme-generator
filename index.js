// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title.',
        default: 'Project Title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information for your project?',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter the contributions for your project.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions for your project.',
        default: 'N/A'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
