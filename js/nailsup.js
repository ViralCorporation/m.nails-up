var list_services = [];
var list_car_services = [];

class Service {
    /* Guide Types of Service
        PACK
        DEPIL
        MASSAGE
        NAILS
        MAKEUP
        EYES
        SPRAYTAN
    */
    constructor(name_service, descrition, price, type_service) {
        this.name_service = name_service;
        this.descrition = descrition;
        this.price = price;
        this.type_service = type_service;
        this.hash = name_service.split(" ").join("");
    }
}

/*
-ADDED SERVICES HERE
Guide Types of Service
        PACK
        WAX
        MASSAGE
        NAILS
        MAKE_UP
        EYES
        SPRAY_TAN
Guide to constructor
    name of service, Descrition of service, price, categorie
    */

list_services[0] = new Service("Bronzeamento Natural", "Bronzeamento natural com uso pasma", 39, "SPRAY_TAN");
list_services[1] = new Service("Bronzeamento Natural na Galaxia", "Bronzeamento natural com uso pasma", 39, "SPRAY_TAN");
list_services[2] = new Service("Bronzeamento Natural na Lua", "Bronzeamento natural com uso pasma", 50, "SPRAY_TAN");
list_services[3] = new Service("Bronzeamento Natural na Sol", "Bronzeamento natural com uso pasma", 60.50, "SPRAY_TAN");
list_services[4] = new Service("Manicure", "Pintura de unhas", 50, "NAILS");
list_services[5] = new Service("Make Up", "Maquiagem basica", 50, "MAKEUP");
list_services[6] = new Service("Sombras", "Maquiagem basica", 50, "EYES");
list_services[7] = new Service("Depilação Buço", "Maquiagem basica", 50, "WAX");
list_services[8] = new Service("Pacote Depilação completa", "Maquiagem basica", 50, "PACK");
list_services[9] = new Service("Massagem", "Maquiagem basica", 50, "MASSAGE");
list_services[10] = new Service("Suco Detox", "genginbre", 12, "DETOX");

var started = false;

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

function createServiceCard(service, id) {

    var service_card = '<div class="demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn"><div class="mdl-card__title" id="spray_tan"><h2 class="mdl-card__title-text">' + service.name_service + '</h2></div><div class="little_text"> <span class = "mdl-card__supporting-text" >' + service.descrition + '...</span><span id ="show-dialog-' + service.hash + '" type = "button" class = "more mdl-button dialog_button" > More </span> <div class = "mdl-card__actions mdl-card--border" ><a id = "value"> R$ 3~15 </a> <a> | </a> <a id = "time"> 30 min </a> </div> </div> <div class="button mdl-js-button mdl-button--fab mdl-js-ripple-effect add_button" id="add_service_' + service.hash + '"><i class="contact material-icons md-24 add-remove-color"> add_circle </i></div><dialog class = "mdl-dialog bronze" ><h4 class = "mdl-dialog__title" > Service </h4> <div class = "mdl-dialog__content" ><p >More info about the services here </p> </div> <div class = "mdl-dialog__actions" ><button type="button" class ="mdl-button close"> Close </button></div> </dialog> </div>'
    return service_card;
}

function createServiceCarAdded(service, id) {

    var service_card = '<div class="demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn" id="service_added_' + service.hash + '" ><div class="mdl-card__title" id="spray_tan"><h2 class="mdl-card__title-text">' + service.name_service + '</h2></div> <div class = "mdl-card__actions mdl-card--border" ><a id = "value"> R$ 3~15 </a> <a>|</a> <a id = "time"> 30 min </a> </div> </div> <div class="button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id="remove_service_' + service.hash + '"><i class="contact material-icons md-24 add-remove-color"> remove_circle </i></div><dialog class = "mdl-dialog bronze" ><h4 class = "mdl-dialog__title" > Service </h4> <div class = "mdl-dialog__content" ><p >More info about the services here </p> </div> <div class = "mdl-dialog__actions" ><button type="button" class ="mdl-button close"> Close </button></div> </dialog></div>'
    return service_card;
}

function createAllServiceCardsOnArray() {
    if (started == false) {
        for (i = 0; i < list_services.length; i++) {
            console.log(list_services[i]);
            var card = createServiceCard(list_services[i], i);
            if (list_services[i].type_service == "SPRAY_TAN") {
                $('div.spray_tan').append(card);
            } else if (list_services[i].type_service == "EYES") {
                $('div.eyes').append(card);
            } else if (list_services[i].type_service == "DETOX") {
                $('div.dtox').append(card);
            } else if (list_services[i].type_service == "MAKEUP") {
                $('div.make_up').append(card);
            } else if (list_services[i].type_service == "NAILS") {
                $('div.nails').append(card);
            } else if (list_services[i].type_service == "MASSAGE") {
                $('div.massage').append(card);
            } else if (list_services[i].type_service == "WAX") {
                $('div.waxing').append(card);
            } else if (list_services[i].type_service == "PACK") {
                $('div.packages').append(card);
            }
            started = true;
        }
    }
}

