var timeout;
var slide_index = 0;

var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot")

show_slides();

function show_slides() {
    var i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slide_index++;

    if (slide_index > slides.length) {
        slide_index = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " dot-active";
    timeout = setTimeout(show_slides, 5000);

}

function current_slide(index) {
    var i;

    if (index > slides.length) {
        index = 1

    } else if ( index < 1) {
        index = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    slide_index = index;
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " dot-active";

    clearTimeout(timeout);
    timeout = setTimeout(show_slides, 5000)
}