const navList = document.getElementsByClassName('nav_item')

;[...navList].forEach(Element =>{
    Element.addEventListener("click", function(){
        ;[...navList].forEach(child => {
            child.classList.remove("active_nave")
        })
        this.classList.add("active_nave")
    })
})

var header = document.getElementsByClassName("header_nav")[0];
var sticky = header.offsetTop;


window.addEventListener('scroll', function () {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})

$('.video_popup').magnificPopup({
    type: 'iframe'
});


$('.gallary_image').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});



// sidebar

var toggleBtn = document.getElementsByClassName("mobile_toggler")[0]
var headerSidebar = document.getElementsByClassName("header_sidebar")[0]
var headerSidebarContent = document.getElementsByClassName("sidebar_content")[0]
var sideBarCross = document.getElementsByClassName("sidebar_cross")[0]

toggleBtn.addEventListener("click", function(){
    headerSidebar.style.cssText = "display: block; opacity: 1"
    headerSidebarContent.style.cssText = "right: 0px"
})

sideBarCross.addEventListener("click", function(){
        headerSidebar.style.cssText = "display: none; opacity: 0"
        headerSidebarContent.style.cssText = "right: -100%"
})


var playListToggle = document.getElementById("playlist_toggle")
var playListSide = document.getElementById("playlist_sidebar")

// playListToggle.addEventListener("click", function () {
//     playListSide.classList.toggle("active_sidebar")
// })
