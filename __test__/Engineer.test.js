const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Engineer = require("../lib/Engineer");

test("will test for Engineer Instance", () => {
    const Engineer = new Engineer();
    expect(typeof (Engineer)).toBe("object");
});

test("checking for name", () => {
    const name = Ted;
    const Engineer = new Engineer(name);
    expect(Engineer.name).toBe("name");
});

test("checking for ID", () => {
    const id = value;
    const Engineer = new Engineer("boo, 1, id");
    expect(Engineer.email).toBe("id");
});


test("checking for email", () => {
    const email = emailtest@test.com;
    const Engineer = new Engineer("boo, 1, email");
    expect(Engineer.email).toBe("email");
});

test("checking for office", () => {
    const office = value;
    const Engineer = new Engineer("boo, 1, office");
    expect(Engineer.office).toBe("office");
});