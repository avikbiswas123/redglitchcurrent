
let index=0
slide()
function slide() {
    let i;
    let image=document.getElementsByClassName("image")
    for(i=0;i<image.length;i++){
        
        image[i].style.display="none"
        
        
    }
    index++
    if(index===image.length){index=0}
    image[index].style.display="block"
    setTimeout(slide,2000)
    
}
console.log("%cFuck You! Bitch","@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');color:red;font-size:30px;font-family: \"Bebas Neue\", sans-serif;");