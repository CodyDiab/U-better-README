// function to generate markdown for README
const fs = require('fs');

const licenseBadge = licenseAnswer => {
  if (licenseAnswer == 'No License') {
    return '';}
    return 
    `![Badge](https://img.shields.io/badge/license-${licenseAnswer.replace(" ", "_")}-yellowgreen)
   
    `;
}
const snipCode = (answer,response) => {
  if (answer){
    return `
       
       ${response}

       
    `;
  }
}


function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Badge](https://img.shields.io/badge/license-${data.license.replace(" ", "_")}-yellowgreen)
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installInstruct}
  ${snipCode(data.confirmInstallSnip,data.installSnip)}
  ## Usage
  ${data.usage}
  ${snipCode(data.confirmUsageSnip,data.usageSnip)}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  [Email](${data.email})

  [GitHub](${data.github})
`;
};





module.exports = generateMarkdown;
