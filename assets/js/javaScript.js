const navList = document.getElementsByClassName('nav_item')

;[...navList].forEach(Element =>{
    Element.addEventListener("click", function(){
        ;[...navList].forEach(child => {
            child.classList.remove("active_nave")
        })
        this.classList.add("active_nave")
    })
})


$('.video_popup').magnificPopup({
    type: 'iframe'
});