const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
       super(name, id, email)
       this.OfficeNumber = OfficeNumber;    
    }

       getTitle() {
        return "Manager";
    }
      
        getGithub() {
        return this.OfficeNumber;
    }
}

module.exports = Manager;