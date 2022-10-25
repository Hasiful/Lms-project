const accordian = document.getElementsByClassName('accordion_item')

;[...accordian].forEach(element => {
    element.addEventListener('click', function(){
        ;[...accordian].forEach(child => {
            child.classList.remove("active-accordion")
            this.classList.add("active-accordion")
        });
    })
});


$('.video_popup').magnificPopup({
    type: 'iframe'
});