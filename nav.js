let menu=document.querySelector(".hamburger")
let slider=document.querySelector(".slider")
// console.log(typeof(menu));
menu.addEventListener('click',()=>{


let side=document.querySelector(".sidemenu")
// console.log(side);
side.style.display="block"
menu.style.display="none"
slider.style.display="block"





})
let close=document.querySelector(".close")
close.addEventListener("click",()=>{

let side=document.querySelector(".sidemenu")


side.style.display="none"
menu.style.display="block"
})

    

let activepage=window.location.pathname
 console.log(activepage);
 if (activepage==="/redglitchcurrent/") {
    activepage==="/redglitchcurrent/index.html"
 }
let links=document.querySelectorAll(".right ul li a")
links.forEach(i=>{

if((i.href.includes(`${activepage}`)) && (activepage.endsWith(".html"))) {

console.log(`${activepage}`);
i.classList.add("active")

}



})

