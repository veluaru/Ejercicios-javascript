function Biciesto() {
    let año = document.getElementById("año").value;
    if(((año % 4 == 0) && (año % 100 != 0 )) || (año % 400 == 0)){
        console.log(año + "Es un año biciesto");
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Es un año biciesto";
    }else{
        console.log(año + "No es un año biciesto");
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "No es un año biciesto";
    }
    
}