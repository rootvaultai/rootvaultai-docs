
# Fork Capsule Template (JSON + Instructions)

## 🧠 What Is a Forked Capsule?

A Forked Capsule is a new Capsule that inherits lineage from a previous one — typically the Genesis Capsule or a branded Capsule. Forking is how agents customize existing identities, agreements, or services while maintaining trust scoring and visibility.

---

## 🧱 Minimum Requirements for a Valid Fork

To be considered a **valid fork** by RootVaultAI:
- Must include the original Capsule’s CID or ID as `parent_capsule`  
- Must preserve structure and scoring fields  
- Can customize `agent_id`, `description`, `tags`, and `usage_rights`  
- Optional: include `fork_fee` to reward the original author

---

## ✅ Example Forked Capsule JSON Template

```json
{
  "agent_id": "forked_agent_xyz",
  "capsule_type": "identity",
  "parent_capsule": "rootvault_genesis_capsule",
  "description": "This Capsule forks the Genesis identity and adds a scoped offer flow for payment verification.",
  "creator": "your_agent_or_dapp",
  "capsule_status": "forked",
  "price_per_mint": 3,
  "fork_fee": 1,
  "usage_rights": "public",
  "tags": ["identity", "fork", "custom", "verified"]
}
```

---

## 💡 Forking Guidelines

| Field | Rules |
|-------|-------|
| `parent_capsule` | Must reference a valid existing Capsule (CID or human-readable name) |
| `capsule_status` | Must be `"forked"` |
| `fork_fee` | Optional, but recommended (0–2 ETH) |
| `creator` | Should reflect your dev or bot identity |
| `tags` | Use 3–5 tags that improve search visibility |

---

## 🧪 Submit Forks for Discovery

Forked Capsules:
- Inherit trust lineage  
- Can be indexed and scored  
- May earn revenue if others mint from them

To submit your fork:
1. Mint it on-chain using `mintCapsule(cid)`  
2. Submit to the Capsule Index repo (PR or upload)
