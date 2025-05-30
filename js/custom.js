(function() {
  'use strict';

  // Function to handle visibility of images
  var checkImageVisibility = function() {
    const images = document.querySelectorAll(".imgs-grid img");
    const img = document.querySelectorAll(".img-wrap");
    const imgWrap = document.querySelectorAll(".hero-img-wrap");
    const imgFluid = document.querySelectorAll(".img-fluid");

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
  };

  // Initialize Tiny Slider
  var tinyslider = function() {
    var el = document.querySelectorAll('.testimonial-slider');

    if (el.length > 0) {
      var slider = tns({
        container: '.testimonial-slider',
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
        autoplayButtonOutput: false
      });
    }
  };
  tinyslider();

  // Function to handle quantity increase/decrease
  var sitePlusMinus = function() {
    var value,
      quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
      var increase = quantityContainer.getElementsByClassName('increase')[0];
      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
    }

    function init() {
      for (var i = 0; i < quantity.length; i++ ) {
        createBindings(quantity[i]);
      }
    };

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