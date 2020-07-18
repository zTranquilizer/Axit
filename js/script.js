function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu-header, .header").toggleClass("active-menu");
    $("body").toggleClass("lock");
  });
  $(".full-main__img-scroll").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 1500);
  });
  $(".but-up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 115) {
    $(".header").addClass("fixed-header");
    $(".full-main__body").addClass("margin");
  } else {
    $(".header").removeClass("fixed-header");
    $(".full-main__body").removeClass("margin");
  }
  if ($(window).width() > 767) {
    if ($(this).scrollTop() > 400) {
      $(".row-agency__item").slideDown(400, "linear");
    } else {
      $(".row-agency__item").slideUp(600, "linear");
    }
    if ($(this).scrollTop() != 0) {
      $(".but-up").fadeIn(300, "linear");
    } else {
      $(".but-up").fadeOut(300, "linear");
    }
  }

  if ($(this).scrollTop() > 0) {
    $(".but-up").addClass("unhidden");
  }
});
$(window).on("load", function () {
  $(".wrapper").addClass("loaded");
});
