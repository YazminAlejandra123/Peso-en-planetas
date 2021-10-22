function Validar() {
	// Validar las variables
	var u,c;
	//Recuperar los datos
	u=document.getElementById("Usu").value;
	c=document.getElementById("Con").value;
	//Validar los datos
	if (u=="Yaz"&&c=="1234") {
		alert("Usuario y Contraseña Correctos");
		window.open("PesoGalactico.html");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
	else {
		alert("Usuario y Contraseña Incorrectos");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
}