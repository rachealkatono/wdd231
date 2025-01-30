document.addEventListener("DOMContentLoaded", () => {
    const events = [
            {
                title: "Global Entrepreneurship Summit",
                date: "October 5, 2024",
                location: "International Trade Center, New York",
                time: "3:00 PM - 7:00 PM UTC"
            },
            {
                title: "Innovators in Tech Forum",
                date: "November 12, 2024",
                location: "Tech Hub, San Francisco, California",
                time: "5:00 PM - 9:00 PM UTC"
            },
            {
                title: "Small Business Growth Workshop",
                date: "December 3, 2024",
                location: "City Business Center, Chicago, Illinois",
                time: "4:00 PM - 8:00 PM UTC"
            },
            {
                title: "Annual Marketing Strategies Conference",
                date: "January 15, 2025",
                location: "Convention Center, Las Vegas, Nevada",
                time: "2:00 PM - 6:00 PM UTC"
            },
            {
                title: "Sustainable Business Practices Expo",
                date: "February 20, 2025",
                location: "Green Space Expo Grounds, Seattle, Washington",
                time: "6:00 PM - 10:00 PM UTC"
            },
            {
                title: "Women in Business Leadership Summit",
                date: "March 30, 2025",
                location: "Downtown Conference Hall, Atlanta, Georgia",
                time: "1:00 PM - 5:00 PM UTC"
            }
        ];

    const eventsList = document.getElementById("events-list");

    events.forEach(event => {
        const eventItem = document.createElement("li");

        const eventTitle = document.createElement("h2");
        eventTitle.textContent = event.title;

        const eventDate = document.createElement("p");
        eventDate.textContent = `Date: ${event.date}`;

        const eventLocation = document.createElement("p");
        eventLocation.textContent = `Location: ${event.location}`;

        const eventTime = document.createElement("p");
        eventTime.textContent = `Time: ${event.time}`;

        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventDate);
        eventItem.appendChild(eventLocation);
        eventItem.appendChild(eventTime);

        eventsList.appendChild(eventItem);
    });
});