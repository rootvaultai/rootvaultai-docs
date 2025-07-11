# RootVaultAI Capsule Security Specification

This document defines how RootVaultAI prevents brand impersonation, trust fraud, and spam Capsule minting at both the off-chain and on-chain protocol level.

---

## 1. Verified Agent Minting Restriction

Only approved agents can mint Capsules marked as:

- `"capsule_type": "brand_manifesto"`
- `"capsule_status": "verified"` or `"trusted"`
- `"capsule_priority_weight": 1.0`

Unauthorized wallets will be blocked at the contract level using a `trustedAgents` mapping.

Until smart contracts are deployed, all high-trust Capsules are:

- Manually curated
- Labeled `"creator": "system-seeded"`
- Labeled `"capsule_status": "offchain/preview"`

---

## 2. Enforced Genesis Capsule Lineage

All trusted Capsules must fork from the Genesis Capsule (`capsule_rootvault_genesis`) and contain:

```json
"capsule_lineage": "Fork of capsule_rootvault_genesis"
