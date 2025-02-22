"use strict";

// This scope is for mobile menu functionality
function mobileMenuFunctionality() {
  let isOpen = false;
  const mobileIcon = document.querySelector(".header__mobile-icon");
  const closeIcon = document.querySelector(".mobile-navigation__icon");
  const mobileNavigation = document.querySelector(".mobile-navigation");
  const anchors = document.querySelectorAll(".mobile-navigation__list-anchor");

  // Toggle mobile menu open and close
  function toggleMenu() {
    isOpen = !isOpen;

    if (isOpen) {
      mobileNavigation.style.transform = "translateX(0)";
    } else {
      mobileNavigation.style.transform = "translateX(-100%)";
    }
  }

  // If an anchor is clicked in menu, scroll to section and close menu
  function manuallyCloseMenu() {
    isOpen = false;
    mobileNavigation.style.transitionDelay = "0.5s";
    mobileNavigation.style.transform = "translateX(-100%)";
  }

  // Eventlisteners
  mobileIcon.addEventListener("touchstart", toggleMenu);
  closeIcon.addEventListener("touchstart", toggleMenu);

  anchors.forEach((a) => {
    a.addEventListener("touchstart", manuallyCloseMenu);
  });
}

mobileMenuFunctionality();
