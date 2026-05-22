import "./style.scss"
// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
 import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';


import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero h1", {
    x: -500,
    opacity: 0,
    duration: 1,
    ease: "elastic.out(1,0.3)",
    delay:2
})

gsap.from(".navbar-nav a", {
    y: -100,
    duration: 1,
    opacity: 0,
    ease: "none",
    stagger: 0.1,
})

gsap.from("#hero .col-12:last-child", {
    x: 500,
    opacity: 0.5,
    duration: 1,
    ease: "none",
    delay: 3
})

gsap.from("#servizi h2", {
    x: -500,
    opacity: 0,
    duration: 1,
    scrollTrigger: "#servizi h2",
})

gsap.from("#servizi .col-12", {
    scale: 0.5, 
    duration: 1,
    opacity: 0.5,
    ease: "none",
    stagger: 1,
    scrollTrigger:{
        trigger: "#servizi",
        //markers: true, // solo per sviluppo
        start: "top 50%",
        end: "bottom 80%",
        toggleActions: "play none none reset"
    }
})

gsap.from("#portfolio .col-12 ", {
    scale: 0.8,
    duration: 1,
    opacity: 0.5, 
    stagger: 0.1,
    ease: "none",
    scrollTrigger: {
        trigger: "#portfolio .col-12 a",
        scrub: true,
    }
})


let formContatti = document.querySelector ("#contatti form");

formContatti.addEventListener("submit", (e)=>{
    e.preventDefault(); //tecnica ajax

    if (!formContatti.checkValidity()){
        formContatti.classList.add("was-validated");
        return
    }

    let datiForm = new FormData(formContatti);
    let endpoint = "send.php";

    fetch(endpoint, {
        method: "POST",
        body: datiForm
    })
    .then( response => response.json() )
    .then( data => {
        console.log(data)
    })
    .catch( error => console.log(error) )
    
})