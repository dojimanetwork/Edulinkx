const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CredentialIssuerFactory", function () {
    let factory, credentialIssuer, deployer;

    before(async () => {
        [deployer] = await ethers.getSigners();

        // Deploy the factory contract
        const CredentialIssuerFactory = await ethers.getContractFactory("CredentialIssuerFactory");
        factory = await CredentialIssuerFactory.deploy();

        // Deploy a new CredentialIssuer contract through the factory
        const tx = await factory.createCredentialIssuer();
        const receipt = await tx.wait();
        const event = receipt.events.find(event => event.event === "CredentialIssuerCreated");
        const issuerContractAddress = event.args.contractAddress;

        // Get the deployed CredentialIssuer contract instance
        credentialIssuer = await ethers.getContractAt("CredentialIssuer", issuerContractAddress);
    });

    it("should deploy CredentialIssuerFactory contract", async function () {
        expect(factory.address).to.be.properAddress;
    });

    it("should create a new CredentialIssuer contract", async function () {
        expect(credentialIssuer.address).to.be.properAddress;
    });

    it("should issue a credential and verify it", async function () {
        const studentAddress = "0xYourStudentAddressHere"; // Replace with actual student address
        const credentialType = "Bachelor's Degree";

        // Issue a credential
        await credentialIssuer.issueCredential(studentAddress, credentialType);
        const credentialId = ethers.utils.id(`${studentAddress}${credentialType}`);

        // Verify the credential
        const isValid = await credentialIssuer.verifyCredential(credentialId);
        expect(isValid).to.equal(true);
    });
});
