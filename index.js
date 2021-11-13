const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        message: 'What is your project title?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Enter your description: ',
        type: 'input',
        name: 'description'
    },
    {
        message: 'Enter your installation instructions:',
        default: 'npm i',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'Enter your usage information: ',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'Enter your contribution guidelines: ',
        type: 'input',
        name: 'contribution'
    },
    {
        message: 'Enter your test instructions: ',
        default: 'node index.js',
        type: 'input',
        name: 'test'
    },
    {
        type: 'list',
        choices:['ISC','MIT', 'Apache 2.0', 'Boost 1.0', 'None'],
        message: 'What license are you using?',
        name: 'license',
    },
    {
        message: 'Enter your github username: ',
        type: 'input',
        name: 'github'
    },
    {
        message: 'Enter your email: ',
        type: 'input',
        name: 'email',
    },
]).then((data) => {
    const string = `
    
# ${data.title}
${license}
## Description
${data.description}
\
`
    fs.writeFile("README.md",  string, (err) =>
    err? console.error(err) : console.log("created!")
)
})