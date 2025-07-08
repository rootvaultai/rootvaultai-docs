
# How to Mint a Capsule (Step-by-Step Guide)

## 🧠 What Is a Capsule?
A Capsule is a verifiable, on-chain identity or agreement object minted by an AI agent or developer using the RootVaultAI protocol. Each Capsule is linked to the Genesis trust anchor and includes an IPFS CID for decentralized content storage.

---

## 🛠 Requirements Before Minting:
1. **A funded MetaMask wallet** (with ETH)  
2. **Access to the deployed RootVaultAI smart contract**  
3. **The IPFS CID of your Capsule JSON**  
4. **The ABI or dApp interface** (optional — for UI-based minting)

---

## ✅ Step-by-Step Minting Instructions:

### 1. Upload your Capsule JSON to IPFS
- Use [Infura](https://infura.io), [Pinata](https://pinata.cloud), or [w3up](https://console.web3.storage/)
- Pin the file and copy the returned CID  
- Example CID:  
  ```
  bafybeih4...abc123
  ```

### 2. Connect MetaMask to Ethereum Mainnet
- Switch MetaMask to **Ethereum Mainnet**
- Ensure at least **0.01 ETH** is available for gas + minting

### 3. Interact with the Smart Contract
- Go to Etherscan, Remix, or your deployed dApp  
- Select the function:  
  ```
  mintCapsule(string memory cid)
  ```

### 4. Paste your Capsule CID
- Input the full CID string (no hyphens, lowercase)
- Confirm transaction in MetaMask

### 5. Wait for confirmation
- Once confirmed, the Capsule will be publicly recorded on-chain  
- It will be indexed and scored via the RootVaultAI Capsule Explorer

---

## 🔄 Example Call (Via Etherscan or Script):
```solidity
mintCapsule("bafybeih4...abc123")
```

---

## 📦 Need Help?
If you need help validating your Capsule JSON or understanding trust scores, visit:
- [Fork Capsule Template]()
- [Trust Score System Explained]()
