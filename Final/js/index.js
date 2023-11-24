let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function (){
    openModal();
});

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



//Gallery
const images = document.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = globalIndex;

    image.dataset.status = "active";

    last = { x, y };
}

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
    if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
        const lead = images[globalIndex % images.length],
            tail = images[(globalIndex - 5) % images.length];

        activate(lead, e.clientX, e.clientY);

        if(tail) tail.dataset.status = "inactive";

        globalIndex++;
    }
}

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

/* button to top*/
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var elem = document.getElementById("myvideo");
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}