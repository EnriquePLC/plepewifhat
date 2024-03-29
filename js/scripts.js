var didScroll;
$(function () {
  "use strict";
  var e = $(window);
  function t() {
    window.scrollTo(0, 0);
  }
  e.on("scroll", function () {
    var t = e.scrollTop(),
      s = $(".navbar"),
      i = $(".navbar.change .logo> img");
    t > 300
      ? (s.addClass("nav-scroll"), i.attr("src", "img/logo-dark.png"))
      : (s.removeClass("nav-scroll"), i.attr("src", "img/logo-light.webp"));
  }),
    $(".navbar .search .icon").on("click", function () {
      $(".navbar .search .search-form").fadeIn();
    }),
    $(".navbar .search .search-form .close").on("click", function () {
      $(".navbar .search .search-form").fadeOut();
    }),
    e.on("scroll", function () {
      var t = e.scrollTop(),
        s = $(".topnav");
      t > 300 ? s.addClass("nav-scroll") : s.removeClass("nav-scroll");
    });
  var s = !1,
    i = $(".topnav.dark"),
    a = $(".topnav.dark .logo img");
  $(".topnav .menu-icon").on("click", function () {
    (s = !s),
      $(".hamenu").toggleClass("open"),
      s
        ? ($(".hamenu").animate({ left: 0 }),
          $(".topnav .menu-icon .text").addClass("open"),
          i.addClass("navlit"),
          a.attr("src", "img/logo-light.webp"),
          window.addEventListener("scroll", t))
        : ($(".hamenu").delay(300).animate({ left: "-100%" }),
          $(".topnav .menu-icon .text").removeClass("open"),
          i.removeClass("navlit"),
          a.attr("src", "img/logo-dark.png"),
          window.removeEventListener("scroll", t));
  }),
    $(".hamenu .menu-links .main-menu > li").on("mouseenter", function () {
      $(this).css("opacity", "1").siblings().css("opacity", ".5");
    }),
    $(".hamenu .menu-links .main-menu > li").on("mouseleave", function () {
      $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    }),
    $(".main-menu > li .dmenu").on("click", function () {
      $(".main-menu").addClass("gosub"),
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    }),
    $(".main-menu .sub-menu li .sub-link.back").on("click", function () {
      $(".main-menu").removeClass("gosub"),
        $(".main-menu .sub-menu").removeClass("sub-open");
    }),
    new Swiper(".showcase-full .parallax-slider", {
      speed: 1e3,
      autoplay: !0,
      parallax: !0,
      mousewheel: !0,
      loop: !0,
      on: {
        init: function () {
          for (var e = this, t = 0; t < e.slides.length; t++)
            $(e.slides[t])
              .find(".bg-img")
              .attr({ "data-swiper-parallax": 0.75 * e.width });
        },
        resize: function () {
          this.update();
        },
      },
      pagination: {
        el: ".showcase-full .parallax-slider .swiper-pagination",
        type: "fraction",
        clickable: !0,
      },
      navigation: {
        nextEl: ".showcase-full .parallax-slider .next-ctrl",
        prevEl: ".showcase-full .parallax-slider .prev-ctrl",
      },
    });
  new Swiper(".metro .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1e3,
    loop: !0,
    centeredSlides: !0,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 0 },
      640: { slidesPerView: 1, spaceBetween: 0 },
      767: { slidesPerView: 2, spaceBetween: 0 },
    },
    pagination: { el: ".metro .swiper-pagination", type: "progressbar" },
    navigation: {
      nextEl: ".metro .swiper-button-next",
      prevEl: ".metro .swiper-button-prev",
    },
  }),
    new Swiper(".caroul .swiper-container", {
      spaceBetween: 0,
      speed: 1e3,
      loop: !0,
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 0 },
        767: { slidesPerView: 2, spaceBetween: 0 },
        991: { slidesPerView: 3, spaceBetween: 0 },
        1024: { slidesPerView: 4, spaceBetween: 0 },
      },
      pagination: { el: ".caroul .swiper-pagination", type: "progressbar" },
      navigation: {
        nextEl: ".caroul .swiper-button-next",
        prevEl: ".caroul .swiper-button-prev",
      },
    }),
    new Swiper(".slider-bus .swiper-img", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: !0,
      effect: "fade",
      autoplay: { delay: 2500, disableOnInteraction: !1 },
      navigation: {
        nextEl: ".slider-bus .next-ctrl",
        prevEl: ".slider-bus .prev-ctrl",
      },
    }),
    new Swiper(".slider-bus .swiper-content", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      loop: !0,
      autoplay: { delay: 2500, disableOnInteraction: !1 },
      pagination: { el: ".slider-bus .swiper-pagination", type: "fraction" },
      navigation: {
        nextEl: ".slider-bus .next-ctrl",
        prevEl: ".slider-bus .prev-ctrl",
      },
    }),
    new Swiper(".testim-box .swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: !0,
      autoplay: { delay: 2500, disableOnInteraction: !1 },
      pagination: {
        el: ".testim-box .swiper-pagination",
        type: "fraction",
        clickable: !0,
      },
      navigation: {
        nextEl: ".testim-box .next-ctrl",
        prevEl: ".testim-box .prev-ctrl",
      },
    });
  $(".bg-img, section").each(function (e) {
    $(this).attr("data-background") &&
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
  }),
    $(".testimonials .slic-item").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      prevArrow: ".testimonials .prev",
      nextArrow: ".testimonials .next",
      dots: !0,
      autoplay: !0,
    }),
    $(".testim-box .slic-item").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      dots: !0,
      autoplay: !0,
    }),
    $(".team .team-container").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !0,
      prevArrow: ".team .prev",
      nextArrow: ".team .next",
      dots: !1,
      autoplay: !0,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 767, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    $(".blog-curs .blg-swipe").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !0,
      prevArrow: ".blog-curs .prev",
      nextArrow: ".blog-curs .next",
      dots: !1,
      autoplay: !0,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 991, settings: { slidesToShow: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    $(".clients-brand .brands-crs").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !1,
      dots: !1,
      autoplay: !0,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 767, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    }),
    $("a.vid").YouTubePopUp(),
    $(".parallaxie").parallaxie({ speed: 0.2, size: "cover" }),
    $(".justified-gallery").justifiedGallery({
      rowHeight: 400,
      lastRow: "nojustify",
      margins: 15,
    });
  var o = $(".skills-circle .skill"),
    n = $(this).attr("data-value");
  $(".skills-circle .skill").each(function () {
    o.circleProgress({
      startAngle: (-Math.PI / 2) * 1,
      value: n,
      thickness: 2,
      size: 110,
      fill: { color: "#F21D1D" },
    });
  }),
    e.on("scroll", function () {
      $(".skill-progress .progres").each(function () {
        var e = $(this).offset().top + $(this).outerHeight(),
          t = $(window).scrollTop() + $(window).height(),
          s = $(this).attr("data-value");
        t > e && $(this).css({ width: s });
      });
    }),
    $(".number-sec .count").countUp({ delay: 10, time: 500 }),
    $("[data-tooltip-tit]")
      .hover(
        function () {
          $('<div class="div-tooltip-tit"></div>')
            .text($(this).attr("data-tooltip-tit"))
            .appendTo("body")
            .fadeIn("slow");
        },
        function () {
          $(".div-tooltip-tit").remove();
        }
      )
      .mousemove(function (e) {
        $(".div-tooltip-tit").css({ top: e.pageY + 10, left: e.pageX + 20 });
      }),
    $("[data-tooltip-sub]")
      .hover(
        function () {
          $('<div class="div-tooltip-sub"></div>')
            .text($(this).attr("data-tooltip-sub"))
            .appendTo("body")
            .fadeIn("slow");
        },
        function () {
          $(".div-tooltip-sub").remove();
        }
      )
      .mousemove(function (e) {
        $(".div-tooltip-sub").css({ top: e.pageY + 60, left: e.pageX + 20 });
      });
}),
  (wow = new WOW({ animateClass: "animated", offset: 100 })),
  wow.init(),
  $(window).on("load", function () {
    Splitting();
    var e = document.getElementsByClassName("thumparallax");
    new simpleParallax(e, { delay: 1, scale: 1.1 });
    var t = document.getElementsByClassName("thumparallax-down");
    new simpleParallax(t, { orientation: "down", delay: 1, scale: 1.1 }),
      $(".gallery").isotope({ itemSelector: ".items" });
    var s = $(".gallery").isotope();
    $(".filtering").on("click", "span", function () {
      var e = $(this).attr("data-filter");
      s.isotope({ filter: e });
    }),
      $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
      }),
      $("#contact-form").validator(),
      $("#contact-form").on("submit", function (e) {
        if (!e.isDefaultPrevented()) {
          return (
            $.ajax({
              type: "POST",
              url: "contact.php",
              data: $(this).serialize(),
              success: function (e) {
                var t = "alert-" + e.type,
                  s = e.message,
                  i =
                    '<div class="alert ' +
                    t +
                    ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    s +
                    "</div>";
                t &&
                  s &&
                  ($("#contact-form").find(".messages").html(i),
                  $("#contact-form")[0].reset());
              },
            }),
            !1
          );
        }
      });
  });
