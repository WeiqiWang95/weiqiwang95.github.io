$(document).ready(function() {



$('.image1').click(function(){
  $('.paragraph1').toggleClass('yellow');
  });

  $('.image2').click(function(){
  $('.paragraph2').toggleClass('green');
  });

  $('.image3').click(function(){
  $('.paragraph3').toggleClass('blue');
  });

  $('.image4').click(function(){
  $('.paragraph3').toggleClass('purple');
  });

  $('.image5').click(function(){
  $('.paragraph4').toggleClass('red');
  });

  $('.image6').click(function(){
  $('.paragraph4').toggleClass('pink');
  });

  $('.image7').click(function(){
  $('.paragraph6').toggleClass('orange');
  });

  $('.image8').click(function(){
  $('.paragraph10').toggleClass('yellow');
  });

  $('.image9').click(function(){
  $('.paragraph11').toggleClass('green');
  });

  $('.image10').click(function(){
  $('.paragraph14').toggleClass('blue');
  });


  $('.number').mouseenter(function() {
     $('.footnote').addClass('showme');
   });

   $('.number').mouseleave(function() {
     $('.footnote').removeClass('showme');
   });









  });
