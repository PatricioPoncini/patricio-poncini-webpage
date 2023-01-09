let menuVisible = false;
function showHideMenu(){
    if(menuVisible){
        document.getElementsById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementsById("nav").classList="responsive";
        menuVisible = true;
    }
}

function select(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

window.onscroll = function(){
    efectoHabilidades();
}