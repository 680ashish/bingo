// gsap animations

gsap.registerPlugin(ScrollTrigger);
// var tl=gsap.timeline();
gsap.to(".d-md-block h5, .d-md-block p",{
  y:-40,
  duration:0.5,
  delay:0.5,
  marginTop:0,
  opacity:1,
  stagger:0.4
});

gsap.to(".cards-container .cards, .second-section-content .text",{
  y:5,
  duration:0.2,
  delay:0.2,
  marginTop:0,
  opacity:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".cards-container .cards, .second-section-content .text",
    
  }
});


gsap.to(".second-section-img",{
  x:10,
  duration:0.2,
  delay:0.1,
  opacity:1,
  scrollTrigger:{
    trigger:".second-section-img",
    // scrub:true

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