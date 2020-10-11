const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Manager = require("../lib/Manager");

test("will test for Manager Instance", () => {
    const Manager = new Manager();
    expect(typeof (Manager)).toBe("object");
});

test("checking for name", () => {
    const name = Ted;
    const Manager = new Manager(name);
    expect(Manager.name).toBe("name");
});

test("checking for ID", () => {
    const id = value;
    const Manager = new Manager("boo, 1, id");
    expect(Manager.email).toBe("id");
});


test("checking for email", () => {
    const email = emailtest@test.com;
    const Manager = new Manager("boo, 1, email");
    expect(Manager.email).toBe("email");
});

test("checking for office", () => {
    const office = value;
    const Manager = new Manager("boo, 1, office");
    expect(Manager.office).toBe("office");
});