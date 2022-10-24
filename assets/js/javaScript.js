var toggleNav = document.querySelectorAll(".toggle_menu")
// var subNav = document.querySelectorAll(".drop_nav")


toggleNav.forEach(currentItem => {
     currentItem.addEventListener("click", function () {
         currentItem.classList.toggle("active_item");
     })
});


let loreText = document.getElementById('lorem_text')

loreText.setAttribute("title", "name")

const buttonChange = document.getElementById('buttonChange')
const popUp = document.getElementById('popup')
const cross = document.getElementById('cross')

buttonChange.addEventListener("click", function(){
    popUp.style.cssText = "display: flex"
})

cross.addEventListener("mouseover", function(){
    popUp.style.cssText = "display: none"
})


var x = parseFloat('9.6560000000000');

console.log(x.toFixed(10))


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

var result = numberWithSpaces(parseFloat(1258485684))
console.log(result);