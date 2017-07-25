//Hidding and showing the Services Presentation.
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

//Hidding and showing the Schedulling pages.
function hiddenSdlPage1(){
   var div = document.getElementById("treinos");
   div.style.display = "none";
}
function hiddenSdlPage2(){
   var div = document.getElementById("treinos");
   div.style.display = "none";
}
