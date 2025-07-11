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

---

## 3. Trust Score Control & Spoof Protection

Capsules that are forked from Genesis but lack verification over time will gradually lose trust weight.

The following rules apply:

- If `capsule_status` is not `"verified"`, `"trusted"`, or `"preview"` → trust score = 0
- If a Capsule is missing a `capsule_lineage` or it points to an unknown capsule → score = 0
- If a Capsule is older than 6 months and lacks fresh metadata → score = 0
- If `creator` is `"anonymous"` or not part of trustedAgents list → score = 0

This prevents abandoned or spoofed Capsules from staying valid.

Off-chain trust scoring (before contracts are live) will check all of the above and hide stale Capsules from agent indexing or display.

Smart contracts will include logic for:

```solidity
if (
    capsule.age > 180 days &&
    !capsule.isRefreshed &&
    !trustedAgents[capsule.creator]
) {
    return 0; // no trust score
}
