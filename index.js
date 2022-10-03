// include packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const template = require("./src/template.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// create series of questions to ask user 
const promptUser = () => {
    return inquirer.prompt([{
        type: 
    }])
}