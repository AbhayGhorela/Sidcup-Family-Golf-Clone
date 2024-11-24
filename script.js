var cusr = document.querySelector("#cursor");
var Cblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cusr.style.left = dets.x+"px";
    cusr.style.top = dets.y+"px";

    Cblur.style.left = dets.x-250 +"px";
    Cblur.style.top = dets.y-250 +"px";
});

gsap.to("#nav",{
    backgroundColor:"#000",
    duraction:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:2,
    }
})


var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cusr.style.scale = 3;
        cusr.style.border = "1px solid #fff";
        cusr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        cusr.style.scale = 1;
        cusr.style.border = "0px solid";
        cusr.style.backgroundColor = "#95c11e"
    })
})


gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

gsap.from(".cards", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2,
        // markers:true
    }
  })

  gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
        // markers:true
    }
  })

  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      start:"top 70%",
      end:"top 75%",
      scrub:3,
      // markers:true
  }
  })