function alturaTrianguloIsosceles(lado1,lado2,hipotenusa){
    return(lado1*lado2*hipotenusa)
}




function calcularAlturaTrianguloIsosceles(){
    const inputL1 = document.getElementById('InputLado1');
    const valueL1 = inputL1.value;
    
    const inputL2 = document.getElementById('InputLado2');
    const valueL2 = inputL2.value;

    const inputL3 = document.getElementById('InputLado3');
    const valueL3 = inputL3.value;

    const result = alturaTrianguloIsosceles(valueL1,valueL2,valueL3)

    alert(result)

   /* lado1 = parseInt(valueL1);
    lado2 = parseInt(valueL2);
    hipotenusa = parseInt(valueL3);*/
  

}

