const Intern = require("../library/Intern");

describe("Intern class", () => {
	it("Should return the school name", () => {
		const intern = new Intern("Sally Student", 7, "sally@edu.com", "NYU");
		expect(intern.school).toEqual("NYU");
	});
	it("Should return the Intern object", () => {
		const intern = new Intern("Sally Student", 7, "sally@edu.com", "NYU");
		expect(intern.getRole()).toEqual(
			"Sally Student",
			7,
			"sally@edu.com",
			"NYU"
		);
	});
});
