const { expect } = require("chai");

describe("Counter", function () {
	const INITIAL_COUNT = 25;
	describe("Deployment", function () {
		it("Should set the right count", async function () {
			const Counter = await ethers.getContractFactory("Counter");
			const counter = await Counter.deploy(INITIAL_COUNT);
			expect(await counter.count()).to.equal(INITIAL_COUNT);
		});
	});
})