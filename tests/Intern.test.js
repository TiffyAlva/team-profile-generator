const Intern = require("../lib/Intern") //

test("Create school", () => {
    const testValue = "coding bootcamp";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Testing role", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "coding bootcamp");
    expect(e.getRole()).toBe(testValue);
});

test("Testing getSchool()", () => {
    const testValue = "coding bootcamp";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue)
});