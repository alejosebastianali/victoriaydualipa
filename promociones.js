//La funcion outPopup busca el ID contenedor general y le aplica el estilo que remueve todo el popup cuando, se hace click en el boton de cerrar
function outPopup(){
    document.getElementById("popupPromociones").classList.toggle("cont-popup-remove");
}

//Al hacer click en cerrar se activa la funcion que carga el estilo remove
document.getElementById("botonPopup").onclick = function(){
    outPopup();
}


//Para que desaparezca la animacion en un tiempo determinado
setTimeout(function() {
    $('#popupPromociones').fadeOut(3000); // <-- Cantidad de tiempo que tarda en desaparecer el elemento
}, 3000); // <-- Tiempo exacto en Milisegundos donde empieza a desaparecer


