// import Employee constructor
const Employee = require("./Employee");

// create Enginerr constructor that extends Empployee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // return github username from user input
  getGitHub() {
    return this.github;
  }

  // override the employee role and make it engineer
  getRole() {
    return `Engineer`;
  }
}

// export Engineer object
module.exports = Engineer;
