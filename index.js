if(window.innerWidth>=992){
   var aTag= document.querySelectorAll("nav .nav-item,nav p")
//    .classList.add("text-light")
    // document.querySelectorAll
    aTag.forEach((itm)=>{
        itm.classList.add("text-light")
    })
}
else{
    aTag.forEach((itm)=>{
        itm.classList.remove("text-light")
    })
}