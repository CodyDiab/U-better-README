const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const dataPrompt = () => {
    // console.log(`
    // ============================
    // Lets create a quality README
    // ============================
    
    // `),
    return inquirer.prompt([
  
   {
   type: 'input',
   name: 'title',
   message: 'What is the title of the project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        }else{
            console.log('Your README needs a project title')
            return false;
        }
    }
   },
   {
    type: 'input',
    name:'description',
    message: 'Lets get a descriptiom of the project(Required)',
     validate: descriptionInput => {
         if (descriptionInput) {
             return true;
         }else{
             console.log('Your project needs a description')
             return false;
         }
     }
   },
   {
    type: 'confirm',
    name: 'confirmIntallInstruct',
    message: 'Would you like to give instructions for installation?',
    default: false

   },
   {
    type: 'input',
    name: 'installInstruct',
    message: 'What are the instructions for installation?',
    when: ({confirmInstallInstruct}) => confirmInstallInstruct
   },
   {
    type: 'input',
    name: 'usage',
    message: 'Give an example of usage :'   
   },
   {
    type: 'list',
    name: 'license',
    message: 'Pick a license that applies to your project (Default: No License) ',
    default: 'No License',
    choices: ['GNU AGPlv3','GNU GPLv3','GNU LGPLv3','Mozzilla Public 2.0','Apache 2.0','MIT','Boost Software 1.0','The Unlicense','No License']
   },
   {
    type:'input',
    name: 'contribute',
    message: 'How would you like to handle contributors? :'
   },
   {
    type: 'input',
    name: 'test', 
    message: 'Give some testing instructionsfor you project:'
   },
   {
   type: 'input',
   name: 'email',
   message:'Enter an email to direct inqueries to:(Required)'
   },
   {
    type:'input',
    name: 'github',
    message: 'and, please provide a link to your GitHub profile:(Required)'  
   }
  


])

};
// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();

dataPrompt()
.then(data => {console.log(data)})