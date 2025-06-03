(function () {
  "use strict";

  // Function to handle visibility of images
  var checkImageVisibility = function () {
    const images = document.querySelectorAll(".imgs-grid img");
    const img = document.querySelectorAll(".img-wrap");
    const imgWrap = document.querySelectorAll(".hero-img-wrap");
    const imgFluid = document.querySelectorAll(".img-fluid");
    const features = document.querySelectorAll(".feature");

    const windowHeight = window.innerHeight;

    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        img.classList.add("visible");
      }
    });

    img.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        img.classList.add("visible");
      }
    });

    imgWrap.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        img.classList.add("visible");
      }
    });

    imgFluid.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        img.classList.add("visible");
      }
    });

    features.forEach((feature, index) => {
		const rect = feature.getBoundingClientRect();
      if (!feature.classList.contains("visible")) {
        if (rect.top < windowHeight && rect.bottom > 0) {
          feature.style.opacity = 0;
          feature.style.transform = "translateY(20px)";
          setTimeout(() => {
            feature.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            feature.style.opacity = 1;
            feature.style.transform = "translateY(0)";
            feature.classList.add("visible");
          }, index * 300);
        }
      }
    });
  };

  // Reset features on window load
  window.onload = function () {
    const features = document.querySelectorAll(".feature");
    features.forEach((feature) => {
      feature.classList.remove("visible"); // Remove 'visible' class
    });
    checkImageVisibility(); // Call the function to trigger the animations
  };

  // Initialize Tiny Slider
  var tinyslider = function () {
    var el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      var slider = tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };
  tinyslider();

  // Function to handle quantity increase/decrease
  var sitePlusMinus = function () {
    var value,
      quantity = document.getElementsByClassName("quantity-container");

    function createBindings(quantityContainer) {
      var quantityAmount =
        quantityContainer.getElementsByClassName("quantity-amount")[0];
      var increase = quantityContainer.getElementsByClassName("increase")[0];
      var decrease = quantityContainer.getElementsByClassName("decrease")[0];
      increase.addEventListener("click", function (e) {
        increaseValue(e, quantityAmount);
      });
      decrease.addEventListener("click", function (e) {
        decreaseValue(e, quantityAmount);
      });
    }

    function init() {
      for (var i = 0; i < quantity.length; i++) {
        createBindings(quantity[i]);
      }
    }

    function increaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);
      value = isNaN(value) ? 0 : value;
      if (value > 0) value--;
      quantityAmount.value = value;
    }

    init();
  };
  sitePlusMinus();

  // Check visibility on scroll
  window.addEventListener("scroll", checkImageVisibility);
  checkImageVisibility(); // Initial check on page load
})();
