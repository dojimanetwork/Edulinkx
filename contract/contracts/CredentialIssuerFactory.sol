// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CredentialIssuer.sol";

contract CredentialIssuerFactory {

    // Mapping to store all deployed CredentialIssuer contracts by issuer address
    mapping(address => address[]) public issuerContracts;

    // Event to log when a new CredentialIssuer contract is created
    event CredentialIssuerCreated(address indexed issuer, address contractAddress);

    // Function to create a new CredentialIssuer contract for an issuer
    function createCredentialIssuer() external returns (address) {
        // Create a new CredentialIssuer contract for the sender (the issuer)
        CredentialIssuer newIssuer = new CredentialIssuer(msg.sender);

        // Store the new contract in the issuerContracts mapping
        issuerContracts[msg.sender].push(address(newIssuer));

        // Emit an event for the creation of a new CredentialIssuer
        emit CredentialIssuerCreated(msg.sender, address(newIssuer));

        // Return the address of the newly created contract
        return address(newIssuer);
    }

    // Function to get all contracts deployed by a specific issuer
    function getIssuerContracts(address _issuer) external view returns (address[] memory) {
        return issuerContracts[_issuer];
    }

    // Function to interact with a specific CredentialIssuer contract for verification
    function verifyCredential(address _issuerContract, bytes32 _credentialId) external view returns (bool) {
        return CredentialIssuer(_issuerContract).verifyCredential(_credentialId);
    }
}
