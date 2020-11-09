const { expect } = require("@jest/globals");
const Engineer = require("../library/Engineer");

describe("Engineer class", () => {
	it("Should accept the github username", () => {
		const engineer = new Engineer(
			"Jim Brown",
			5,
			"Jim@gmail.com",
			"codingJim"
		);
		expect(engineer.githubUserName).toEqual("codingJim");
	});
	it("Should return the engineer object", () => {
		const engineer = new Engineer(
			"Jim Brown",
			5,
			"Jim@gmail.com",
			"codingJim"
		);
		expect(engineer.getRole()).toEqual(
			"Jim Brown",
			5,
			"Jim@gmail.com",
			"codingJim"
		);
	});
});
