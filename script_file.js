function function1() {
    localStorage.setItem("visited", "false");
    setTimeout(resizeIframe, 1500, document.getElementById("frame1"));
    var x = document.getElementsByClassName("long_line");
    var y = document.getElementById("short_line");
    var z = document.getElementById("second_container");
    var q = document.getElementsByClassName("menu_item");
    var i;

    z.style.transition = "all 2s";
    y.style.transition = "all 2s";
    for (i = 0; i < x.length; i++) {
        x[i].style.transition = "all 2s";
    }
    for (i = 0; i < q.length; i++) {
        q[i].style.transition = "opacity,font-size 2s";
    }
}

function resizeIframe(obj) {
    obj.style.transition = "all 4s, opacity 0s";
    obj.style.width = 85 + '%';
    obj.style.height = 90 + '%';
    obj.style.opacity = 1;
}

function function_iframe(obj) {
    var x = document.getElementById("frame1");
    if (obj == "home") {
        x.src = "pages/home.html";
    }
    if (obj == "skills") {
        x.src = "pages/skills.html";
    }
    if (obj == "education") {
        x.src = "pages/education.html";
    }
    if (obj == "hobbies") {
        x.src = "pages/hobbies.html";
    }
    if (obj == "interests") {
        x.src = "pages/interests.html";
    }
    if (obj == "contact") {
        x.src = "pages/contact.html";
    }
    localStorage.setItem("visited", "true");
}