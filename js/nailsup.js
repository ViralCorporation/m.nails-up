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

function sendEmail() {
    window.location.href = "mailto:info@nailsup.com.br?subject=Subject&body=message%20goes%20here";
}

function sendEmailHelp() {
    window.location.href = "mailto:help@nailsup.com.br?subject=Subject&body=message%20goes%20here";
}

window.onload(createAllServiceCardsOnArray);

setTimeout(function () {
    window.scrollTo(0, 1);
}, 1000);


addEventListener("load", function () {
    window.scrollTo(1, 0);
}, false);

//other scroll thing
if (!window.location.hash && window.addEventListener) {
    window.addEventListener("load", function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    });
    window.addEventListener("touchstart", function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    });
}

$(function () {
    var animation = 'animated bounceIn';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('a.home').on('click', function () {
        $('#home-icon').addClass(animation).one(animationEnd, function () {
            $(this).removeClass(animation);
        });
    });
    $('a.schedulling').on('click', function () {
        $('#schedulling-icon').addClass(animation).one(animationEnd, function () {
            $(this).removeClass(animation);
        });
    });
    $('a.services').on('click', function () {
        $('#services-icon').addClass(animation).one(animationEnd, function () {
            $(this).removeClass(animation);
        });
    });
    $('a.gift').on('click', function () {
        $('#gift-icon').addClass(animation).one(animationEnd, function () {
            $(this).removeClass(animation);
        });
    });
    $('a.help').on('click', function () {
        $('#help-icon').addClass(animation).one(animationEnd, function () {
            $(this).removeClass(animation);
        });
    });
});

$(function () {
    var dialog = document.querySelector('dialog');
    var title = document.getElementById("title-more");
    var info = document.getElementById("content-service-info");

    var showDialogButtonBronze = document.querySelector('#show-dialog-bronze');
    var showDialogButtonBronze1 = document.querySelector('#show-dialog-bronze_1');
    var showDialogButtonBronze2 = document.querySelector('#show-dialog-bronze_2');
    var showDialogButtonEyes = document.querySelector('#show-dialog-eyes');
    var showDialogButtonDep = document.querySelector('#show-dialog-dep');
    var showDialogButtonMassage = document.querySelector('#show-dialog-massage');
    var showDialogButtonSprayTan = document.querySelector('show-dialog-sprayTan');
    var showDialogButtonDetox = document.querySelector('#show-dialog-detox');
    var showDialogButtonPac = document.querySelector('#show-dialog-pac');

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    showDialogButtonBronze.addEventListener('click', function () {

        title.innerHTML = (document.getElementById("bronze-title").innerHTML);
        info.innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });
    showDialogButtonBronze1.addEventListener('click', function () {

        title.innerHTML = (document.getElementById("bronze-title1").innerHTML);
        info.innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });

    showDialogButtonDep.addEventListener('click', function () {

        title.innerHTML = (document.getElementById("dep-title").innerHTML);
        info.innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });

    showDialogButtonMassage.addEventListener('click', function () {

        title.innerHTML = (document.getElementById("massage-title").innerHTML);
        title.innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

    showDialogButtonEyes.addEventListener('click', function () {
        document.getElementById("title-more").innerHTML = (document.getElementById("eyes-title").innerHTML);
        document.getElementById("content-service-info").innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });

    showDialogButtonDetox.addEventListener('click', function () {
        document.getElementById("title-more").innerHTML = (document.getElementById("detox-title").value);
        document.getElementById("content-service-info").innerHTML = (document.getElementById("content-service-info").value);
        dialog.showModal();
    });
    showDialogButtonPac.addEventListener('click', function () {

        document.getElementById("title-more").innerHTML = (document.getElementById("pac-title").innerHTML);
        document.getElementById("content-service-info").innerHTML = (document.getElementById("content-service-info").innerHTML);
        dialog.showModal();
    });
    showDialogButtonSprayTan.addEventListener('click', function () {

        document.getElementById("title-more").innerHTML = (document.getElementById("spray-tan-title").value);
        document.getElementById("content-service-info").innerHTML = (document.getElementById("content-service-info").value);
        dialog.showModal();
    });
});

class Service {

    constructor(name_service, descrition, price, type_service) {
        this.name_service = name_service;
        this.descrition = descrition;
        this.price = price;
        this.type_service = type_service;
    }
}

var list_services = new Array(50);

list_services.push(new Service("Bronzeamento Natural na Galaxia", "Bronzeamento natural com uso pasma", "30", "SPRAY-TAN"));
list_services.push(new Service("Manicure", "Pintura de unhas", "30", "NAILS"));
list_services.push(new Service("Make Up", "Maquiagem basica", "50", "MAKE-UP"));

function createServiceCard(service_name, descrition, price, infoservice) {
    var service_card = '< div class = "content" id = "content "> <div class = "demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn">'
    service_card += '<div class = "mdl-card__title" id = "spray_tan"><h2 class = "mdl-card__title-text" id = "bronze-title" >'
    service_card += service_name;
    service_card += '< /h2> </div> '
    service_card += '<div class = "little_text" ><span class = "mdl-card__supporting-text" > '
    service_card += descrition;
    service_card += '</span> <span id = "show-dialog-bronze"type = "button" class = "more mdl-button" > More < /span> <div class = "mdl-card__actions mdl-card--border" ><a id = "value" > R$'
    service_card += price;
    service_card += '< /a> <a > | < /a> <a id = "time" > 30 min < /a> < /div > </div> <div class = "button mdl-js-button mdl-button--fab mdl-js-ripple-effect " ><i class = "contact material-icons md-24 secondary-color" > add_circle < /i> < /div >'
    service_card += '<dialog class = "mdl-dialog" ><h4 class = "mdl-dialog__title" id = "title-more" > Service < /h4> <div class = "mdl-dialog__content" ><p id = "content-service-info" >'
    service_card += info_service;
    service_card += '</p> < /div > <div class = "mdl-dialog__actions" ><button type = "button" class = "mdl-button close" > Close </button></div>< /dialog > </div>'
    return service_card;
}

function createAllServiceCardsOnArray() {
    for (i in list_services) {
        console.log(i);
        var card = createServiceCard(i.name_service, i.descrition, i.price, i.infoservice);
        if (i.type_service == "SPRAY-TAN") {
            document.getElementById('spraytan').innerHTML += service_card;
        }
    }
}

//Block Autorotate
screen.lockOrientation("landscape");
screen.orientation.lock();
screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;


//Hidding and showing the Services Presentation
function hide_s_prst() {
    document.documentElement.style.setProperty(`--state_s_prst`, 'none');
    document.documentElement.style.setProperty(`--state_s_tbar`, 'block');
    document.documentElement.style.setProperty(`--state_s_box`, '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)');
}

function show_s_prst() {
    document.documentElement.style.setProperty(`--state_s_prst`, 'contents');
    document.documentElement.style.setProperty(`--state_s_tbar`, 'none');
    document.documentElement.style.setProperty(`--state_s_box`, 'none');
}
