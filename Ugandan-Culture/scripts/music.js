document.addEventListener("DOMContentLoaded", async () => {
    const instrumentsContainer = document.getElementById("instruments-container");
    const dancesContainer = document.getElementById("dances-container");

    try {
        const response = await fetch("data/music-dance.json");
        if (!response.ok) throw new Error("JSON file not found or incorrect path!");
        const data = await response.json();

        displayItems(instrumentsContainer, data.instruments);
        displayItems(dancesContainer, data.dances);
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
});


    function displayItems(container, items) {
        container.innerHTML = items.map(item => `
            <div class="item">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='images/placeholder.jpg';">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `).join("");
    }

// Update all elements with class "currentyear"
document.querySelectorAll(".currentyear").forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Update the "lastModified" span
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
