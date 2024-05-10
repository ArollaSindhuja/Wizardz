function page1Annimation(){
    var tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.2,
})

tl.from(".center-part1 h1",{
    x:-50,
    opacity:0,
    // delay:0.5,
    duration:0.5,
    
},"-=0.3")

tl.from(".center-part1 p",{
    x:-30,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    x:50,
    opacity:0,
    duration:0.4
},"=-1")

tl.from(".section1bottom img",{
    y:20,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.15
},"-=0.5")

}
page1Annimation()

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 0",
        scrub:2,
    }
})
tl2.from(".services",{
    x:-300,
    opacity:0,
})
tl2.from("#box1",{
    x:-500,
    opacity:0,
    duration:0.5,
},"anim1")
tl2.from("#box2",{
    x:500,
    opacity:0,
    duration:0.5,
},"anim1")
tl2.from("#box3",{
    x:-500,
    opacity:0,
    duration:0.5,
},"anim2")
tl2.from("#box4",{
    x:500,
    opacity:0,
    duration:0.5,
},"anim2")
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 0",
        scrub:1,
    }
})
tl3.from(".section3-part1",{
    y:50,
    opacity:0.2,
    durtion:0.2,
})
tl3.from(".sectin3-part2",{
    x:-50,
    opacity:0,
    duration:2,
})
tl3.from(".section3-part3",{
    y:-50,
    opacity:0,
    duration:1,
    delay:1
})