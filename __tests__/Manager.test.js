const Manager = require("../lib/Manager.js");
test("test engineer object", () => {
  const employee = new Manager(
    "Caitlin",
    "15",
    "coreilly@gmail.com",
    "200"
  );
  expect(employee.officeNumber).toBe("200");
  expect(employee.getOfficeNumber()).toBe("200");
});