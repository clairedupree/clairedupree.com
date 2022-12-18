"use strict";
// const homeHeaders = document.querySelector(".home-main");
// homeHeaders.style.color = "red";
const initialOpacity = 0.8;
const galleryImages = $("#gallery-images");

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

// $(".home-main").style.color = "red";
// homeHeaders.firstChild.style.color = "blue";
// add a hover effect for each letter
$(document).ready(() => {
  // $(".home-header span").css("opacity", initialOpacity);
  // $(".home-header span").hover(
  //   () => console.log("in"),
  //   () => console.log("out")
  // );
  $(".hover-animate-sect span").hover(
    function () {
      $(this).animate({ fontSize: "7rem" }, 150);
    },
    function () {
      $(this).animate({ fontSize: "8rem" }, 150);
    }
  );
  $(".hover-animate-h1 span").hover(
    // $(".home-header span").hover(
    function () {
      // $(this).animate({ opacity: 0.8 }, 150);
      $(this).animate({ fontSize: "9rem" }, 150);
      // $(this).css("color", "brown");
    },
    function () {
      // $(this).animate({ opacity: 1 }, 150);
      $(this).animate({ fontSize: "10rem" }, 150);
      // $(this).css("color", "red");
    }
  );
  $(".hover-animate-h2 span").hover(
    // $(".home-subheader span").hover(
    function () {
      $(this).animate({ fontSize: "2.8rem" }, 150);
    },
    function () {
      $(this).animate({ fontSize: "3rem" }, 150);
    }
  );
  // $(".socials span").hover(
  //   function () {
  //     $(this).animate({ fontSize: "1.45rem" }, 150);
  //   },
  //   function () {
  //     $(this).animate({ fontSize: "1.5rem" }, 150);
  //   }
  // );

  // $("#test").hover(
  //   function () {
  //     $("#test").animate({ fontsize: "100px" }, 300);
  //   },
  //   function () {
  //     $("#test").animate({ fontsize: "10px" }, 300);
  //   }
  // );
});
