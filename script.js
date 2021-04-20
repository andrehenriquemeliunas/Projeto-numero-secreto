var numeroSecreto = parseInt(Math.random() * 10 + 1 )
var tentativa = 4

function game(){
    var chute = document.getElementById("resposta").value


while (tentativa > 0){
    
        
        if(numeroSecreto == chute){
            resultado.innerHTML = 'Muito bem, você acertou!!';
            break;
        }else if(chute > numeroSecreto){
            resultado.innerHTML = 'O número secreto é <strong>menor!</strong>';
            tentativa = tentativa - 1
            break;
        }else if(chute < numeroSecreto){
            resultado.innerHTML = 'O número secreto é <strong>maior!</strong>';
            tentativa = tentativa - 1
            break;
        }

    
}
if(tentativa == 0){
    resultado.innerHTML  = `Poxa!Suas tentativas acabaram, o número secreto era ${numeroSecreto}`
}
}