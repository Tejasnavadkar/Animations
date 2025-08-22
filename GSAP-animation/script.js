
// console.log(gsap)

// .to method signifies that we want our object to animate from its original state as defined by the HTML and CSS to the final state as defined by our javascript file. The .from method reverses this.

let tl = gsap.timeline()

gsap.to(".box",{
    x:1200,   // move from current position to 200px on x-axis
    duration:2.5,
    delay:1,
    repeat:-1,
    yoyo: true,    // go back to original position after each animation
    ease: "power1.inOut" // optional, for smoother motion
})


gsap.from("h2",{ // from runs final position to initial/default position opposite of .to
    y:100,
    opacity:0,
    duration:1.2,
    delay: 0.5,
    stagger: 0.5 // 0.1 seconds between when each "h2" element starts animating
})


// A gsap.fromTo() tween lets you define BOTH the starting and ending values for an animation (as opposed to from() and to() tweens which use the current state as either the start or end). This is great for having full control over an animation, especially when it is chained with other animations. For example:

gsap.fromTo(".box", { opacity: 0 }, { opacity: 1, duration: 2 }); //opcity 0 to 1


// tl make animation synchronously one by one 
tl.to("#red",{
    x:1200,   // move from current position to 200px on x-axis
    duration:2.5,
    delay:1,
})
tl.to("#green",{
    x:1200,   // move from current position to 200px on x-axis
    duration:2.5,
    
})
tl.to("#blue",{
    x:1200,   // move from current position to 200px on x-axis
    duration:2.5,
 
})

