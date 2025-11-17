// Claire Dupree
// 12/18/22

"use strict";
const initialOpacity = 0.8;
const galleryImages = $("#gallery-images");
const homeLink = $("#home-link");

// select nav jump links, add scroll eventlistener
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // add scroll animation
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// add a hover effect for each letter
$(document).ready(() => {
  // hide home link in nav on load
  homeLink.hide();

  // fade home link in/out if homepage is visible
  document.addEventListener("scroll", (e) => {
    console.log("scroll");

    if ($(window).scrollTop() > 800) {
      homeLink.fadeIn();
    } else {
      homeLink.fadeOut();
    }
  });

  // animate text on hover
  $(".hover-animate-sect span").hover(
    function () {
      $(this).animate({ fontSize: "7rem" }, 150);
    },
    function () {
      $(this).animate({ fontSize: "8rem" }, 150);
    }
  );
  $(".hover-animate-h1 span").hover(
    function () {
      $(this).animate({ fontSize: "9rem" }, 150);
    },
    function () {
      $(this).animate({ fontSize: "10rem" }, 150);
    }
  );
  $(".hover-animate-h2 span").hover(
    function () {
      $(this).animate({ fontSize: "2.8rem" }, 150);
    },
    function () {
      $(this).animate({ fontSize: "3rem" }, 150);
    }
  );
});
