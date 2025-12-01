const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Fixed GSAP animation
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part1", // Fixed class name (was .part-1)
    start: "top top", // Better starting point
    end: "bottom top", // Better ending point
    scrub: true,
    markers: true, // Keep for debugging, remove when working
    pin: true,
    anticipatePin: 1, // Helps with pinning
  }
})

// Consolidated animations
tl.to(".rotating_area", {
  rotate: -15,
  scale: 0.8,
  duration: 1 // Added duration for clarity
})

// Removed duplicate rotation (you already rotated .rotating_area)
// Added column animations with proper timing
tl.to(".column-2", {
  marginTop: "5%",
  duration: 1
}, "-=1") // Start at the same time as previous animation

tl.to(".column-3", {
  marginTop: "-2%",
  duration: 1
}, "-=1")

tl.to(".column-4", {
  marginTop: "-8%",
  duration: 1
}, "-=1")

tl.to(".column-5", {
  marginTop: "-10%",
  duration: 1
}, "-=1")

tl.to(".overlay-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-hover h2",{
    delay: -0.4,
    width:"100%",
})
