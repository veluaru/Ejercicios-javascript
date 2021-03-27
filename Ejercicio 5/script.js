function Enteros() {
    let numeros = document.getElementById("numeros").value;
    let numerosSeparados = numeros.split(",");
    for(let i = 0; i < numerosSeparados.length; i++){
        let bandera = false;
        let numero = numerosSeparados[i];
        for(let j = 0; j < numerosSeparados.length; j++){
            if(i!=j){
                let numero2 = numerosSeparados[j];
                if(numero==numero2){
                    bandera = true;
                    break
                }
            }
        }
        if(bandera == false){
            numerosSeparados.splice(i, 1);
        }
    }
    console.log(numerosSeparados);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = numerosSeparados;
}