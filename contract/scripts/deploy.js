const { ethers } = require("hardhat");

async function main() {
    // Step 1: Deploy CredentialIssuerFactory
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the CredentialIssuerFactory
    const CredentialIssuerFactory = await ethers.getContractFactory("CredentialIssuerFactory");
    const factory = await CredentialIssuerFactory.deploy();
    console.log("CredentialIssuerFactory deployed to:", factory.address);

    // Step 2: Deploy a new CredentialIssuer contract using the factory
    console.log("\nDeploying a new CredentialIssuer contract...");

    const universityAddress = deployer.address; // For demonstration, using the deployer's address as the issuer
    const universityIssuerContract = await factory.createCredentialIssuer();
    console.log("New CredentialIssuer contract deployed at:", universityIssuerContract);

    // Step 3: Deploy a second CredentialIssuer contract (for another issuer, e.g., a company)
    const companyAddress = "0xYourCompanyAddressHere"; // Replace with an actual address
    const companyIssuerContract = await factory.createCredentialIssuer();
    console.log("New Company CredentialIssuer contract deployed at:", companyIssuerContract);

    // You can store contract addresses for future interaction or verification
    // Example: Interacting with the first issuer contract to issue a credential
    const credentialIssuer = await ethers.getContractAt("CredentialIssuer", universityIssuerContract);
    const studentAddress = "0xStudentAddressHere"; // Replace with the actual student's address

    // Issue a credential from the university to the student
    const credentialType = "Bachelor's Degree";
    await credentialIssuer.issueCredential(studentAddress, credentialType);
    console.log(`Issued a "${credentialType}" credential to student at address ${studentAddress}`);

    // Verify the credential
    const credentialId = ethers.utils.id(`${studentAddress}${credentialType}`);
    const isValid = await credentialIssuer.verifyCredential(credentialId);
    console.log(`Credential verification result: ${isValid ? "Valid" : "Invalid"}`);
}

// Run the deployment
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
