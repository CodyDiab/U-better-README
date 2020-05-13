// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    ${data.description}
  ##Installation
    ${data.installInstruct}
  
  
  ## Usage
    ${data.usage}
  ## Contributing
    ${data.contribute}
  ## Tests

  ## Questions
  // link to git hub
  // user email
`;
}

module.exports = generateMarkdown;
