document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value; 
    resultadoIMC =peso / (altura * altura)
    document.querySelector("#respostaIMC").innerHTML =(`Seu IMC é de ${resultadoIMC.toFixed(1)}`)

    if(resultadoIMC <= 18.5){
        console.log(`voce está abaixo do peso ${resultadoIMC.toFixed(1)}`)
        tag.classList.toggle('respostaIMC')
    } else if(resultadoIMC >= 18.6 && resultadoIMC <= 24.9){
       console.log(`voce está com o peso normal ${resultadoIMC.toFixed(1)}`)
       tag.classList.toggle('respostaIMC')
    }else if(resultadoIMC >= 25 && resultadoIMC <= 29.9){
           console.log(`voce está com sobrepeso ${resultadoIMC.toFixed(1)}`)
           tag.classList.toggle('respostaIMC')
    }else if(resultadoIMC >= 30 && resultadoIMC <= 34.9){
               console.log(`voce está com obesidade de grau 1 ${resultadoIMC.toFixed(1)}`)
               tag.classList.toggle('respostaIMC')
    }else if(resultadoIMC >= 35 && resultadoIMC <= 39.9){
                   console.log(`voce está com obesidade de grau 2 ${resultadoIMC.toFixed(1)}`)
                   tag.classList.toggle('respostaIMC')
    }else {console.log(`voce está com obesidade de grau 2 ${resultadoIMC.toFixed(1)}`)
    tag.classList.toggle(`respostaIMC`)
    }

    });

     