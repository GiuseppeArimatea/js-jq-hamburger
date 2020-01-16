
$("a").click(
  function () {
    $(".hamburger-menu").fadeIn(2000);
  }
);
$(".hamburger-menu a").click(
  function () {
      $(".hamburger-menu").fadeOut('fast');
  }
);
