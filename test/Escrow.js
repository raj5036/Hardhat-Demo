const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers")
const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("EscrowContract", () => {
	const INITIAL_AMOUNT = ethers.parseEther("1.0")
	async function deployContract() {
		const Escrow  = await ethers.getContractFactory("Escrow")
		const escrow = await Escrow.deploy({
			value: INITIAL_AMOUNT
		})
		
		const [owner] = await ethers.getSigners()
		console.log('Signer 1 address: ', owner.address)

		return { escrow, owner }
	}

	describe("Should deploy Escrow Contract", async () => {
		
		it("Should set correct owner", async () => {
			const { escrow, owner } = await loadFixture(deployContract)
			expect(await escrow.owner()).to.be.equal(owner.address)
		})
		
		it("Should set correct balance", async () => {
			const { escrow } = await loadFixture(deployContract)
			expect(await escrow.funds()).to.be.equal(INITIAL_AMOUNT)
		})
	})
})