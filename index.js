// include packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/template.js");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const team = [];

// create series of questions to ask user for Manager info
const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team Manager's name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the manager's ID.",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the manager's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the manager's email address.",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter the manager's office number.",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter an office number!");
          return false;
        }
      },
    },
  ]);
};

// create series of questions to add other employees (engineer, intern, or finish building the team)
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is your employee's role?",
      choices: ["Engineer", "Intern"],
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please enter the employee's ID.",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter the employee's email address.",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter the employee's GitHub username.",
      // only if an engineer...
      when: ({ role }) => role === "Engineer",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the employee's GitHub username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Please enter the name of the intern's school.",
      // only if an intern...
      when: ({ role }) => role === "Intern",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmAddEmployee",
      message: "Would you like to add another employee?",
      default: false,
    },
  ]);
};
// create function to write the html file
// const writeFile
// create function to initialize the app

// call the function to initialize the app
function init() {
  addManager().then((managerInfo) => {
    console.log(managerInfo);
    const newEmployee = new Manager(
      managerInfo.name,
      managerInfo.id,
      managerInfo.email,
      managerInfo.officeNumber
    );
    team.push(newEmployee);
    console.log(team);
    promptEmployee();
  });
}

function promptEmployee() {
  addEmployee().then((employeeInfo) => {
    if (employeeInfo.confirmAddEmployee) {
      promptEmployee();
    }
  });
}

init();
// const caitlin = new Employee("caitlin", 15, "coreilly29@gmail.com");
// console.log(caitlin.name);
// console.log(caitlin.id);
// console.log(caitlin.email);
// console.log(caitlin.getName());
