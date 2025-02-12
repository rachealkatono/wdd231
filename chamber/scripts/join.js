// Form submission handler
    const form = document.getElementById('membershipForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Form will submit naturally to thankyou.html
            console.log('Form submitted');
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 3 && value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else if (value.length > 6) {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
            e.target.value = value;
        });
    }

    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const closeButtons = document.querySelectorAll('.close');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.parentElement.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Thank you page functionality
    const isThankYouPage = window.location.pathname.includes('thankyou.html');
    if (isThankYouPage) {
        const params = new URLSearchParams(window.location.search);
        
        // Display form data
        document.getElementById('firstName').textContent = params.get('firstName') || 'N/A';
        document.getElementById('lastName').textContent = params.get('lastName') || 'N/A';
        document.getElementById('email').textContent = params.get('email') || 'N/A';
        document.getElementById('phone').textContent = params.get('phone') || 'N/A';
        document.getElementById('organization').textContent = params.get('organization') || 'N/A';
        document.getElementById('timestamp').textContent = params.get('timestamp') || new Date().toLocaleString();
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

