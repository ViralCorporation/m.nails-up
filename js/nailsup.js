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

$(function () {
    var dialogBronze = document.querySelector('dialog.bronze');
    var showDialogButtonBronze = document.querySelector('#show-dialog-bronze');

    if (!dialogBronze.showModal) {
        dialogPolyfill.registerDialog(dialogBronze);
    }
    showDialogButtonBronze.addEventListener('click', function () {
        dialogBronze.showModal();
    });
    dialogBronze.querySelector('.close').addEventListener('click', function () {
        dialogBronze.close();
    });

    var dialogEyes = document.querySelector('dialog.eyes');
    var showDialogButtonEyes = document.querySelector('#show-dialog-eyes');

    if (!dialogEyes.showModal) {
        dialogPolyfill.registerDialog(dialogEyes);
    }
    showDialogButtonEyes.addEventListener('click', function () {
        dialogEyes.showModal();
    });
    dialogEyes.querySelector('.close').addEventListener('click', function () {
        dialogEyes.close();
    });

    var dialogDetox = document.querySelector('dialog.detox');
    var showDialogButtonDetox = document.querySelector('#show-dialog-detox');

    if (!dialogDetox.showModal) {
        dialogPolyfill.registerDialog(dialogDetox);
    }
    showDialogButtonDetox.addEventListener('click', function () {
        dialogDetox.showModal();
    });
    dialogDetox.querySelector('.close').addEventListener('click', function () {
        dialogDetox.close();
    });
});

//Block Autorotate
screen.lockOrientation("landscape");
screen.orientation.lock();
screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;


//Hidding and showing the Services Presentation
function hide_s_prst(){
	 document.documentElement.style.setProperty(`--state_s_prst`, 'none');
	 document.documentElement.style.setProperty(`--state_s_tbar`, 'block');
	 document.documentElement.style.setProperty(`--state_s_box`, '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)');
}
function show_s_prst(){
	 document.documentElement.style.setProperty(`--state_s_prst`, 'contents');
	 document.documentElement.style.setProperty(`--state_s_tbar`, 'none');
	 document.documentElement.style.setProperty(`--state_s_box`, 'none');
}





