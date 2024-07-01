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

// 

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}


document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(
    ".additional-services-carousel-container"
  );
  const prevButton = document.querySelector(
    ".additional-services-carousel-button.prev"
  );
  const nextButton = document.querySelector(
    ".additional-services-carousel-button.next"
  );
  const totalItems = document.querySelectorAll(
    ".additional-services-addition-box"
  ).length;
  let currentIndex = 0;

  function updateCarousel() {
    const width = carouselContainer.clientWidth;
    carouselContainer.style.transform = `translateX(-${
      currentIndex * width
    }px)`;
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

  // Initial update
  updateCarousel();
});


window.onload = function () {
  let slideIndex = 0;
  showSlide();
  
}

window.onload = function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("testimonal-header-img");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  window.currentSlide = function (n) {
    let slides = document.getElementsByClassName("testimonal-header-img");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
    slideIndex = n;
  };
};