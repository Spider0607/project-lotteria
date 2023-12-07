$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 6,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 5,
      },
    },
  });
});
