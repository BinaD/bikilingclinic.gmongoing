function navigation() {
    var area = document.querySelector(".nav");

    if (area.style.display == "none") {
        area.style.display = "block";
    } else {
        area.style.display = "none";
    }
}

$(function () {
    $('.bxslider').bxSlider({
        captions: true,
        slideWidth: 1900,
        auto: true

    });
});