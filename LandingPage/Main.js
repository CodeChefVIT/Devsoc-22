gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".main-container",5,{x:-window.innerWidth})
.from("#About .about-content-container",5,{opacity:0,scale:2})

.to(".main-container",5,{x:-window.innerWidth*2})
.from("#Tracks h1",5,{opacity:0,scale:2, skewX:50})

.to(".main-container",5,{x:-window.innerWidth*2})
.from("#Tracks .TrackContainer img",5,{opacity:0,scale:2, skewX:-30})

.to(".main-container",5,{x:-window.innerWidth*3})
.from("#Prize h1",5,{opacity:0,scale:3})

ScrollTrigger.create({
    animation:tl,
    trigger:".main-container",
    start:"center center",
    end:"+=4000",
    scrub:true,
    pin:true
})
