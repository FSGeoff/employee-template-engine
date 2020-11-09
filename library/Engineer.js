const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super(name, id, email, githubUserName);
        this.githubUserName = githubUserName;
    }
    getRole() {
        return new Engineer();
    }
}