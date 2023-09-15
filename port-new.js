// let tl = gsap.timeline();

// tl
// .to("#loader",{
//     height:0,
//     duration:2,
//     ease: Expo.easeInOut
// })
// .to("#purple",{
//     height:"100%",
//     duration:2,
//     delay:-2,
//     ease: Expo.easeInOut
// })
// .to("#white",{
//     height:"100%",
//     duration:2,
//     delay:-1.7,
//     ease: Expo.easeInOut
// })
function valueSetters(){
   gsap.set("#nav a",{ y:"-100%", opacity: 0});
   gsap.set("#home span .child",{ y:"100%"})
   gsap.set("#home .row img",{ opacity: 0})
}


function revealToSpan(){
   document.querySelectorAll(".reveal")
   .forEach(function(elem){
       //create two spans 
       let parent= document.createElement("span");
       let child= document.createElement("span");
       //parent and child both sets their respective classes
       parent.classList.add("parent");
       child.classList.add("child");
       //span parent gets child and child gets element details
       child.innerHTML = elem.innerHTML;
       parent.appendChild(child);
       //element replaces its value with parent span
       elem.innerHTML = "";
       elem.appendChild(parent);
   });
}
function  loaderAnimation(){
   
let tl = gsap.timeline();

tl
.from(" #loader  .child span",{
    x :100,
    duration : 1.5,
    // delay: 1,
    stagger:.2,
    ease: Power3.easeInOut
 } )

.to("#loader   .parent .child",{
    y :"-100%",
    duration : 1,
    // delay: 1,
    ease: Circ.easeInOut
 } )
 .to("#loader",{
    height : 0,
    duration : 1,
    // delay: 1,
    ease: Circ.easeInOut
 } )
 .to("#purple",{
    height : "100%",
    top: 0,
    duration : 1,
    delay: -1.0,
    ease: Circ.easeInOut
 } )
 .to("#purple",{
    height : "0%",
    duration : 1,
    delay: -0.5,
    ease: Circ.easeInOut,
    onComplete: function(){
      animateHomepage();
    }
 } )


}


function animateHomepage() {
  


   let tl = gsap.timeline();

   tl
   .to("#nav a",{ 
      y:0,
      opacity: 1,
      stagger: .05,
      ease:Expo.easeInOut
   }) 
   .to("#home .parent .child",{ 
      y:0,
      stagger: .1,
      duration: 2,
      ease:Expo.easeInOut
   }) 
   .to("#home .row img",{ 
      opacity: 1,
      ease:Expo.easeInOut
   }) 

}


revealToSpan();
valueSetters();
loaderAnimation(); 


// document.querySelectorAll(".reveal")
//  .forEach(function(element){
//     let spanParent = document.createElement("span");
//     let spanChild = document.createElement("span");

//     spanParent.classList.add("parent");
//     spanChild.classList.add("child");

//     spanChild.textContent=element.textContent;
//     spanParent.appendChild(spanChild);

//     element.innerHTML="";
//     element.appendChild(spanParent);

//  })