const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// aquestions array
const dataPrompt = () => {
   
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
    type: 'input',
    name: 'installInstruct',
    message: 'What are the instructions for installation?',
   
   },
   {
    type: 'confirm',
    name: 'confirmInstallSnip',
    message: 'Would you like to provide a code snippet example for installation?',
    default: false

   },
    {
        type:'input',
        name: 'installSnip',
        message: 'Enter code snipet here:',
        when: ({confirmInstallSnip}) => confirmInstallSnip

    },
   {
    type: 'input',
    name: 'usage',
    message: 'Give an example of usage :'   
   },
   {
    type: 'confirm',
    name: 'confirmUsageSnip',
    message: 'Would you like to provide a code snippet example for usage?',
    default: false
    },
    {
        type:'input',
        name: 'usageSnip',
        message: 'Enter code snipet here:',
        when: ({confirmUsageSnip}) => confirmUsageSnip
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
   message:'Enter an email to direct inqueries to:(Required)',
   validate: emailInput => {
    if (emailInput) {
        return true;
    }else{
        console.log('You must provide an email')
        return false;
     }
   }
   },
   {
    type:'input',
    name: 'github',
    message: 'and lastly, please provide a link to your GitHub profile:(Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        }else{
            console.log('You must provide a link to your GitHub')
            return false;
        }
    }  
   }
  

])

};
 // app init
const init = () =>{
    console.log(`
    ============================
    Lets create a quality README
    ============================
     
    `)
  dataPrompt()
.then(data => {fs.writeFile('README.md', generateMarkdown(data), err => {
    if (err) throw err;
  
    console.log('README complete! Check out README.md to see the output!');
  });})

}

init()