document.addEventListener("DOMContentLoaded", () => {
  const memberContainer = document.getElementById("memberContainer");
  const toggleViewButton = document.getElementById("toggleView");

  // Fetch members.json and populate the directory
  fetch("data/members.json")
    .then((response) => response.json())
    .then((members) => {
      const membersArray = Object.values(members); // Convert object to array
      renderMembers(membersArray, "list-view");

      // Toggle view event listener
      toggleViewButton.addEventListener("click", () => {
        const currentView = memberContainer.classList.contains("list-view") ? "list-view" : "grid-view";
        const newView = currentView === "list-view" ? "grid-view" : "list-view";
        memberContainer.classList.remove(currentView);
        memberContainer.classList.add(newView);
        renderMembers(membersArray, newView);
      });
    })
    .catch((error) => console.error("Error fetching members:", error));

  // Function to render members
  function renderMembers(members, view) {
    memberContainer.innerHTML = "";
    members.forEach((member) => {
      const card = document.createElement("div");
      card.className = `member-card ${view}`;
      card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}" class="logo">
          <h2>${member.name}</h2>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
          <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
      memberContainer.appendChild(card);
    });
  }
});


// Set footer info
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;