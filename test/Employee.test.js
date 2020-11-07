const Employee = require("../library/Employee");

describe("Employee", () => {
	describe("Initialization", () => {
		it("Should accept a name", () => {
			expect(new Employee("Geoff Nix").name).toEqual("Geoff Nix");
		});
	});
});
