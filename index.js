const inquirer = require('inquirer');
const fs = require('fs');

//create a generate markdown function
const generateMarkdown = (answers) => 
`






`
inquirer.prompt([
    { 
        type: 'input',
        name: 'Project Title',
        message: 'What is your project title?'
    },
    { 
        type: 'input',
        name: 'Description',
        message: 'What is the project about, why did you created it, and how to use it.?'
    },
    { 
        type: 'input',
        name: 'Table of contents',
        message: 'Table of contents'
    },
    { 
        type: 'input',
        name: 'Installation',
        message: 'What does the user needs to install to run this app (ie..dependencies, etc?'
    },
    { 
        type: 'input',
        name: 'Usage',
        message: 'How to use the app? Give instructions'
    },
    { 
        type: 'input',
        name: 'License',
        message: 'What license is being used? (ie..MIT)'
    },
    { 
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed to this project? (ie..third-party assets, tutorials, etc.'
    },
    { 
        type: 'input',
        name: 'Test',
        message: 'What commands are needed to test this app?'
    },
    { 
        type: 'input',
        name: 'Questions',
        message: 'What is your Github profile?'
    },
])
