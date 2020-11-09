const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(school);
        this.school = school;
    }

    getRole() {
        return new Intern();
    }
}