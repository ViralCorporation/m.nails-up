function Scrolldown() {
    window.scroll(0, 300);
}

window.onload = Scrolldown;

if (document.readyState) {
    document.onreadystatechange = checkstate;
} else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", saydone, false);
}

function checkstate() {
    if (document.readyState == "complete" || document.readyState == "complete") {
        document.getElementById("page").style.display = "flex";
    }
}

function saydone() {
    document.getElementById("page").style.display = "flex";

}
function sendEmail(){
    window.location.href = "mailto:info@nailsup.com.br?subject=Subject&body=message%20goes%20here";
}
function sendEmailHelp(){
    window.location.href = "mailto:help@nailsup.com.br?subject=Subject&body=message%20goes%20here";
}


setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);


addEventListener("load", function() {
    window.scrollTo(1, 0);
}, false);
