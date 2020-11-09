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

		expect(engineer.getRole()).toEqual("Engineer");
	});
	it("should throw an error", () => {
		const engineer = new Engineer("Tom", "Tom@email.com", "github");
		expect(engineer).toThrowError(new Error("Missing id"));
	});
});
