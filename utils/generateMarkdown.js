// function to generate markdown for README
const fs = require('fs');

function generateMarkdown(data) {
  return `
  # ${data.title}
    
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ##Installation
    ${data.installInstruct}
  
  
  ## Usage
    ${data.usage}

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
