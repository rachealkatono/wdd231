document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.getElementById("featured-image");
    const featuredCaption = document.getElementById("featured-caption");

    const images = [
        { image: "images/matooke.webp", caption: "Matooke – A staple banana dish loved across Uganda!" },
        { image: "images/luwombo.webp", caption: "Luwombo – A delicious Ugandan stew wrapped in banana leaves." },
        { image: "images/rolex.webp", caption: "Rolex – A popular Ugandan street food made with eggs and chapati." },
        { image: "images/pilau.webp", caption: "Pilau – A spiced rice dish enjoyed during celebrations." },
        { image: "images/kalo.webp", caption: "Kalo – A millet-based meal commonly eaten in western Uganda." },
        { image: "images/malewa.webp", caption: "Malewa – A bamboo shoot delicacy from the Bagisu community." },
        { image: "images/nsenene.webp", caption: "Nsenene – A seasonal delicacy of fried grasshoppers." },
        { image: "images/lumonde.webp", caption: "Lumonde – Sweet potatoes, a staple in many Ugandan households." },
        { image: "images/dining.webp", caption: "Olujuliro – A communal dining tradition where people sit in a circle and eat together." }
    ];

    let index = 0;
    let interval; // Store the interval reference

    function updateFeature() {
        const currentImage = images[index];
    
        // Save the current image in localStorage
        localStorage.setItem("lastFeaturedImage", JSON.stringify(currentImage));
    
        featuredCaption.textContent = currentImage.caption;
    
        const newImage = new Image();
        newImage.src = currentImage.image;
        newImage.alt = currentImage.caption;
        newImage.loading = "lazy";
    
        newImage.onload = () => {
            featuredImage.src = newImage.src;
            featuredImage.alt = newImage.alt;
            index = (index + 1) % images.length;
        };
    }
    
    // Retrieve last featured image on page load
    document.addEventListener("DOMContentLoaded", () => {
        const savedImage = JSON.parse(localStorage.getItem("lastFeaturedImage"));
        if (savedImage) {
            featuredImage.src = savedImage.image;
            featuredImage.alt = savedImage.caption;
            featuredCaption.textContent = savedImage.caption;
        }
    });
    

    // Lazy load the first image
    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            updateFeature();
            observer.unobserve(featuredImage); // Stop observing after first load
            startSlideshow(); // Start the slideshow once the first image loads
        }
    });

    function startSlideshow() {
        clearInterval(interval); // Clear any existing interval to prevent duplicate timers
        interval = setInterval(updateFeature, 5000);
    }

    observer.observe(featuredImage);
});

function exploreMore() {
    alert("Explore more about Uganda’s beautiful culture!");
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
