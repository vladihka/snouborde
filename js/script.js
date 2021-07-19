$(document).ready(function () {
   $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu").toggleClass('active');
      $("body").toggleClass('lock');
   });
});

$(document).ready(function () {
   $(".snoubords__burger").click(function (event) {
      $(".snoubords__burger").toggleClass('active');
   });
});