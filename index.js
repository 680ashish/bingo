// gsap animations
function loaderTime(){
  var a=0;
  setInterval(() => {

    a+= Math.floor(Math.random()*20);
    a++;
    if(a<=100){
      document.querySelector(".loader").innerHTML= a + "%";
      // console.log(a)
    }
    else if(a>90){
      a=100;
      document.querySelector(".loader").innerHTML= a + "%";

    }
    else{
      a=100;
    }
    
  }, 180);
}

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
loaderTime();


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
    trigger:".cards-container",
    // scroller:"body",
    start: "top center", // start the animation when the top of the trigger element reaches the center of the viewport
    end: "bottom center", // end the animation when the bottom of the trigger element reaches the center of the viewport
    // scrub: true,
    // markers: true 
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

const cardsH3 = document.querySelectorAll('.details-cards h3');
function animateH3(cardH3){
  gsap.to(cardH3,{
    innerHTML:100,
    duration:0.5,
    roundProps:'innerHTML',
    ease:'power1.out',
    delay:0.2
  });
}
// check if user is in viewport
function isElementInViewport(el){
  const rect = el.getBoundingClientRect();
  return(
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth|| document.documentElement.clientWidth) 
  );
}

//fucntion to handle scroll event
function handleScroll(){
  cardsH3.forEach(cardH3 =>{
    if(isElementInViewport(cardH3)){
      animateH3(cardH3);
    }
  })
}

window.addEventListener('scroll',handleScroll);


//darkmode bc
const darkmodeToggle = document.querySelector('.darkmode');
darkmodeToggle.addEventListener('click',()=>{
  // console.log("bru");
  alert("darkmode banane me maut aa rhi this isliye chod diya .. please fuk off !")
})