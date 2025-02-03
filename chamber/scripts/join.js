document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timestamp').value = new Date().toISOString();
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if this is the thank you page
    const urlParams = new URLSearchParams(window.location.search);

    if (document.getElementById('firstName')) {
        document.getElementById('firstName').textContent = urlParams.get('first-name') || "N/A";
    }
    if (document.getElementById('lastName')) {
        document.getElementById('lastName').textContent = urlParams.get('last-name') || "N/A";
    }
    if (document.getElementById('email')) {
        document.getElementById('email').textContent = urlParams.get('email') || "N/A";
    }
    if (document.getElementById('mobilePhone')) {
        document.getElementById('mobilePhone').textContent = urlParams.get('phone') || "N/A";
    }
    if (document.getElementById('organization')) {
        document.getElementById('organization').textContent = urlParams.get('organization') || "N/A";
    }
    if (document.getElementById('timestamp')) {
        document.getElementById('timestamp').textContent = new Date().toUTCString();
    }
        
document.addEventListener('DOMContentLoaded', () => {
            fetch('membership.json')  // Load JSON file
                .then(response => response.json())
                .then(data => {
                    displayMemberships(data.memberships);
                    generateModals(data.memberships);
                })
                .catch(error => console.error('Error loading membership data:', error));
            
            function displayMemberships(memberships) {
                const container = document.querySelector('.membership-container');
        
                memberships.forEach(membership => {
                    const card = document.createElement('div');
                    card.classList.add('card');
        
                    card.innerHTML = `
                        <p>${membership.name} Level</p>
                        <button onclick="openModal('${membership.id}')">Learn More</button>
                    `;
        
                    container.appendChild(card);
                });
            }
        
            function generateModals(memberships) {
                const modalContainer = document.createElement('div'); // Create a container for modals
                document.body.appendChild(modalContainer);
        
                memberships.forEach(membership => {
                    const modal = document.createElement('div');
                    modal.id = membership.id;
                    modal.classList.add('modal');
                    modal.style.display = 'none';  // Initially hidden
        
                    modal.innerHTML = `
                        <div class="modal-content">
                            <span class="close" onclick="closeModal('${membership.id}')">&times;</span>
                            <h2>${membership.name}</h2>
                            <p>${membership.benefits.join(', ')}</p>
                        </div>
                    `;
        
                    modalContainer.appendChild(modal);
                });
            }
        });
        
        // Functions to Open & Close Modals
        function openModal(id) {
            document.getElementById(id).style.display = 'block';
        }
        
        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
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
});
