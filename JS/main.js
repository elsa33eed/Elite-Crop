$(function () {
  "use strict";
  // adjust slider height
  var winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider .carousel-item").height(winH - (upperH + navH));

  // featured-work shuffled
  //   $(".featured-work ul li").on("click", function () {
  //     $(this).addClass("active").siblings().removeClass("active");
  //     if ($(this).data("class") === "all") {
  //       $(".shuffle-image .col-md").css("opacity", 1);
  //     } else {
  //       $(".shuffle-image .col-md").css("opacity", 0.07);
  //       $($(this).data("class")).parents().css("opacity", 1);
  //     }
  //   });
});
