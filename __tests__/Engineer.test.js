const Engineer = require("../lib/Engineer") //

test("Create GitHub", () => {
    const testValue = "github";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Testing role", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "github");
    expect(e.getRole()).toBe(testValue);
});

test("Testing getGithub()", () => {
    const testValue = "github";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});