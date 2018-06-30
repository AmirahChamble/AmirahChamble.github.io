/* Everything regarding the Particle Background below*/

window.onload = function() {
   Particles.init({
    selector : ".particles-js",
    color: ["#f3f6b4", "#57b9c6", "#3c34d2", "#fdf3bf", "#fbddc5" , "#d523c6"],
    connectParticles : false,
    sizeVariations: 10 ,
    maxParticles : 150,
    speed: .5,
    hover: "bubble",


// options for breakpoints
 responsive: [
   {
     breakpoint:
768
,
     options: {
       maxParticles:
200
,
       color:
'#48F2E3'
,
       connectParticles:
false
     }
   }, {
     breakpoint:
425
,
     options: {
       maxParticles:
100
,
       connectParticles:
true
     }
   }, {
     breakpoint:
320
,
     options: {
       maxParticles:
0

// disables particles.js
     }
   }
 ]

  });

};


/** *^^^^^ this requires the following javascript library to work:
https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.js
*/
