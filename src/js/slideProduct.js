import { addClass, removeClass } from "./utils-class";

$(document).ready(function () {
  $(".carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
});
