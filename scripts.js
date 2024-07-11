// JavaScript (scripts.js)

// Formularvalidierung
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  // Zusätzliche Validierungslogik kann hier hinzugefügt werden

  return true;
}

// Bildergalerie Beispiel
const images = document.querySelectorAll(".image-gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    // Beispiel: Öffnen eines Modals oder Ausführen einer Aktion mit dem angeklickten Bild
    console.log("Clicked on image:", img.alt);
  });
});

// Automatische Bildergalerie
const gallery = document.querySelector(".image-gallery");
let currentIndex = 0;
const slideWidth = images[0].clientWidth; // Breite eines einzelnen Bildes

function slideGallery() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const offset = -1 * currentIndex * slideWidth;
  gallery.style.transform = `translateX(${offset}px)`;
}

setInterval(slideGallery, 3000); // Ändern Sie 3000 für die Geschwindigkeit der Animation (in Millisekunden)
