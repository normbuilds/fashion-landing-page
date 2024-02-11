import anime from "animejs/lib/anime.es.js";
let nav = document.getElementById("nav");
let popUp = document.getElementById("popup");
let app = document.getElementById("app");
const toggleNavMenu = () => {
  if (nav.style.display !== "none") {
    nav.style.display = "none";
    popUp.style.display = "flex";
  } else {
    nav.style.display = "block";
    popUp.style.display = "none";
  }
};
const closeNavMenu = () => {
  if ((popUp.style.display = "block")) {
    popUp.style.display = "none";
    nav.style.display = "flex";
  }
};
const slideImage = () => {
  let images = document.querySelectorAll(".slider-image");
  let currentImageIndex = 0;

  const fadeInNextImage = () => {
    // Fade out the current image
    anime({
      targets: images[currentImageIndex],
      opacity: 0,
      duration: 1000,
      easing: "linear",
      complete: () => {
        // Hide the current image
        images[currentImageIndex].style.display = "none";

        // Move to the next image index
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Show the next image
        images[currentImageIndex].style.display = "block";

        // Fade in the next image
        anime({
          targets: images[currentImageIndex],
          opacity: 1,
          duration: 1000,
          easing: "linear",
          complete: () => {
            // Set a timeout to call the function again after a delay
            setTimeout(fadeInNextImage, 2000); // Adjust the delay as needed
          },
        });
      },
    });
  };

  // Initially hide all images except the first one
  for (let i = 1; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Start the slider
  fadeInNextImage();
};

// Call the function to start the image slider
slideImage();

document.getElementById("nav").addEventListener("click", toggleNavMenu);
document.getElementById("app").addEventListener("click", closeNavMenu);
