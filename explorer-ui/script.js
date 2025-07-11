fetch("../assets/all-capsules.json")
  .then(response => response.json())
  .then(capsules => {
    const container = document.getElementById("capsule-container");

    capsules.forEach(capsule => {
      const div = document.createElement("div");
      div.className = "capsule";

      div.innerHTML = `
        <h3>${capsule.capsule_lineage || "Unnamed Capsule"}</h3>
        <p><strong>Capsule ID:</strong> ${capsule.agent_id}</p>
        <p><strong>Type:</strong> ${capsule.capsule_type}</p>
        <p><strong>Status:</strong> ${capsule.capsule_status}</p>
        <p><strong>Creator:</strong> ${capsule.creator}</p>
        ${capsule.whitepaper_ipfs ? `<a class="whitepaper-btn" href="${capsule.whitepaper_ipfs.replace("ipfs://", "https://w3s.link/ipfs/")}" target="_blank">📄 White Paper</a>` : ""}
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    const container = document.getElementById("capsule-container");
    container.innerHTML = `<p style="color:red;">❌ Error loading Capsules.</p>`;
    console.error(err);
  });
