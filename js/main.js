$(document).ready(function() {
$( ".tabs-category" ).tabs();
$( ".tabs-category_2" ).tabs();
$( ".contacts_tabs" ).tabs();

$('.how-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
  {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },

    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      }
    },

  ]
});

$( "#accordion" ).accordion();

$('.free-games-slider').slick({
  infinite: true,
  slidesToShow: 1 ,
  slidesToScroll: 1
});

$('.home-category-sidebar-item h4').click(function(){
  $(this).next().slideToggle( "slow" );
  $(this).toggleClass( "direct3" );
});

$('.hide-things').click(function(e){
  e.preventDefault();
  $(this).prev().slideToggle( "slow" );
  $(this).toggleClass( "direct2" );
  $('.hide-things').html('ПОДРОБНЕЕ');
  $('.direct2').html('СКРЫТЬ');
});





    $(function(){
        $('.colapse-menu-button .c-hamburger').on('click',function(){
          $('.mobile-menu').slideToggle();
        });
    });
        (function() {

              "use strict";

              var toggles = document.querySelectorAll(".c-hamburger");

              for (var i = toggles.length - 1; i >= 0; i--) {
                  var toggle = toggles[i];
                  toggleHandler(toggle);
              };

              function toggleHandler(toggle) {
                  toggle.addEventListener( "click", function(e) {
                      e.preventDefault();
                      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
                  });
              }

   })();



   // ------------

   $(".dropdown_item .dropdown_btn").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_item");
      dropdownBlock = parentBlock.find(".dropdown_item_content");
      if(parentBlock.hasClass("active")) {
        dropdownBlock.slideUp(300);
        parentBlock.removeClass("active");
      } else {
        dropdownBlock.slideDown(300);
        parentBlock.addClass("active");
      }
   });


    
});