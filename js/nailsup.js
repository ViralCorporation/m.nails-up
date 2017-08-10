var list_services = [];
var current_cart = [];

// CREATE OBJECT OF TYPE SERVICE
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
    constructor(name_service, descrition, price, duration, type_service){
        this.name_service = name_service;
        this.descrition = descrition;
        this.price = price;
        this.duration = duration;
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

list_services[0] = new Service("Bronzeamento Natural", "Bronzeamento natural com uso pasma", 39.00, "15 min", "SPRAY_TAN");
list_services[1] = new Service("Bronzeamento Natural na Galaxia", "Bronzeamento natural com uso pasma", 39.00, '15min', "SPRAY_TAN");
list_services[2] = new Service("Bronzeamento Natural na Sol", "Bronzeamento natural com uso pasma", 60.50, "25 min", "SPRAY_TAN");
list_services[3] = new Service("Manicure", "Pintura de unhas", 50.00, "15min", "NAILS");
list_services[4] = new Service("Make Up", "Maquiagem basica", 50.00, "30 min", "MAKEUP");
list_services[5] = new Service("Bronzeamento Natural na Lua", "Bronzeamento natural com uso pasma", 50.00, "20 min", "SPRAY_TAN");
list_services[6] = new Service("Sombras", "Maquiagem basica", 50.00, "20 min", "EYES");
list_services[7] = new Service("Depilação Buço", "Maquiagem basica", 50.00, "10 min", "WAX");
list_services[8] = new Service("Pacote Depilação completa", "Maquiagem basica", 50.00, "2 h", "PACK");
list_services[9] = new Service("Massagem", "Maquiagem basica", 50.00, "1 h", "MASSAGE");
list_services[10] = new Service("Suco Detox", "genginbre", 12.00, "5 min", "DETOX");


var started = false;

function addNewServiceItem(service) {
    list_services[list_services.length + 1] = service;
}

function CartToArray() {
    var aux = '';

    for (var i = 0; i < current_cart.length; i++) {
        aux += current_cart.name;
    }
}

function Scrolldown() {
    window.scroll(0, 300);
}

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

    var dialog = document.querySelector('dialog');

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

                if (current_cart.indexOf(aux) == -1) {
                    updateCarServices(aux);

                    document.getElementById('remove_service_' + aux.hash).addEventListener('click', function () {
                        removeFromCartByIndex(aux);
                    });

                } else {
                    return -1;
                }
            }
        }


    });

    $('span.dialog_button').click(function () {
        var id = $(this).attr('id');
        var title = document.getElementById("title-more");
        var info = document.getElementById("content-service-info");

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

//EMAILS SCHULLEING - CLASS AND FUNCTIONS

$(function(){

    $("#clickSdlSend").click(function(){
        sendEmail();
        current_cart = [];

    });

});

    //GERATE THE BODY OF EMAIL SENDED TO NAILS UP OFFICE
    function gerateBodyEmailSdl() {
        var aux = "Cliente: " + "nome cliente \n\ " + "Data: 09/08/2017 \n\ " + " \n\Serviços: \n\ ";

        for (var i = 0; i < current_cart.length; i++) {
            aux += current_cart[i].name_service + " - R$ " + current_cart[i].price +"\n\ ";
        }

        return aux;
    }

    //GERATE THE SUBJECT OF EMAIL INDENTIFIER THE CLIENT AND DATE
    function gerateSubjectEmailSdl() {
        return "Agendamento cliente: " + 'client_name' + " " + 'dateSdl';
    }

    function sendEmail() {
        if(current_cart.length > 0){
            Email.send('melissecabral07@gmail.com', 'melissecabral@gmail.com', gerateSubjectEmailSdl(), gerateBodyEmailSdl(), 'smtp.gmail.com',
                   'melissecabral07@gmail.com', "85998614541");
        removingAllFromCart();
        }
    }

// CREATE SERVICE CARD TO BE LISTED ON CATEGORIES
function createServiceCard(service, id) {

    var service_card = '<div class="demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn" style="user-select: none"><div class="mdl-card__title" id="spray_tan"><h2 class="mdl-card__title-text">' + service.name_service + '</h2></div><div class="little_text"> <span class = "mdl-card__supporting-text" >' + service.descrition + '...</span><span id ="show-dialog-' + service.hash + '" type = "button" class = "more mdl-button dialog_button" > More </span> <div class = "mdl-card__actions mdl-card--border" ><a id = "value"> R$ ' + service.price + ' </a> <a> | </a> <a id = "time"> ' + service.duration + ' </a> </div> </div> <div class="button mdl-js-button mdl-button--fab mdl-js-ripple-effect add_button" id="add_service_' + service.hash + '"><i class="contact material-icons md-18 add-remove-color"> add </i></div><dialog class = "mdl-dialog service-box-' + service.hash + '" ><h4 class = "mdl-dialog_title service-title"' + service.name_service + '"</h4> <div class = "mdl-dialogcontent" ><p class="service-description">' + service.descrition + '</p></div><div class="mdl-dialog_actions" ><button type="button" class ="mdl-button close"> Close </button></div> </dialog></div>'
    return service_card;
}

// CREATE THE CART OF SERVICE TO BE ADDED ON THE CART
function createServiceCarAdded(service, id) {

    var service_card = '<div class="demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn" id="service_added_' + service.hash + '" style="user-select: none"><div class="button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id="remove_service_' + service.hash + '"><i class="contact material-icons md-18 add-remove-color"> remove</i></div><div class="mdl-card__title" id="spray_tan"><h2 class="mdl-card__title-text">' + service.name_service + '</h2></div><div class="mdl-card__actions mdl-card--border"><a id="value"> R$' + service.price + ' </a> <a>|</a> <a id="time"> ' + service.duration + ' </a></div></div>'
    return service_card;
}

// CREATE THE LIST OF ALL SERVICES AVAILABLE
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

//FUNCTIONS TO UPDATE THE TOTAL PRICE OF SERVICES ON THE CART

    function getTotalOfPrices(aux) {
        var sum = 0;

        for (i = 0; i < aux.length; i++) {

            sum += aux[i].price;

        }
        return sum;
    }

    function getTotalOnRemoving(aux) {
        var sum = (document.getElementById("sum-cart").innerHTML);
        sum -= aux.price;
        document.getElementById("sum-cart").innerHTML = sum;
    }

    function updateTotalPrices(aux) {
        document.getElementById("sum-cart").innerHTML = getTotalOfPrices(aux).toFixed(2);;
    }

    function updateTotalPrices() {
        document.getElementById("sum-cart").innerHTML = getTotalOfPrices(current_cart);
    }

    function updateCarServices(aux_service) {
        current_cart.push(aux_service);

        $('div.cart').append(createServiceCarAdded(aux_service));
        updateTotalPrices();
    }

//FIND ONE SERVICE ON THE CART AND RETURN THE INDEX
function findIndexOnCar(elem) {
    for (i = 0; i < current_cart.length; i++) {
        if (elem == current_cart[i]) {
            return i;
        }
    }
    return -1;
}

//REMOVE THE ELEMENT PASSED ON ASSIGNATURE OF THE CART
function removeFromCartByIndex(elem) {
    var aux;
    id = findIndexOnCar(elem);

    $("#service_added_" + current_cart[id].hash).remove();

    if (id == 0) {
        aux = current_cart.slice(1, current_cart.length);
    } else if (id == current_cart.length) {
        aux = current_cart.slice(0, current_cart.length - 1);

    } else {
        console.log(current_cart[i]);
        aux = current_cart.slice(0, i).concat(current_cart.slice(i + 1, current_cart.length));
        console.log(aux);
    }

    current_cart = aux;
    getTotalOnRemoving(elem);
    this.current_cart = current_cart
}

function removingAllFromCart(){
    var aux = current_cart[0];
    while(aux != undefined){
        removeFromCartByIndex(current_cart[0]);
        aux = current_cart[0];
    }
}

var car_sch = Array(10);

window.onload = initPage;

function initPage() {
    createAllServiceCardsOnArray();
    Scrolldown()
}
