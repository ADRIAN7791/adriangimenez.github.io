

var boton = document.getElementById('btn');

function showMenu(){

 var menu= document.getElementById('opcs-menu');
 if(menu.classList.contains("disabled-menu")){

 	// alert("Mostrar")
 	menu.classList.remove("disabled-menu");
 	menu.classList.add("enabled-menu");
 }else{
 	// alert("Ocultar")

 	menu.classList.remove("enabled-menu");
 	menu.classList.add("disabled-menu");
 }

}

boton.addEventListener('click',showMenu);
