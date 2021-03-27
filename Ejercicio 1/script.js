function Pangrama() {
    const alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    let alfabetoArray = Array.from(alfabeto);
    let cadena = document.getElementById("cadena").value;
    for (let i = 0; i < alfabetoArray.length; i++) {
		let letra = alfabetoArray[i];
		if (!cadena.includes(letra)) {
            console.log("La cadena no es un Pangrama");
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = "La cadena no es un Pangrama";
            return false;
        }
        
	}
    console.log("La cadena es un Pangrama");
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "La cadena es un Pangrama";
}