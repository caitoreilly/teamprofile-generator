// import Employee constructor
const Employee = require("./Employee");

// create Intern constructor that extends Empployee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // return school name from user input
  getSchool() {
    return `${this.school}`;
  }

  // override the employee role and make it intern
  getRole() {
    return `Intern`;
  }
}

// export Intern object
module.exports = Intern;
