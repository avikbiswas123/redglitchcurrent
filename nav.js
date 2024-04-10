let menu=document.querySelector(".hamburger")
console.log(typeof(menu));
menu.addEventListener('click',()=>{


let side=document.querySelector(".sidemenu")
console.log(side);
side.style.display="block"
menu.style.display="none"
})
let close=document.querySelector(".close")
close.addEventListener("click",()=>{

let side=document.querySelector(".sidemenu")

console.log(side);

side.style.display="none"
menu.style.display="block"
})