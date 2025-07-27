function toggleText(event) {
    event.preventDefault(); // Prevent the default link behavior
    var fullText = event.target.previousElementSibling; // Select the full-text element
    var link = event.target; // Select the clicked link

    if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block"; // Show the full text
        link.textContent = "Read Less"; // Change the link text
    } else {
        fullText.style.display = "none"; // Hide the full text
        link.textContent = "Read More"; // Change the link text back
    }
}
