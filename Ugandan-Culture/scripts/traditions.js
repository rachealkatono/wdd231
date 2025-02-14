
document.addEventListener("DOMContentLoaded", () => {
    fetch("data/traditions.json")
        .then(response => response.json())
        .then(data => displayTraditions(data))
        .catch(error => console.error("Error loading traditions:", error));
});

function displayTraditions(traditions) {
    const container = document.getElementById("traditionsGallery");
    container.innerHTML = "";

    traditions.forEach(tradition => {
        const card = document.createElement("div");
        card.classList.add("tradition-card");

        card.innerHTML = `
            <img src="${tradition.image}" alt="${tradition.title}">
            <div class="tradition-info">
                <h3>${tradition.title}</h3>
                <p>${tradition.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const ceremoniesData = [
        {
            id: "imbalu",
            title: "Imbalu Circumcision Ceremony",
            image: "images/imbalu.jpg",
            description: "A significant rite of passage among the Bagisu, marking the transition to manhood.",
           
        },
        {
            id: "empango",
            title: "Empango Royal Anniversary",
            image: "images/Bunyoro-Emapago.jpg",
            description: "The Bunyoro Kingdom’s grand celebration marking the Omukama’s coronation anniversary.",
            
        },
        {
            id: "ekyooto",
            title: "Ekyooto Storytelling Tradition",
            image: "images/Ekyooto.jpeg",
            description: "A cultural gathering around the fireplace where elders pass down wisdom through storytelling.",
           
        },
        {
            id: "kwanjula",
            title: "Kwanjula Introduction Ceremony",
            image: "images/kwanjula.jpg",
            description: "The traditional Baganda marriage introduction, filled with gifts, dances, and cultural rites.",
            
        },
        {
            id: "nyege-nyege",
            title: "Nyege Nyege Festival",
            image: "images/Runyege.jpeg",
            description: "A vibrant cultural and musical festival celebrating Ugandan and African heritage.",
            
        },
        {
            id: "ekitaguriro",
            title: "Ekitaguriro Dance",
            image: "images/Ekitaguriro.webp",
            description: "A traditional dance of the Banyankole, showcasing the elegance of the Ankole longhorn cattle.",
           
        }
    ];

    const sectionContainer = document.querySelector(".sections-preview");
    sectionContainer.innerHTML = "";

    ceremoniesData.forEach(ceremony => {
        const sectionCard = document.createElement("div");
        sectionCard.classList.add("section-card");

        sectionCard.innerHTML = `
            <img src="${ceremony.image}" alt="${ceremony.title}">
            <h3>${ceremony.title}</h3>
            <p>${ceremony.description}</p>
        `;

        sectionContainer.appendChild(sectionCard);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const featuredContent = document.getElementById("featured-content");

    const features = [
        "Luganda – Spoken by the Baganda people, one of Uganda’s widely used languages.",
        "Runyankore – A Bantu language spoken by the Banyankore people in western Uganda.",
        "Lusoga – A language spoken by the Basoga people in eastern Uganda.",
        "Acholi – Spoken by the Acholi people in northern Uganda.",
        "Obukadde butambula n’embiro, naye obuvubuka butambula n’amanyi.\" (Elders walk with wisdom, youth walk with strength.) – A Luganda saying about the value of experience.",
        "Omuntu asobola okwogerera, naye alina okwogera wansi w’omugongo.\" (A person can speak, but they must first know how to listen.) – A saying emphasizing the value of listening before speaking.",
        "Proverb of the Day \"Akatonda akwagaza, takutuma.\" (When God loves you, He doesn't send you a letter.) – A Luganda proverb about the blessings that come without warning."
        ];

    let index = 0;
    function updateFeature() {
        featuredContent.innerHTML = `<p>${features[index]}</p>`;
        index = (index + 1) % features.length;
    }

    updateFeature();
    setInterval(updateFeature, 5000); // Change content every 5 seconds
});

function exploreMore() {
    alert("Explore more about Uganda’s beautiful culture!");
}
