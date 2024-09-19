$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  if ($(window).width() >= 992) {
    sal({
      once: true,
    });
  } else {
    sal({
      once: true,
      disabled: true,
    });
  }
  /************************************ Header ************************************/
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").fadeOut(300);
      $(".overlay").fadeOut(300);
      $(".nav,.menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    }
  });
  $(".menu-btn").on("click", function (e) {
    $(".navbar").fadeToggle(300);
    $(".overlay").fadeToggle(300);
    $(".nav,.menu-btn").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".overlay").on("click", function (e) {
    $(".navbar").fadeOut(300);
    $(".overlay").fadeOut(300);
    $(".nav,.menu-btn").removeClass("active");
    $("body").removeClass("overflow");
  });
  /************************************ societies Slider ************************************/
  var societiesSwiper = new Swiper(".societies-slider .swiper", {
    a11y: {
      enabled: false,
    },
    pagination: {
      el: ".societies-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".societies-slider .swiper-btn-next",
      prevEl: ".societies-slider .swiper-btn-prev",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ partners Slider ************************************/
  var partnersSwiper = new Swiper(".partners-slider .swiper", {
    a11y: {
      enabled: false,
    },
    grid: {
      fill: 'row',
      rows: 2
    },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".partners-section .swiper-pagination",
      clickable: true,
    },
    loop: true,
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html").css("scroll-behavior", "unset");

    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "swing"
    );
    setTimeout(() => {
      $("html").css("scroll-behavior", "smooth");
    }, 1000);
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