var lastScrollTop = 0,
  delta = 5,
  navbarHeight = $("#navi").outerHeight();
function hasScrolled() {
  var e = $(this).scrollTop();
  Math.abs(lastScrollTop - e) <= delta ||
    (e > lastScrollTop && e > navbarHeight
      ? $("#navi").css("top", "-100px")
      : e + $(window).height() < $(document).height() &&
        $("#navi").css("top", "0"),
    (lastScrollTop = e));
}
function mousecursor() {
  if ($("body")) {
    const e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");
    let s,
      i = 0,
      a = !1;
    (window.onmousemove = function (o) {
      a ||
        (t.style.transform =
          "translate(" + o.clientX + "px, " + o.clientY + "px)"),
        (e.style.transform =
          "translate(" + o.clientX + "px, " + o.clientY + "px)"),
        (s = o.clientY),
        (i = o.clientX);
    }),
      $("body").on("mouseenter", "a, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      }),
      $("body").on("mouseleave", "a, .cursor-pointer", function () {
        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
          t.classList.remove("cursor-hover"));
      }),
      (e.style.visibility = "visible"),
      (t.style.visibility = "visible");
  }
}
$(window).on("scroll", function (e) {
  didScroll = !0;
}),
  setInterval(function () {
    didScroll && (hasScrolled(), (didScroll = !1));
  }, 250),
  (paceOptions = { ajax: !0, document: !0, eventLag: !1 }),
  Pace.on("done", function () {
    $("#preloader").addClass("isdone"), $(".loading-text").addClass("isdone");
  }),
  $(document).ready(function () {
    "use strict";
    var e = document.querySelector(".progress-wrap path"),
      t = e.getTotalLength();
    (e.style.transition = e.style.WebkitTransition = "none"),
      (e.style.strokeDasharray = t + " " + t),
      (e.style.strokeDashoffset = t),
      e.getBoundingClientRect(),
      (e.style.transition = e.style.WebkitTransition =
        "stroke-dashoffset 10ms linear");
    var s = function () {
      var s = $(window).scrollTop(),
        i = $(document).height() - $(window).height(),
        a = t - (s * t) / i;
      e.style.strokeDashoffset = a;
    };
    s(), $(window).scroll(s);
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 150
        ? jQuery(".progress-wrap").addClass("active-progress")
        : jQuery(".progress-wrap").removeClass("active-progress");
    }),
      jQuery(".progress-wrap").on("click", function (e) {
        return (
          e.preventDefault(),
          jQuery("html, body").animate({ scrollTop: 0 }, 550),
          !1
        );
      });
  }),
  $(function () {
    mousecursor();
  }),
  $(function () {
    "use strict";
    var e = $(".fixed-slider").outerHeight();
    $(".main-content").css({ marginTop: e });
  }),
  $(window).scroll(function () {
    var e = $(this).scrollTop();
    $(".fixed-slider .caption , .fixed-slider .capt .parlx").css({
      transform: "translate3d(0, " + -0.2 * e + "px, 0)",
      opacity: 1 - e / 600,
    });
  }),
  $('[data-carousel="swiper"]').each(function () {
    var e = $(this).find('[data-swiper="container"]').attr("id"),
      t = $(this).find('[data-swiper="pagination"]').attr("id"),
      s = $(this).find('[data-swiper="prev"]').attr("id"),
      i = $(this).find('[data-swiper="next"]').attr("id"),
      a = $(this).data("items"),
      o = $(this).data("autoplay"),
      n = $(this).data("initial"),
      r = $(this).data("loop"),
      l = $(this).data("parallax"),
      c = $(this).data("space"),
      p = $(this).data("speed"),
      d = $(this).data("center"),
      u = $(this).data("effect"),
      w = $(this).data("direction"),
      v = $(this).data("mousewheel"),
      m = {};
    if ($(this).hasClass("showcase-grid"))
      m = {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        },
      };
    if ($(this).hasClass("showcase-carus"))
      m = {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 200 },
        },
      };
    if ($(this).hasClass("showstyle"))
      m = {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      };
    if (
      (a && (m.slidesPerView = a),
      o && (m.autoplay = o),
      n && (m.initialSlide = n),
      d && (m.centeredSlides = d),
      r && (m.loop = r),
      l && (m.parallax = l),
      c && (m.spaceBetween = c),
      p && (m.speed = p),
      v && (m.mousewheel = v),
      u && (m.effect = u),
      w && (m.direction = w),
      s && (m.prevButton = "#" + s),
      i && (m.nextButton = "#" + i),
      t && ((m.pagination = "#" + t), (m.paginationClickable = !0)),
      e)
    )
      new Swiper("#" + e, m);
  });
