(function ($) {
  // Navigation scrolls
  $(".navbar-nav li a").on("click", function (event) {
    $(".navbar-nav li").removeClass("active");
    $(this).closest("li").addClass("active");
    var $anchor = $(this);
    var nav = $($anchor.attr("href"));
    if (nav.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );

      event.preventDefault();
    }
  });
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse.collapse").removeClass("in");
  });

  // Add smooth scrolling to all links in navbar
  $("a.mouse-hover, a.get-quote").on("click", function (event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    }
  });

  $(".expert-slide").slick({
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  if ($(".slick-next").length > 0) $(".slick-next")[0].innerHTML = "";

  if ($(".slick-prev").length > 0) $(".slick-prev")[0].innerHTML = "";

  $("#scroll-register").on("click", function (e) {
    var $id = $('#register-promote')
    e.preventDefault();
    if(window.innerWidth < 414) {
      $('body, html').animate({scrollTop: $id.offset().top - 7 / 100 * window.innerHeight})
    } else {
      $('body, html').animate({scrollTop: $id.offset().top - 40 / 100 * window.innerHeight})
    }
    
  });
})(jQuery);
