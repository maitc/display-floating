(function displayNone(){
	//getElement me retorna una coleccion de html elementos. en esta coleccion no se puede hacer foreach por lo que la 
	//transformo a un arreglo con array.from
	var cajas = Array.from(document.getElementsByClassName("caja"));
	cajas.forEach(function(e){
		//Poner sombrero a e
		e.addEventListener("click", function(){
			this.classList.add("no");
		});
	});

	document.getElementById("mostrar").addEventListener("click", function(el){//no le agrega variable
		el.preventDefault();//no haga el comportamiento habitual, comportamiento por defecto.En este caso evita el salto de pagina.
		cajas.forEach(function(e){
			e.classList.remove("no");
		})
	})
})()