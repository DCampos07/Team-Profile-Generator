const { test, expect } = require("@jest/globals");
const { Instance } = require("chalk");
const Employee = require("../lib/Employee");

test("will test for employee Instance", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("checking for name", () => {
    const name = Ted;
    const employee = new Employee(name);
    expect(employee.name).toBe("name");
});

test("checking for ID", () => {
    const id = value;
    const employee = new Employee("boo, 1, id");
    expect(employee.email).toBe("id");
});


test("checking for email", () => {
    const email = emailtest@test.com;
    const employee = new Employee("boo, 1, email");
    expect(employee.email).toBe("email");
});

test("checking for office", () => {
    const office = value;
    const employee = new Employee("boo, 1, office");
    expect(employee.office).toBe("office");
});