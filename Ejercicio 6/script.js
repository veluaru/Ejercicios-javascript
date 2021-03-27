function numeroRomano() {
    let enteros = document.getElementById("numero").value;
    let romano = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,  L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let cadena = '';
    for (let i of Object.keys(romano)) {
        let repeticiones = Math.floor(enteros / romano[i]);
        enteros -= repeticiones * romano[i];
        cadena += i.repeat(repeticiones);
    }
    console.log(cadena);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = cadena;
}