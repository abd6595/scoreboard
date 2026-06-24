var twel = document.getElementById("twel").textContent = 0;
var five = document.getElementById("five").textContent = 0;

// var two = document.getElementById("five");
    function incremento() {
    
     var one = ++twel;
    document.getElementById("twel").textContent = one;
}
function incrementt() {
    var wa = twel += 2;
    document.getElementById("twel").textContent = wa;
}

function incrementtr() {
    var lo = twel += 3
    document.getElementById("twel").textContent = lo;
}




    function incrementon() {
    
     var two = ++five;
    document.getElementById("five").textContent = two;
}

function incrementtn() {
    var go = five += 2;
    document.getElementById("five").textContent = go;
}

function incrementtrn() {
    var come = five += 3
    document.getElementById("five").textContent = come;
}






function reset() {
    // var rty = document.getElementById("twel");
    // var rry = document.getElementById("five");
    // if (rty > rry) {
    //     document.getElementById("newg").textContent = twel;

    // }else if (rty < rry) {
    //     document.getElementById("newg").textContent = five;
    // }else {
    //     document.getElementById("newg").textContent = "DRAAW";
    // }
    
    document.getElementById("twel").textContent = twel * 0;
    document.getElementById("five").textContent = five * 0;
    
    twel = 0;
    five = 0;
}