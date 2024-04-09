// gsap animations
function loaderTime(){
  var a=0;
  setInterval(() => {
    a+= Math.floor(Math.random()*20);
    if(a<=100){
      document.querySelector(".loader").innerHTML= a + "%";
      console.log(a)
    }
    else{
      a=100;
    }
  }, 150);
}
// loaderTime();



gsap.registerPlugin(ScrollTrigger);
var tl=gsap.timeline();
tl.to(".loader",{
  delay:0.5,
  duration:1,
  onStart:loaderTime()
});
tl.to(".loader",{
  top:'-100vh',
  delay:0.5,
  duration:1.5
})


// tl.from("nav",{
//   y:-100,
//   duration:0.1,
//   delay:0.1,
//   stagger:0.1
// })
tl.from("nav a",{
  y:-100,
  duration:0.1,
  // delay:0.1,
  stagger:0.1
})

tl.to(".d-md-block h5, .d-md-block p",{
  y:-40,
  duration:0.5,
  delay:0.2,
  marginTop:0,
  opacity:1,
  stagger:0.5,
  
});

gsap.from(".second-section-content .text h3, .second-section-content .text p",{
  y:-190,
  duration:0.4,
  delay:0.4,
  opacity:0,
  stagger:0.6,
  scrollTrigger:{
    trigger:".second-section-content",
    scroller:"body",
    // markers:true,
    // pin:true
    // scrub:true
  }
});
gsap.to(".cards-container .cards",{
  y:30,
  duration:0.4,
  delay:0.4,
  opacity:1,
  stagger:0.6,
  scrollTrigger:{
    trigger:".cards-container .cards",
    scroller:"body",
    // scrub:true
  }
});


gsap.from(".second-section-img",{
  x:-100,
  duration:0.3,
  delay:0.4,
  opacity:0,
  scrollTrigger:{
    trigger:".second-section-img",
    scroller:"body"
  }
});


gsap.from(".third-section .text h3, .third-section .text p",{
  y:-200,
  duration:0.4,
  delay:0.4,
  opacity:0,
  // repeat:-1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".third-section .text h3, .third-section .text p",
    scroller:"body",
  }
})

gsap.from(".third-section-img img",{
  y:200,
  duration:0.5,
  delay:0.5,
  opacity:0,

  // repeat:-1,
  scrollTrigger:{
    trigger:".third-section-img img",
    scroller:"body",
  }

})

gsap.from(".third-section-img li,.third-section-img .btn-primary",{
  x:400,
  duration:0.4,
  delay:0.2,
  opacity:0,

  // repeat:-1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".third-section-img li,.third-section-img .btn-primary",
    scroller:"body",
  }
})

gsap.from(".fourth-section-text h3, .fourth-section-text p, .contact-section .btn",{
  y:400,
  duration:0.5,
  delay:0.2,
  marginTop:0,
  opacity:0,
  stagger:0.5,
  scrollTrigger:{
    trigger:".fourth-section-text h3, .fourth-section-text p, .contact-section .btn",
    scroller:"body",
  }
});
function counter(){
  
  let count=0;

  let h3counter= document.querySelectorAll('.details-cards h3');

  setInterval(() => {
    if(count<69){
      count++;
      h3counter.forEach(h3 => {
        h3.innerHTML = count;
      });
  }
  else{
      count=69;
  }
  }, 20);
}
counter();