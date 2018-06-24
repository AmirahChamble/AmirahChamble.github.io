jQuery(document).ready(function($) {


  $("nav div a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" +  $(this).data('value')).offset().top
  },1000)
  })
});


/*************Canvas**************/
/* Everything regarding the Particle Background below*/
var particles;

particles = Particles.init({
  selector : ".particlejs",
  color: ["#f3f6b4", "#57b9c6", "#3c34d2", "#fdf3bf", "#fbddc5" , "#d523c6"],
  connectParticles : false,
  sizeVariations: 4 ,
  maxParticles : 150,
  speed: .2
});
/** *^^^^^ this requires the following javascript library to work:
https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.js
color: ["#f3f6b4", "#57b9c6", "#3c34d2", "#fdf3bf", "#fbddc5" , "#d523c6"],

*/
