function criptografar() {
	console.log(document.getElementById("interativos__texto").value);

	let valorDeEntrada = document.getElementById("interativos__texto").value;
	let valorAModificar = valorDeEntrada.toLowerCase();

	let valorModificado = "";

	//for (var i = valorAModificar.length - 1; i >= 0; i--) {
	for(let i = 0; i < valorAModificar.length ; ++i) {
		switch(valorAModificar[i]) {
			case "e":
				valorModificado += "enter";
				break;
			case "i":
				valorModificado += "imes";
				break;
			case "a":
				valorModificado += "ai";
				break;
			case "o":
				valorModificado += "ober";
				break;
			case "u":
				valorModificado += "ufat";
				break;
			default:
				valorModificado += valorAModificar[i];
		}
	}

	document.getElementById("resultado__padrao").style.display = "none";

	document.getElementById("resultado__processado__texto").innerHTML = valorModificado;
	document.getElementById("resultado__processado").style.display = "flex";

	console.log(valorModificado)
}

function descriptografar() {
	let valorDeEntrada = document.getElementById("interativos__texto").value;
	let valorAModificar = valorDeEntrada.toLowerCase();


	let valorModificado = "";

	for(let i = 0; i < valorAModificar.length; ++i) {
		switch(valorAModificar[i]) {
			case "e":
				valorModificado += valorAModificar[i];
				i += 4;
				break;
			case "i":
				valorModificado += valorAModificar[i];
				i += 3;
				break;
			case "a":
				valorModificado += valorAModificar[i];
				i += 1;
				break;
			case "o":
				valorModificado += valorAModificar[i];
				i += 3;
				break;
			case "u":
				valorModificado += valorAModificar[i];
				i += 3;
				break;
			default:
				valorModificado += valorAModificar[i];
		}
	}

	document.getElementById("resultado__padrao").style.display = "none";

	document.getElementById("resultado__processado__texto").innerHTML = valorModificado;
	document.getElementById("resultado__processado").style.display = "flex";

	console.log(valorModificado)

}

function copiar() {
	let textoProcessado = document.getElementById("resultado__processado__texto").innerHTML;

	navigator.clipboard.writeText(textoProcessado);
}