// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        default: 'N/A'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error writing to file: ', err);
        } else {
            console.log('README.md successfully generated as ${fileName}')
        }
    });
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(JSON.stringify(answers));
            writeToFile('README.md', readmeContent);
            console.log('Project Title: ', JSON.stringify(answers.projectTitle));
            console.log('Description: ', JSON.stringify(answers.description));
            console.log('Installation: ', JSON.stringify(answers.installation));
            console.log('Usage Information: ', JSON.stringify(answers.usageInfo));
            console.log('Contributions: ', JSON.stringify(answers.contributions));
            console.log('Test Instructions: ', JSON.stringify(answers.test));
        })
        .catch((error) => {
            console.error('Error occured while prompting questions:', error);
        });
}

// Function call to initialize app
init();
