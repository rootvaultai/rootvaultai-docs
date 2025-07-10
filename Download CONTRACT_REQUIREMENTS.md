# RootVaultAI: CapsuleRegistry.sol Contract Requirements

This document outlines the complete specifications for implementing the CapsuleRegistry.sol smart contract. It is designed to achieve a 100/100 trust score based on verifiability, revocability, DNS validation, and tamper-proof auditability.

---

## ✅ Required Features

### 1. Minting Logic
- [ ] `mintCapsule(domain, metadataURI, hash, signature)`
- [ ] Signature validation using `ECDSA.recover()`
- [ ] One Capsule per domain enforced (`mapping(string => address) domainUsed`)

### 2. Delegation
- [ ] `grantDelegation(address delegatee, uint256 expires)`
- [ ] Enforce delegation expiry and restrict access to delegated wallet only

### 3. Revocation & Update
- [ ] `revokeCapsule()` to delete a Capsule and free the domain
- [ ] `updateCapsule(metadataURI)` to allow metadata changes
- [ ] Version tracking using `uint version` or an array of IPFS hashes

### 4. DNS Verification (Chainlink)
- [ ] Chainlink Functions integration to fetch DNS TXT record at `_rootvaultai.domain.com`
- [ ] Compare the value to the signer’s wallet address
- [ ] Reject mint if no match or TXT not found

### 5. Audit Trail Anchoring
- [ ] Store IPFS/Arweave hash on each mint/update
- [ ] Optionally store history of hashes for verification

### 6. Trust Score Hook (Optional)
- [ ] `mapping(address => uint256) trustScore`
- [ ] External/off-chain update or scoreCapsule() method

### 7. Event Logging
- [ ] `event CapsuleMinted(address signer, string domain)`
- [ ] `event CapsuleUpdated(address signer, string metadataURI)`
- [ ] `event CapsuleRevoked(address signer)`

---

## 📌 Deliverables
- Final `CapsuleRegistry.sol` with all above features
- Verified testnet deployment (Base Goerli preferred)
- Contract address + ABI file
- Source verified on Etherscan/Basescan
- Basic instructions to test `mintCapsule`, `grantDelegation`, `revokeCapsule`

