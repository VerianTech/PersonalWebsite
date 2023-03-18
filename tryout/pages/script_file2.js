function functie_load() {
    var visited = localStorage.getItem("visited");
    if (visited == "false") {
        localStorage.setItem("visited", "true");
        function_image();
        function_body();
    } else {
        localStorage.setItem("visited", "false");
        functie_aux();
        functie_aux2();
    }
    
    function function_image() {
        setTimeout(functie_aux, 4000);
    }

    function functie_aux() {
        var obj = document.getElementById("photo1");
        obj.style.transition = "all 2s";
        obj.style.opacity = 1;
    }
    
    function function_body() {
        setTimeout(functie_aux2, 4000);
    }
     
    function functie_aux2() {
        var obj1 = document.getElementById("name");
        obj1.style.transition = "all 2s";
        obj1.style.opacity = 1;
        setTimeout(functie3, 1000);
    }

    function functie3() {
        var obj2 = document.getElementById("para1");
        obj2.style.transition = "opacity 2s";
        obj2.style.opacity = 1;
    }
}

function button1() {
    var x = document.getElementById("languages");
    var y = document.getElementById("technologies");
    var z = document.getElementById("operatingsys");
    x.style.opacity = 1;
    y.style.opacity = 0;
    z.style.opacity = 0;
}

function button2() {
    var x = document.getElementById("languages");
    var y = document.getElementById("technologies");
    var z = document.getElementById("operatingsys");
    x.style.opacity = 0;
    y.style.opacity = 1;
    z.style.opacity = 0;
}

function button3() {
    var x = document.getElementById("languages");
    var y = document.getElementById("technologies");
    var z = document.getElementById("operatingsys");
    x.style.opacity = 0;
    y.style.opacity = 0;
    z.style.opacity = 1;
}