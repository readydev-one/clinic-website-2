// Select all sections
const sections = document.querySelectorAll("section");

// Define background color options for each section
const backgroundColors = [
    "linear-gradient(45deg, hsl(200, 70%, 80%), hsl(200, 70%, 60%))", // Blue gradient
    "linear-gradient(45deg, hsl(100, 70%, 80%), hsl(100, 70%, 60%))", // Green gradient
    "linear-gradient(45deg, hsl(300, 70%, 80%), hsl(300, 70%, 60%))", // Purple gradient
    "linear-gradient(45deg, hsl(50, 70%, 80%), hsl(50, 70%, 60%))",   // Yellow gradient
];

// Function to change background color on mouse enter
sections.forEach((section, index) => {
  section.addEventListener("mouseenter", () => {
    section.style.backgroundColor = backgroundColors[index];
  });

  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = ""; // Reset the background
  });
});
