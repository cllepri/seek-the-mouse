const eyes=[...document.querySelectorAll(".eye")]

    let posx_mouse=0
    let posy_mouse=0
    let n=0
window.addEventListener("mousemove",(evt)=>{
    posx_mouse=evt.clientX
    posy_mouse=evt.clientY
   
    let rot=(n+(Math.atan2(posy_mouse,posx_mouse) * 180/Math.PI))
   
    eyes.forEach( (o) => {
        o.style.transform=`rotate(${rot}deg)`

   
    });
    
})

