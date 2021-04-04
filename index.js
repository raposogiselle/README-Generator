const inquirer = require('inquirer');
const fs = require('fs');

//create a generate markdown function
const generateMarkdown = (answers) => 
`
# ${answers.Title}
https://github.com/${answers.Username}/${answers.Title}

## Description:
${answers.Description}

## Table of Contents
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributors](#contributors)
*[Test](#test)
*[Questions](#questions)

## Installation 
The following necessary dependecies must be installed before running this app.
${answers.Installation}

## Usage 
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
    ![alt text](images.jpg)
    
${answers.Usage}

## License:

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributors:
${answers.Contributors}

## Test:
${answers.Test}

## Questions:
Please contact me

${answers.Username}
${answers.Email}
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
        name: 'Username',
        message: 'What is your Github username?'
    },
    { 
        type: 'input',
        name: 'Email',
        message: 'What is your email?'
    },
])
.then((answers) => {
    console.log(answers)
    const newREADMEfile = generateMarkdown(answers);

    fs.writeFile('README.md', newREADMEfile, (err) => 
        err ? console.log(err) : console.log('File successfully created')
    );
 });
