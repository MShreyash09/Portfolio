// Select DOM elements
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const user_message = document.querySelector("#message");
const contactForm = document.querySelector("#contact-form");

// Form submit listener
contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from refreshing the page

    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = user_message.value.trim();

    if (nameValue === "" && emailValue === "" && messageValue === "") {
        alert("Please input everything.");
      } 
    else if (nameValue === "") {
        alert("Enter your name.");
      } 
    else if (emailValue === "") {
        alert("Enter your email.");
      } 
    else if (messageValue === "") {
        alert("Enter your message.");
      } 
    else {
        alert("Thanks for contacting! Your message has been received.");
        contactForm.reset(); // Optional: clear the form
      }
    
});


const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", function () {
  const body = document.body;

  // Toggle dark mode class
  body.classList.toggle("dark-mode");

  // Change button text
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Dark";
    body.style.backgroundColor = "#0D1117";
    
  } else {
    toggleButton.textContent = "Light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});

