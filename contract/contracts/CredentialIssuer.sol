// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CredentialIssuer {

    // Struct to represent a credential
    struct Credential {
        address recipient;      // Address of the credential recipient
        string credentialType;  // Type of credential (e.g., degree, certification, etc.)
        uint256 issueDate;      // Timestamp of when the credential was issued
        bool isRevoked;         // Whether the credential has been revoked
    }

    // Mapping to store issued credentials by their unique ID
    mapping(bytes32 => Credential) public credentials;

    // Address of the institution (the issuer)
    address public issuer;

    // Event to emit when a credential is issued
    event CredentialIssued(
        bytes32 indexed credentialId,
        address indexed recipient,
        string credentialType,
        uint256 issueDate
    );

    // Event to emit when a credential is revoked
    event CredentialRevoked(
        bytes32 indexed credentialId,
        address indexed recipient
    );

    // Modifier to restrict actions to only the issuer
    modifier onlyIssuer() {
        require(msg.sender == issuer, "Only the issuer can perform this action.");
        _;
    }

    // Constructor to set the issuer address
    constructor(address _issuer) {
        issuer = _issuer;
    }

    // Function to issue a credential
    function issueCredential(address _recipient, string memory _credentialType) external onlyIssuer {
        require(_recipient != address(0), "Invalid recipient address.");

        // Generate a unique ID for the credential (using keccak256 hash)
        bytes32 credentialId = keccak256(abi.encodePacked(_recipient, _credentialType, block.timestamp));

        // Ensure that the credential has not already been issued
        require(credentials[credentialId].recipient == address(0), "Credential already issued.");

        // Create and store the credential
        credentials[credentialId] = Credential({
            recipient: _recipient,
            credentialType: _credentialType,
            issueDate: block.timestamp,
            isRevoked: false
        });

        // Emit the CredentialIssued event
        emit CredentialIssued(credentialId, _recipient, _credentialType, block.timestamp);
    }

    // Function to revoke a credential
    function revokeCredential(bytes32 _credentialId) external onlyIssuer {
        require(credentials[_credentialId].recipient != address(0), "Credential does not exist.");
        require(!credentials[_credentialId].isRevoked, "Credential is already revoked.");

        // Revoke the credential
        credentials[_credentialId].isRevoked = true;

        // Emit the CredentialRevoked event
        emit CredentialRevoked(_credentialId, credentials[_credentialId].recipient);
    }

    // Function to verify if a credential is valid (not revoked)
    function verifyCredential(bytes32 _credentialId) external view returns (bool) {
        Credential memory cred = credentials[_credentialId];

        // Check if the credential exists and has not been revoked
        if (cred.recipient != address(0) && !cred.isRevoked) {
            return true;
        }

        return false;
    }

    // Function to get credential details by ID
    function getCredential(bytes32 _credentialId) external view returns (address, string memory, uint256, bool) {
        Credential memory cred = credentials[_credentialId];
        return (cred.recipient, cred.credentialType, cred.issueDate, cred.isRevoked);
    }
}
