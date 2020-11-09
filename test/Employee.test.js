const { expect } = require("@jest/globals");
const Employee = require("../library/Employee");

describe("Employee class", () => {
	it("should accept a name", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.name).toEqual("Geoff Nix");
	});
	it("should accept a number", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.id).toEqual(1);
	});
	it("should accept an email", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.email).toEqual("nicewithands@gmail.com");
	});
	it("getName function should return name", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.getName()).toEqual("Geoff Nix");
	});
	it("getId function should return Id", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.getId()).toEqual(1);
	});
	it("getEmail function should return email", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.getEmail()).toEqual("nicewithands@gmail.com");
	});
	it("getRole function should return Employee object", () => {
		const worker = new Employee("Geoff Nix", 1, "nicewithands@gmail.com");
		expect(worker.getRole()).toEqual("Employee");
	});
});
