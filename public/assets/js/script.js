$(".show-nav").click(function () {
  $(".menu").addClass("active");
});
$(".close-menu").click(function () {
  $(".menu").removeClass("active");
});
// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > 50) {
    $(".header").addClass("navbar-fixed");
  } else {
    $(".header").removeClass("navbar-fixed");
  }
});

// ===============latest product =============
var swiper = new Swiper(".product-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    500: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
// =============== multi countdown=======
$("[data-countdown]").each(function () {
  var $this = $(this),
    finalDate = $(this).data("countdown");

  var day = $this.find(".day");
  var hour = $this.find(".hour");
  var min = $this.find(".min");
  var sec = $this.find(".sec");

  $this.countdown(finalDate, function (event) {
    $(day).html(event.strftime("%D"));
    $(hour).html(event.strftime("%H"));
    $(min).html(event.strftime("%M"));
    $(sec).html(event.strftime("%S"));
  });
});

// =============== multi countdown end=======
