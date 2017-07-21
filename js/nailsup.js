function Scrolldown() {
    window.scroll(0, 300);
}

window.onload = Scrolldown

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


    /*
    $('#date').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
    $('#time').bootstrapMaterialDatePicker({
        date: false
    });
*/
});

/*
//Block Autorotate
screen.lockOrientation("landscape");
screen.orientation.lock();
screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
*/
