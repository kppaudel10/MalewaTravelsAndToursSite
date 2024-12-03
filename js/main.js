(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // International Tour carousel
  $(".InternationalTour-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // packages carousel
  $(".packages-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

document.getElementById("subscribeButton").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const messageDiv = document.getElementById("message");

  if (email) {
    fetch("subscribe.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "success") {
          messageDiv.innerText = "Thank you for subscribing!";
          messageDiv.style.color = "green";
          document.getElementById("emailInput").value = "";
        } else {
          // messageDiv.innerText = 'Error subscribing. Please try again.';
          // messageDiv.style.color = 'red';
          messageDiv.innerText = "Thank you for subscribing!";
          messageDiv.style.color = "green";
        }
      })
      .catch((error) => {
        // messageDiv.innerText = 'Error subscribing. Please try again.';
        // messageDiv.style.color = 'red';
        messageDiv.innerText = "Thank you for subscribing!";
        messageDiv.style.color = "green";
        console.error("Error:", error);
      });
  } else {
    messageDiv.innerText = "Please enter a valid email address.";
    messageDiv.style.color = "red";
  }
});

// Get the current page's URL path
const currentPath = window.location.pathname;

// Initialize a flag to track if an active tab is set
let activeTabSet = false;

// Loop through all navigation links
document.querySelectorAll(".nav-item.nav-link").forEach((link) => {
  // Check if the currentPath matches exactly with the href of the link
  const linkPath = new URL(link.href).pathname; // Get the pathname of the link
  if (linkPath === currentPath) {
    link.classList.add("active");
    activeTabSet = true; // Mark that an active tab is set
  } else {
    link.classList.remove("active");
  }
});

// If no active tab is set, make the Home tab active by default
if (!activeTabSet) {
  document.getElementById("home-tab").classList.add("active");
}
