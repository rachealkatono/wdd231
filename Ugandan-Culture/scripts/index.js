document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.getElementById("featured-image");
    const featuredCaption = document.getElementById("featured-caption");

    const images = [
        { image: "images/matooke.jpeg", caption: "Matooke – A staple banana dish loved across Uganda!" },
        { image: "images/luwombo.jpeg", caption: "Luwombo – A delicious Ugandan stew wrapped in banana leaves." },
        { image: "images/rolex.webp", caption: "Rolex – A popular Ugandan street food made with eggs and chapati." },
        { image: "images/pilau.jpeg", caption: "Pilau – A spiced rice dish enjoyed during celebrations." },
        { image: "images/kalo.jpg", caption: "Kalo – A millet-based meal commonly eaten in western Uganda." },
        { image: "images/malewa.jpg", caption: "Malewa – A bamboo shoot delicacy from the Bagisu community." },
        { image: "images/nsenene.jpeg", caption: "Nsenene – A seasonal delicacy of fried grasshoppers." },
        { image: "images/lumonde.jpg", caption: "Lumonde – Sweet potatoes, a staple in many Ugandan households." },
        { image: "images/dining.jpg", caption: "Olujuliro – A communal dining tradition where people sit in a circle and eat together." },
    ];
    


    let index = 0;

    function updateFeature() {
        const newImage = new Image();
        newImage.src = images[index].image;
        newImage.alt = images[index].caption;
        newImage.loading = "lazy"; // Apply lazy loading

        newImage.onload = () => {
            featuredImage.src = newImage.src;
            featuredImage.alt = newImage.alt;
            featuredCaption.textContent = images[index].caption;
        };

        index = (index + 1) % images.length;
    }

    // Lazy load initial image
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateFeature();
                observer.unobserve(entry.target); // Stop observing after the first load
            }
        });
    });

    observer.observe(featuredImage);
    setInterval(updateFeature, 5000); // Change image and caption every 5 seconds
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
