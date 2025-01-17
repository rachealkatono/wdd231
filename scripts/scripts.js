// Update the current year dynamically in the footer
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Update the "last modified" date dynamically in the footer
const lastModifiedElement = document.getElementById("last-modified-date");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
  const courses = [
    {
      subject: "CSE",
      number: 110,
      title: "Introduction to Programming",
      credits: 2,
      description:
        "Introduction to programming concepts, including variables, loops, and arrays.",
      completed: true,
    },
    {
      subject: "WDD",
      number: 130,
      title: "Web Fundamentals",
      credits: 2,
      description: "Introduction to web design and development.",
      completed: true,
    },
    {
      subject: "CSE",
      number: 111,
      title: "Programming with Functions",
      credits: 2,
      description: "Focus on writing, calling, and debugging functions.",
      completed: true,
    },
    {
      subject: "CSE",
      number: 210,
      title: "Programming with Classes",
      credits: 2,
      description: "Introduction to object-oriented programming.",
      completed: false,
    },
    {
      subject: "WDD",
      number: 131,
      title: "Dynamic Web Fundamentals",
      credits: 2,
      description: "Learn to create dynamic, event-driven websites.",
      completed: false,
    },
    {
      subject: "WDD",
      number: 231,
      title: "Frontend Web Development I",
      credits: 2,
      description: "Focus on accessibility, optimization, and basic API usage.",
      completed: false,
    },
  ];
  const filterCourses = (filter = 'All') => {
    const courseContainer = document.getElementById('courseContainer');
    courseContainer.innerHTML = ''; // Clear the container
  
    // Filter courses based on the filter type
    const filteredCourses = courses.filter((course) =>
      filter === 'All' ? true : course.subject === filter
    );
  
    // Render courses
    filteredCourses.forEach((course) => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      if (course.completed) {
        courseCard.classList.add('completed');
      }
      courseCard.innerHTML = `
        <h3>${course.subject} ${course.number}</h3>
        <p>${course.title}</p>
        <p>Credits: ${course.credits}</p>
      `;
      courseContainer.appendChild(courseCard);
    });
  
    // Update total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('totalCredits').textContent = `Total Credits: ${totalCredits}`;
  };
  
  // Event listeners for filter buttons
  document.getElementById('allButton').addEventListener('click', () => filterCourses('All'));
  document.getElementById('cseButton').addEventListener('click', () => filterCourses('CSE'));
  document.getElementById('wddButton').addEventListener('click', () => filterCourses('WDD'));
  
  // Initialize the page
  filterCourses();