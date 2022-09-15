const Employee = require("../lib/Employee") //

Test("Create a new employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object"); 
});

test("Testing name", () => {
    const name = "Jane";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Testing ID", ()=> {
    const testValue = 100;
    const e = new Employee("Foo, testValue");
    expect(e.id).toBe(testValue);
});

test("Testing email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo, 1, testValue");
    expect(e.email).toBe(testValue);
});

test("Get name via getName()", () => {
    const testValue = "Jane";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Get ID via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Testing role", () => {
    const testValue = "Employee";
    const e = new Employee("Jane, 1, test@test.com");
    expect(e.getRole()).toBe(testValue);
});
