
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