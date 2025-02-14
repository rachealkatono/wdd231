document.addEventListener("DOMContentLoaded", function() {
    const featuredImage = document.getElementById("featured-image");
    const featuredCaption = document.getElementById("featured-caption");

    const images = [
        { image: "images/matooke.jpeg", caption: "Matooke – A staple banana dish loved across Uganda!" },
        { image: "images/otole-dance.jpg", caption: "Otole Dance – A traditional dance from northern Uganda." },
        { image: "images/luwombo.jpeg", caption: "Luwombo – A delicious Ugandan stew wrapped in banana leaves." },
        { image: "images/cultural-wear.jpeg", caption: "olubugo – A symbol of heritage and pride." }
    ];

    let index = 0;
    function updateFeature() {
        featuredImage.src = images[index].image;
        featuredImage.alt = images[index].caption;
        featuredCaption.textContent = images[index].caption;
        index = (index + 1) % images.length;
    }

    updateFeature();
    setInterval(updateFeature, 5000); // Change image and caption every 5 seconds
});

function exploreMore() {
    alert("Explore more about Uganda’s beautiful culture!");
}
