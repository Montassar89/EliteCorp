$(function () {
  'use strict';
  // button top scroll
  var scrollButton = $('.top-button');

  $(window).scroll(function (){

    if ($(this).scrollTop() >= 700){scrollButton.show();}

    else{scrollButton.hide();}

  });

  scrollButton.click(function (){

      $('html,body').animate({scrollTop:0},1000);
 });
  // navbar item
  $('.nav-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  // slider height
  var winH = $(window).height(),
      uppH = $('.upper-bar').innerHeight(),
      navH = $('.navbar').innerHeight();
  $('.slider,.carousel-item').height(winH - (uppH + navH));
  // featured shuff
  $('.featured-work ul li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    if( $(this).data('class') === 'all'){
      $('.box .col-md').css('opacity',1);
    } else{
      $('.box .col-md').css('opacity', '.08');
      $($(this).data('class')).parents().css('opacity',1)
    }
  });
});
