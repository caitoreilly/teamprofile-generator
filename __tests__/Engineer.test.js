const Engineer = require("../lib/Engineer.js");
test("test engineer object", () => {
  const employee = new Engineer("Caitlin", "15", "coreilly@gmail.com", "caitoreilly");
  expect(employee.github).toBe("caitoreilly");
  expect(employee.getGitHub()).toBe("caitoreilly");
});