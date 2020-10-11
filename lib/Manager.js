import Employee from "./Employee.js";

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
       super(name, id, email)
       this.OfficeNumber = OfficeNumber
    }

    getTitle() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.OfficeNumber;
    }
}

export default Manager;