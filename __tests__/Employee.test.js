const Employee = require("../lib/Employee.js");
test ("test employee object", () => {
    const employee = new Employee("Caitlin", "15", "coreilly@gmail.com");
    expect(employee.name).toBe("Caitlin");
    expect(employee.id).toBe("15");
    expect(employee.email).toBe("coreilly@gmail.com");
    expect(employee.getName()).toBe("Caitlin");
    expect(employee.getId()).toBe("15");
    expect(employee.getEmail()).toBe("coreilly@gmail.com");
    expect(typeof(employee)).toBe("object");
})

