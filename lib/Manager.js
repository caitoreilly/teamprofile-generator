// import Employee constructor
const Employee = require("./Employee");

// create Manager constructor that extends Empployee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // override the employee role and make it manager
  getRole() {
    return `Manager`;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

// export Manager object
module.exports = Manager;
