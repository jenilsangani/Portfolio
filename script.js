const observer = new IntersectionObserver(
  ([e]) => e.target.toggleAttribute("stuck", e.intersectionRatio < 1),
  { threshold: [1] }
);

function afterLoad() {
  setImgs();
}

function setImgs() {
  let host = window.location.host;
  if (host === "jenilsangani.github.io") {
    let imgs = document.querySelectorAll("img");
    Object.keys(imgs).map((key) => {
      imgs[key].src = imgs[key].src.replace(
        host,
        "jenilsangani.github.io/Portfolio"
      );
    });
    let dcv = document.querySelector("#dcv");
    if (dcv) {
      dcv.href = dcv.href.replace(host, "jenilsangani.github.io/Portfolio");
    }
  }
}

observer.observe(document.querySelector(".navbar"));
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
