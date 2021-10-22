function CalculoDePeso() {
	//Declarar variables
	var m,g,P;
	//Recuperar los valores de las cajas de texto y asignarlos a las variables
	m=parseInt(document.getElementById("Masa").value);
	g=parseInt(document.getElementById("Gra").value); 
	//Realizar las operaciones
	P=m*g/9.81;
	//Mostrar los resultados en la caja de texto
	document.getElementById("Pes").value=P;
}
function Borrar() {
	document.getElementById("Masa").value="";
	document.getElementById("Gra").value="";
    document.getElementById("Pes").value="";
}