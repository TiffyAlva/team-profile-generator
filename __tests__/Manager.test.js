const Manager = require("../lib/Manager"); //
const Employee = require("../lib/Employee");

test("Create office number", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Testing role", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
});

test("Testing getOffice", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});