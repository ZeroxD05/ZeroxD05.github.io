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
