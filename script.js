let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementsById("nav").classList="";
        menuVisible = false;
    } else{
        document.getElementsById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}

window.onscroll = function(){
    efectoHabilidades();
}