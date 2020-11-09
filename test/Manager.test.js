const Manager = require("../library/Manager");

describe("Manager class", () => {
    xit("Should return the office phone number", () => {
        const manager = new Manager("Mavis Davis", 2, "mdavis@gmail.com", 2126783209);
        expect(manager().officeNumber).toEqual(2126783209);
    })
    xit("Should return the Manager object", () => {
        const manager = new Manager("Mavis Davis", 2, "mdavis@gmail.com", 2126783209);
        expect(manger().getRole()).toEqual(manager); 
    })
})