// Interactive navigation
const contentContainer = document.getElementById("content");

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const section = this.getAttribute("href").substring(1); // Get section ID
    loadSection(section);
  });
});

// Load section content dynamically
function loadSection(section) {
  let content = "";
  switch (section) {
    case "about":
      content = "<h2>About Us</h2><p>We are a premium bike rental service offering adventures around the world.</p>";
      break;
    case "services":
      content = "<h2>Our Services</h2><p>We provide mountain bikes, road bikes, and electric bikes for your convenience.</p>";
      break;
    case "contact":
      content = "<h2>Contact Us</h2><p>Email: contact@bikerental.com<br>Phone: +1 234 567 890</p>";
      break;
    case "location":
      content = "<h2>Our Location</h2><p>We are located at the heart of the city, ready to serve you!</p>";
      break;
    case "book":
      content = "<h2>Book Your Ride</h2><p>Fill out the form below to book your adventure!</p>";
      break;
    default:
      content = "<h2>Welcome!</h2><p>Select an option from the menu.</p>";
  }
  contentContainer.innerHTML = `<div class="section-content">${content}</div>`;
  contentContainer.style.display = "block"; // Show the content container
}

// Get Quote button interaction
document.getElementById("getQuoteBtn").addEventListener("click", () => {
  displayConfirmation("Your quote request has been received! Check the 'Book' section for more details.");
});

// Function to display confirmation message
function displayConfirmation(message) {
  const confirmationDiv = document.createElement("div");
  confirmationDiv.classList.add("alert", "alert-success", "mt-3"); // Bootstrap alert styling
  confirmationDiv.textContent = message;

  // Insert the confirmation message below the button
  const heroSection = document.querySelector(".hero-section");
  heroSection.appendChild(confirmationDiv);

  // Remove the confirmation message after 5 seconds
  setTimeout(() => {
    confirmationDiv.remove();
  }, 5000);
}
