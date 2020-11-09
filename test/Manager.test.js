const Manager = require("../library/Manager");

describe("Manager class", () => {
	it("Should return the office phone number", () => {
		const manager = new Manager(
			"Mavis Davis",
			2,
			"mdavis@gmail.com",
			2126783209
		);
		expect(manager.officeNumber).toEqual(2126783209);
	});
	it("Should return the Manager object", () => {
		const manager = new Manager(
			"Mavis Davis",
			2,
			"mdavis@gmail.com",
			2126783209
		);
		expect(manger.getRole()).toEqual("Manager");
	});
});
