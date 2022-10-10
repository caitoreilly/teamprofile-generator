// create Employee constructor
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // return name, id, email, and role from user input
  getName() {
    return `${this.name}`;
  }

  getId() {
    return `${this.id}`;
  }

  getEmail() {
    return `${this.email}`;
  }

  getRole() {
    return `Employee`;
  }
}

// export Employee object
module.exports = Employee;
