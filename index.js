const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter your installation instructions:',
        default: 'npm i',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter your usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter your contribution guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter your test instructions: ',
        default: 'node index.js',
        name: 'test'
    },
    {
        type: 'list',
      choices:['ISC','MIT', 'Apache 2.0', 'Boost 1.0', 'None'],
      message: 'What license are you using?',
      name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your github username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email: ',
        name: 'email',
    },
]).then((data) => {
    let license;
    let link;
    switch (data.license) {
