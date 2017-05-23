$(document).ready(function() {



  $('.cloud').mouseenter(function() {
     $('.footnote').addClass('showme');
   });

   $('.cloud').mouseleave(function() {
     $('.footnote').removeClass('showme');
   });

// toggleClass adds the color green on the first click, and then removes it.
  $('.image1').click(function(){
  $('.paragraph1').toggleClass('green');
  });

  $('.image2').click(function(){
  $('.paragraph2').toggleClass('blue');
  });

  $('.image3').click(function(){
  $('.paragraph3').toggleClass('red');
  });











  });
