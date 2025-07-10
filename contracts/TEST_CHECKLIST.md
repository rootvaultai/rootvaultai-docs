# RootVaultAI — CapsuleRegistry.sol Test Checklist (Base Goerli)

##  Core Logic

- [ ] `mintCapsule(domain, metadataURI, hash, signature)` works with valid wallet signature
- [ ] Blocks unauthorized mints (invalid signature or replay)
- [ ] Prevents duplicate Capsule for same domain
- [ ] `grantDelegation()` grants permission with expiry
- [ ] Delegated wallet can mint within expiry window
- [ ] Unauthorized wallet cannot mint
- [ ] `revokeCapsule()` removes Capsule, frees domain
- [ ] `updateCapsule()` updates metadata URI and version
- [ ] IPFS/Arweave hash is stored or emitted with metadata
- [ ] All relevant events emit correctly:
  - [ ] CapsuleMinted
  - [ ] CapsuleUpdated
  - [ ] CapsuleRevoked

##  Trust Infrastructure

- [ ] DNS TXT record check logic (or Chainlink stub) is in place
- [ ] Trust score hook (optional) is callable or mappable
- [ ] Delegation cannot be forged or extended past expiry

##  Agent & Frontend Ready

- [ ] ABI generated and exported
- [ ] Read functions tested via ethers.js or scripts
- [ ] Contract is Etherscan/Basescan verified

##  Deployment Readiness

- [ ] Deploys on Base Goerli with no errors
- [ ] Gas usage is reasonable (< 600K for mintCapsule)
- [ ] `.env` and `scripts/deploy.js` function as expected
