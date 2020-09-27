function function_image() {
    setTimeout(functie_aux, 2500);
}

function functie_aux() {
    var obj = document.getElementById("photo1");
    obj.style.transition = "all 1s";
    obj.style.opacity = 1;
}
