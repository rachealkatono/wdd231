document.addEventListener("DOMContentLoaded", () => {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const spotlightContainer = document.getElementById("spotlight-container");
            spotlightContainer.innerHTML = ""; // Clear previous content

            let count = 0; // Track how many members we display

            for (const key in data) { // Iterate through JSON object
                if (data.hasOwnProperty(key)) {
                    const member = data[key];

                    // Display only Gold (2) and Silver (3) members
                    if (member.membershipLevel >= 2) {
                        const card = document.createElement("div");
                        card.classList.add("spotlight");

                        card.innerHTML = `
                            <img src="images/${member.image}" alt="${member.name}" class="spotlight-image">
                            <h3>${member.name}</h3>
                            <p><strong>Address:</strong> ${member.address}</p>
                            <p><strong>Phone:</strong> ${member.phone}</p>
                            <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        `;

                        spotlightContainer.appendChild(card);
                        count++;

                        // Display only the first 3 members
                        if (count >= 3) break;
                    }
                }
            }
        })
        .catch(error => console.error("Error loading members:", error));
});
