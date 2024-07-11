// Form validation example
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  // Additional validation logic can be added here

  return true;
}

// Image gallery example
const images = document.querySelectorAll(".image-gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    // Example: Open a modal or perform an action with the clicked image
    console.log("Clicked on image:", img.alt);
  });
});

const footerButtons = document.querySelectorAll(".footer-btn");

// Füge einen Event Listener für jedes Button hinzu
footerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Entferne die 'active'-Klasse von allen Buttons
    footerButtons.forEach((btn) => btn.classList.remove("active"));
    // Füge die 'active'-Klasse zum angeklickten Button hinzu
    this.classList.add("active");

    // Optional: Um den aktiven Zustand nach einer kurzen Zeit zu entfernen, aktiviere den folgenden Code
    // setTimeout(() => {
    //   button.classList.remove('active');
    // }, 300); // 300 Millisekunden (oder eine andere geeignete Zeitspanne)
  });
});
