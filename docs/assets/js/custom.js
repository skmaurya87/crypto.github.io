$(document).ready(function(){
    $(".sliderBtn").click(function(){
     $(".left-sidebar").toggleClass("active");
     $(this).toggleClass("cross");
    });


    $(".set > .parent-drop").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".slide-submenu")
          .slideUp(200);
        $(".set > .parent-drop .icof")
          .removeClass("fa-angle-up")
          .addClass("fa-angle-down");
      } else {
        $(".set > .parent-drop .icof")
          .removeClass("fa-angle-up")
          .addClass("fa-angle-down");
        $(this)
          .find(".icof")
          .removeClass("fa-angle-down")
          .addClass("fa-angle-up");
        $(".set > .parent-drop").removeClass("active");
        $(this).addClass("active");
        $(".slide-submenu").slideUp(200);
        $(this)
          .siblings(".slide-submenu")
          .slideDown(200);
      }
    });



$(".accordinLink>a") .click (function(){ 
  $(this) .parents('#accordion2') .find('.collapse').slideUp(300);
  $(this) .parents('.card') .find('.collapse').slideDown(300);
  $(this) .parents('#accordion2') .find('.card-header').removeClass("active");
  $(this) .parents('.card') .find('.card-header').addClass("active");
});


// if (jQuery(window).width() < 900) {
//   $(".slide-submenu>li>a").click(function(){
//   jQuery(".left-sidebar").addClass("active");
// });
// } 

  });





//   function checkWidth() {
//     if ($(window).width() < 1025) {
//         $(".slide-submenu>li>a").click(function(){
//           $(".left-sidebar").addClass("active-sm");
//         });
//     }
// }
// $(window).resize(checkWidth);