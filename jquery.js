jQuery(document).ready(function($) {


  $("nav div a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" +  $(this).data('value')).offset().top
  },1400);
  });

  /*function toggleClass(elem) {
    $(elem).toggleClass('active');
  };*/


});
