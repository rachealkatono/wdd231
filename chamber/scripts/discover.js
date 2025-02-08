document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (!lastVisit) {
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysDifference = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            messageContainer.textContent = `You last visited 1 day ago.`;
        } else {
            messageContainer.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);
});
// Fetch the JSON data containing the cards
fetch("data/cards.json")
    .then(response => response.json()) // Parse the JSON
    .then(data => {
        // Select the container where cards will be displayed
        const container = document.querySelector("#cards-container");

        // Map through the data and generate the HTML for each card
        container.innerHTML = data.cards.map(item => `
            <article class="card">
                <h2>${item.title}</h2>
                <figure><img src="${item.image}" alt="${item.alt}" loading="lazy"></figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            </article>
        `).join(""); // Join the array into a single string of HTML

    })
    .catch(error => {
        // Handle any errors if fetching or parsing fails
        console.error("Error loading cards:", error);
    });


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