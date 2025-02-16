document.addEventListener("DOMContentLoaded", () => {
    // Form submission handler
    const form = document.getElementById("membershipForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent default form submission

            const formData = new FormData(form);
            const params = new URLSearchParams();

            // Append all form fields
            for (const [key, value] of formData.entries()) {
                params.append(key, value);
            }

            // Append timestamp
            const timestamp = new Date().toLocaleString();
            params.append("timestamp", timestamp);

            // Redirect to submission-review.html with form data
            window.location.href = `Submission-review.html?${params.toString()}`;
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener("input", (e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length >= 3 && value.length <= 6) {
                value = value.slice(0, 3) + "-" + value.slice(3);
            } else if (value.length > 6) {
                value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6, 10);
            }
            e.target.value = value;
        });
    }

    // Modal functionality
    document.querySelectorAll(".learn-more-btn").forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.parentElement.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "block";
        });
    });

    document.querySelectorAll(".close").forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) modal.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });

    // Submission review functionality
    if (window.location.pathname.includes("Submission-review.html")) {
        const params = new URLSearchParams(window.location.search);

        document.getElementById("firstName").textContent = params.get("firstName") || "N/A";
        document.getElementById("lastName").textContent = params.get("lastName") || "N/A";
        document.getElementById("email").textContent = params.get("email") || "N/A";
        document.getElementById("phone").textContent = params.get("phone") || "N/A";
        document.getElementById("message").textContent = params.get("message") || "N/A";
        document.getElementById("timestamp").textContent = params.get("timestamp") || new Date().toLocaleString();
    }

    // Update the footer year and last modified date
    document.querySelectorAll(".currentyear").forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Hamburger menu logic
    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }
});
