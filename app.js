// Get the button
let mybutton = document.getElementById("arrow-up");

// When the user scrolls down 600px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

}