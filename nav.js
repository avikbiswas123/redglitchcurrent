let menu=document.querySelector(".hamburger")
let slider=document.querySelector(".slider")
console.log(typeof(menu));
menu.addEventListener('click',()=>{


let side=document.querySelector(".sidemenu")
console.log(side);
side.style.display="block"
menu.style.display="none"
slider.style.display="block"
})
let close=document.querySelector(".close")
close.addEventListener("click",()=>{

let side=document.querySelector(".sidemenu")

console.log(side);

side.style.display="none"
menu.style.display="block"
})
let links=document.querySelector(".right ul li a ")
links.addEventListener('click',(e)=>{
console.log(e);



})