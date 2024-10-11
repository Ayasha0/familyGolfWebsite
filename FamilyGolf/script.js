// cursor code starts here
let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");
let navElements = document.querySelectorAll(".nav h4");
let body = document.querySelector("body")

// console.log(navElements);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + "px"
    cursor.style.top = e.y + "px"
    blur.style.left = e.x - 200 + "px"
    blur.style.top = e.y - 200 + "px"
})

// navElements.forEach((ele) => {
//     ele.addEventListener("mouseenter", () => {
//         blur.style.transform = `scale(0.15)`;
//         blur.style.border = `4px solid white`
//         blur.style.backgroundColor = "transparent"
//         blur.style.filter = `blur(0)`

//     })
// })

// navElements.forEach((ele) => {
//     ele.addEventListener("mouseleave", () => {
//         blur.style.transform = `scale(1)`;
//         blur.style.border = "none"
//         blur.style.backgroundColor = "#96c11e3e"
//         blur.style.filter = `blur(50px)`
//     })
// })


// cursor code ends here

// gsap code starts here

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from(".about-us img, .about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})

// gsap.from(".card", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         // markers: true,
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 3
//     }
// })

gsap.from("#quote-left", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote-left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#quote-right", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#quote-left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

// gsap code ends here