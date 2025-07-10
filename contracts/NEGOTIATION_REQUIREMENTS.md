# RootVaultAI — `NegotiationCapsule.sol` Specification

This contract enables autonomous agents, smart wallets, or services to propose, sign, and anchor verifiable on-chain agreements.

---

##  Objective

To allow two or more entities to negotiate and finalize terms in a transparent, cryptographically signed Capsule of agreement.

---

##  Struct

```solidity
struct Agreement {
  address initiator;
  address counterparty;
  bytes32 termsHash;           // Off-chain terms (e.g. IPFS hash or plaintext hashed)
  string metadataURI;          // Optional: IPFS or Arweave full document
  bool signedByInitiator;
  bool signedByCounterparty;
  bool finalized;
  uint256 createdAt;
}
