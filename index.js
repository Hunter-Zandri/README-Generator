const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        message: 'What is your name?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Describe your project',
        type: 'input',
        name: 'description'
    },
    {
        message: 'Installation instructions:',
        default: 'npm i',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'Usage information: ',
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
    let license;
    let link;
    switch (data.license) {

        case 'ISC': 
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue)](https://opensource.org/licenses/ISC)';
        link = 'https://opensource.org/licenses/ISC'
            break;
        case 'MIT':
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)';
        link = 'https://opensource.org/licenses/MIT'
            break;
        case 'GPL': 
        license = '[![License: GPL](https://img.shields.io/badge/License-GPL-blue)](https://opensource.org/licenses/AGPL-3.0)';
        link = 'https://opensource.org/licenses/AGPL-3.0'
            break;
        default:
            license = '';
            break;
    }
    const string = `
    
# ${data.title}
${license}
## Description
${data.description}
## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [Video](#video)
## Installation Instructions
\`\`\`
${data.installation}
\`\`\`
## Usage Information
${data.usage}
## Contribution Guidelines
${data.contribution}
## Test Instructions
\`\`\`
${data.test}
\`\`\`
## License
This project is licensed under the terms of the [${data.license}](${link}) license
## Questions
My Github Profile: [${data.github}](https://github.com/${data.github})
Email me your questions at: [${data.email}](mailto:${data.email})
## Video
Watch this for a guide on this project: [Video]()
`


    fs.writeFile("README.md",  string, (err) =>
    err? console.error(err) : console.log("created!")
)
})