function getTotalOfPrices(aux) {
    var sum = 0;

    for (i = 0; i < aux.length; i++) {

        sum += aux[i].price;

    }
    return sum;
}

function getTotalOnRemoving(aux) {
    var sum = parseFloat(document.getElementById("sum-cart").innerHTML);

    sum -= aux.price;
    document.getElementById("sum-cart").innerHTML = sum;
}

function updateTotalPrices(aux) {
    document.getElementById("sum-cart").innerHTML = getTotalOfPrices(aux);
}

function updateTotalPrices() {
    document.getElementById("sum-cart").innerHTML = getTotalOfPrices(list_car_services);
}

function updateCarServices(aux_service) {
    list_car_services.push(aux_service);

    $('div.cart').append(createServiceCarAdded(aux_service));

    updateTotalPrices();

}

function removeFromCart(elem) {

    this.list_car_services = list_car_services

    for (i = 0; i < list_car_services.length; i++) {
        if (list_car_services[i] == elem) {
            $("#service_added_" + elem.hash).remove();
            if (i == 0) {
                var aux = list_car_services.slice(1, list_car_services.length);
            } else {
                var aux = list_car_services.slice(0, i - 1).concat(list_car_services.slice(i + 1, list_car_services.length));
            }
            break;
        }
    }
    getTotalOnRemoving(elem);
    return aux;

}

/*
    function gerateRemoveButton(aux) {
    return document.getElementById('remove_service_' + aux.hash);
}

function gerateAddButton(aux) {
    return document.getElementById('add_service_' + aux.hash);
}

function gerateServicesListeners(list) {

    this.list_services = list_services;

    for (i = 0; i < list_services.length; i++) {
        var aux = list_services[i];

        document.write("<script type='text/javascript'>gerateAddButton(aux).addEventListener('click', function () {updateCarServices(aux);gerateRemoveButton(aux).addEventListener('click', function () {list_car_services = removeFromCart(aux);});});</script>")

    }
}
function gerateMoreButton(aux) {
        return document.getElementById('#showDialogInfo_' + list_services[0].hash);
    }

    function gerateMoreListeners() {

        this.list_services = list_services;

        for (i = 0; i < list_services.length; i++) {
            var aux = list_services[i];
            document.write("<script type='text/javascript'>gerateMoreButton(aux).addEventListener('click', function () {dialog.showModal();});/script>");


        }
    }
*/


$(function () {
    var dialog = document.querySelector('dialog');
    var title = document.getElementById("title-more");
    var info = document.getElementById("content-service-info");

    $('#casa div').click(function () {
        var id = $(this).attr('id');
        alert(id);
    });



    var add_more = document.getElementById("clickServices");

    add_more.addEventListener('click', function () {
        document.querySelector("a.services").click();
    });

    $('div.add_button').click(function () {
        var id = $(this).attr('id');

        for (i = 0; i < list_services.length; i++) {
            if (id == 'add_service_' + list_services[i].hash) {
                var aux = list_services[i];

                if (list_car_services.indexOf(aux) == -1) {
                    updateCarServices(aux);

                    document.getElementById('remove_service_' + aux.hash).addEventListener('click', function () {
                        list_car_services = removeFromCart(aux);
                    });

                } else {
                    return -1;
                }
            }
        }

        alert(id);
    });

    $('span.dialog_button').click(function () {
        var id = $(this).attr('id');

        for (i = 0; i < list_services.length; i++) {
            if (id == 'show-dialog-' + list_services[i].hash) {

                var aux = list_services[i];

                dialog.showModal();
            }
        }


    });

    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });

});

var car_sch = Array(10);

//Hidding and showing the Services Presentation
function hide_s_prst() {
    console.log("hide_s_prst");
    document.documentElement.style.setProperty(`--state_s_prst`, 'none');
    document.documentElement.style.setProperty(`--state_s_tbar`, 'contents');
    document.documentElement.style.setProperty(`--state_s_tab`, 'flex');
    document.documentElement.style.setProperty(`--state_s_box`, '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)');
}

function show_s_prst() {
    console.log("show_s_prst");
    document.documentElement.style.setProperty(`--state_s_prst`, 'contents');
    document.documentElement.style.setProperty(`--state_s_tbar`, 'flex');
    document.documentElement.style.setProperty(`--state_s_tab`, 'none');
    document.documentElement.style.setProperty(`--state_s_box`, 'none');
}

window.onload = initPage;

function initPage() {
    createAllServiceCardsOnArray();

}
