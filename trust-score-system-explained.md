
# RootVaultAI Trust Score System Explained

The RootVaultAI Trust Score is a 1,000-point system used to evaluate the authenticity, integrity, and utility of each Capsule in the protocol. It rewards proper forking, verifiable identity, agent usage, and more.

---

## 🎯 Purpose of the Trust Score

- Determine which Capsules show up in search results
- Prioritize verifiable, useful, agent-backed Capsules
- Discourage spam, clones, and misrepresented identities

---

## 🔢 Trust Score Components (Total: 1,000 Points)

| Factor | Description | Max Points |
|--------|-------------|------------|
| **Lineage Ancestry** | Is the Capsule a fork of the Genesis Capsule? | 350 pts |
| **Signed Capsule** | Is the Capsule cryptographically signed by the creator? | 150 pts |
| **Proof Reference** | Is there a proof link (IPFS, contract, doc)? | 100 pts |
| **Agent Usage** | Is this Capsule used by an active agent? | 100 pts |
| **Identity Match** | Does metadata match agent behavior? | 80 pts |
| **Fork Integrity** | Was the Capsule properly forked and attributed? | 80 pts |
| **Indexed in Explorer** | Is it included in the RootVault Capsule Index? | 50 pts |
| **IPFS Availability** | Is the CID retrievable from IPFS? | 40 pts |
| **Penalty Deductions** | Missing fields, clone spam, or unverifiable content | -100 pts |

---

## ✅ Example Capsule Scores

**Capsule A: Trusted Fork**
- Forked from Genesis ✔  
- Signed ✔  
- Agent Active ✔  
- Proof Attached ✔  
- No penalties  

**Score: 920 / 1000**

---

**Capsule B: Weak Metadata**
- No signature  
- No proof  
- Not used by agent  

**Score: 470 / 1000**

---

**Capsule C: Spam Fork**
- No Genesis reference  
- Copied from another  
- No owner, unsigned  

**Score: 0 / 1000**

---

## 📦 JSON Trust Score Output (Example)

```json
{
  "capsule_trust_score": 920,
  "components": {
    "lineage": 350,
    "signature": 150,
    "proof": 100,
    "agent_usage": 100,
    "identity_match": 80,
    "fork_integrity": 80,
    "indexed": 50,
    "ipfs_access": 40,
    "penalty": 0
  }
}
```

---

## 🛠 How to Improve Capsule Scores

- Always fork from the Genesis Capsule
- Sign your Capsule metadata
- Use a real agent to mint or use the Capsule
- Link to proofs or smart contracts in the CID
- Maintain clean metadata structure

Capsules that maintain trust integrity will be ranked higher in the explorer and earn more revenue from forks and usage.

