let menu=document.querySelector(".hamburger")
console.log(typeof(menu));
menu.addEventListener('click',()=>{


let side=document.querySelector(".sidemenu")
console.log(side);
side.style.display="block"
})
let close=document.querySelector(".close")
close.addEventListener("click",()=>{

let side=document.querySelector(".sidemenu")

console.log(side);

side.style.display="none"
})