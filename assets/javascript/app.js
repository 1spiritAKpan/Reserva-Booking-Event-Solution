// script.js

// document.addEventListener("DOMContentLoaded", () => {
//   const dropdownButton = document.querySelector(".dropdown-button");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   dropdownButton.addEventListener("click", () => {
//     dropdownContent.style.display =
//       dropdownContent.style.display === "block" ? "none" : "block";
//   });

//   window.addEventListener("click", (event) => {
//     if (!event.target.matches(".dropdown-button")) {
//       if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//       }
//     }
//   });
// });

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    const output = document.getElementById('output');

    dropdown.addEventListener('change', () => {
        const selectedOption = dropdown.options[dropdown.selectedIndex].text;
        output.textContent = `You selected: ${selectedOption}`;
    });
});



// carousel

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const totalItems = document.querySelectorAll(".carousel-item").length;
  let currentIndex = 0;

  function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  // Handle window resize
  window.addEventListener("resize", updateCarousel);
});

