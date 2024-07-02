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
};

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

document.addEventListener("DOMContentLoaded", function () {
  var mobile_home_btn = document.querySelector("#home");
  var mobile_service_btn = document.querySelector("#service");
  var mobile_gallery_btn = document.getElementById("gallery");
  var mobile_aboutUs = document.getElementById("aboutUs");

  //  for home nav link

  mobile_home_btn.addEventListener("mouseenter", function () {
    document.querySelector(".fa-home").style.display = "flex";
  });

  mobile_home_btn.addEventListener("mouseleave", function () {
    document.querySelector(".fa-home").style.display = "none";
  });

  // for  service nav links
  mobile_service_btn.addEventListener("mouseenter", function () {
    document.querySelector(".fa-tasks").style.display = "flex";
  });

  mobile_service_btn.addEventListener("mouseleave", function () {
    document.querySelector(".fa-tasks").style.display = "none";
  });

  // for gallery nav link
  mobile_gallery_btn.addEventListener("mouseenter", function () {
    document.querySelector(".fa-image").style.display = "flex";
  });

  mobile_gallery_btn.addEventListener("mouseleave", function () {
    document.querySelector(".fa-image").style.display = "none";
  });

  // user nav link
  mobile_aboutUs.addEventListener("mouseenter", function () {
    document.querySelector(".fa-users").style.display = "flex";
  });

  mobile_aboutUs.addEventListener("mouseleave", function () {
    document.querySelector(".fa-users").style.display = "none";
  });

  /*=====================================
    MOBILE NAV
  ======================================*/

  document
    .querySelector(".dropdown-menu")
    .addEventListener("click", function () {
      const menu = document.querySelector(".mobile-navbar-menu");
      menu.style.display = "block";
      menu.classList.add("active");
    });

  document.querySelector(".mobile-navbar-close-btn").onclick = function () {
    const menu = document.querySelector(".mobile-navbar-menu");
    menu.classList.remove("active");
    menu.classList.add("out");
  };
});









// faq collapse
var faqMainItems = document.querySelectorAll(".faq-main");
var faqDropdown = document.querySelector(".faq-dropdown");

faqMainItems.forEach((faqMain) => {
  faqMain.addEventListener("click", function () {
    faqDropdown.classList.toggle("show");
  });
});


/*==========================
hero collapse menu
============================*/

document.addEventListener('DOMContentLoaded', function () {
  var dropdownBtns = document.querySelectorAll('.collapse-btn-dropbtn');
  var collapseContents = document.querySelectorAll('.collapse-dropdown-content');

  for (let i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].onclick = function () {
      alert('hello')
      collapseContents.forEach((content) => (content.style.display = 'none'));

      collapseContents[i].style.display = 'block';
   }
    
  }
})

// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownBtns = document.querySelectorAll(".collapse-btn-dropbtn");
//   var collapseContents = document.querySelectorAll(
//     ".collapse-dropdown-content"
//   );

//   for (let i = 0; i < dropdownBtns.length; i++) {
//     dropdownBtns[i].onclick = function () {
//       collapseContents.forEach((content) => (content.style.display = "none"));
       
  
//       collapseContents[i].style.display = "block";
//     };
//   }


//   window.addEventListener("click", function (event) {
//     if (!event.target.matches(".collapse-btn-dropbtn")) {
//       collapseContents.forEach((content) => (content.style.display = "none"));
//     }
//   });
// });
