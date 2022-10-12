const Intern = require("../lib/Intern.js");
test("test engineer object", () => {
  const employee = new Intern(
    "Caitlin",
    "15",
    "coreilly@gmail.com",
    "Boston College"
  );
  expect(employee.school).toBe("Boston College");
  expect(employee.getSchool()).toBe("Boston College");
});
