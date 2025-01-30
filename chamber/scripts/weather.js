document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '4a304f6298ccb93ca85f7bf3a7af63a6';
    const city = 'New York'; // USA city
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=imperial`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=NewYork&appid=${apiKey}&units=imperial`;
    

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('current-weather').innerHTML = `
                <p>${Math.round(data.main.temp)}°F</p>
                <p>${data.weather.map(event => capitalizeWords(event.description)).join(', ')}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            `;
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            let forecastHTML = '<p>3-Day Forecast:</p>';
            for (let i = 0; i < 3; i++) {
                const dayData = data.list[i * 8]; // 8 * 3 = 24 hours, i.e., next day at the same time
                forecastHTML += `
                    <p>${new Date(dayData.dt_txt).toLocaleDateString()}: ${Math.round(dayData.main.temp)}°F</p>
                `;
            }
            document.getElementById('weather-forecast').innerHTML = forecastHTML;
        });

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
// Update all elements with class "currentyear"
document.querySelectorAll(".currentyear").forEach(element => {
    element.textContent = new Date().getFullYear();
});

// Update the "lastModified" span
document.getElementById("lastModified").textContent = document.lastModified;

    const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
    }
});