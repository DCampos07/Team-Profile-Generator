const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Intern = require("../lib/Intern");

test("will test for Intern Instance", () => {
    const Intern = new Intern();
    expect(typeof (Intern)).toBe("object");
});

test("checking for name", () => {
    const name = Ted;
    const Intern = new Intern(name);
    expect(Intern.name).toBe("name");
});

test("checking for ID", () => {
    const id = value;
    const Intern = new Intern("boo, 1, id");
    expect(Intern.email).toBe("id");
});


test("checking for email", () => {
    const email = emailtest@test.com;
    const Intern = new Intern("boo, 1, email");
    expect(Intern.email).toBe("email");
});

test("checking for office", () => {
    const office = value;
    const Intern = new Intern("boo, 1, office");
    expect(Intern.office).toBe("office");
});