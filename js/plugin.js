/*jslint devel: true */
function hoverBtn() {
    "use strict";
    document.getElementById("headBtn").style.backgroundColor = "#00BCCD";
}
function afterHover() {
    "use strict";
    document.getElementById("headBtn").style.backgroundColor = "#00BC8A";
}
function show() {
    "use strict";
    document.getElementById("showHidden").style.visibility = "visible";
}
function hide() {
    "use strict";
    document.getElementById("showHidden").style.visibility = "hidden";
}
var n = 0;
function timeHover() {
    "use strict";
    n = n + 1;
    document.getElementById("pic1").innerHTML = n;
}
function showphoto() {
    "use strict";
    document.getElementById("pic3").style.visibility = "visible";
}
function hidephoto() {
    "use strict";
    document.getElementById("pic3").style.visibility = "hidden";
}
function changeColor() {
    "use strict";
    document.getElementById("changeColor").style.color = "#00BC8A";
}
function login() {
    "use strict";
    var name = prompt("Enter Your User Name : ");
    if (name === "Hazem") {
        window.location = "index.html";
    } else {
        alert("Your User Name is Incorrect !");
    }
}