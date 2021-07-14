var peso = document.getElementById('pesoV')
var tamanho = document.getElementById('tamanhoV')
var resultado = document.getElementById('resultadoV')
var nivel = document.getElementById('resultadoN')
var p = document.getElementsByClassName('erro')[0]
var p2 = document.getElementsByClassName('erro')[1]
var rule = document.getElementById('regra')

function erro(erro1, erro2){
    erro1.style.display = 'block'
    erro2.style.display = 'block'        
}

function show(){
    rule.style.display = 'block'       
}
function exit(){
    rule.style.display = 'none'
}

function IMC(){
    resultado.style.backgroundColor ='white'
    resultado.style.border= 'none'
    p.style.display = 'none'
    p2.style.display = 'none'
    let weight = Number.parseInt(peso.value)
    let height = Number.parseFloat(tamanho.value)
    var IMC = weight / (height ** 2)
    resultado.value = IMC.toFixed(2)
    if (peso.value.length == 0 || tamanho.value.length == 0){
        alert('erro!')
    }
    if (IMC < 18.5){
        nivel.value = 'Abaixo do peso'
    }else if(IMC >= 18.6 && IMC < 24.9){
        nivel.value = 'Peso ideal'
    }else if (IMC >= 25 && IMC < 29.9){
        nivel.value = 'Excesso de Peso'
    }else if (IMC >= 30 && IMC < 34.9){
        nivel.value = 'Obesidade Grau I (Moderada)'
    }else if(IMC >= 35 && IMC < 39.99){
        nivel.value = 'Obesidade Grau II (Elevada)'
    }else{
        nivel.value = 'Obesidade Grau III (Mórbida)'
    }
}