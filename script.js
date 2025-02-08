var sidemenu = document.getElementById("sidemenu");
function openmenu(){
 sidemenu.style.right="0";
}
function closemenu(){
 sidemenu.style.right="-200px";
}


var tablink = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementsById(tabname).classList.add("active-tab");
}