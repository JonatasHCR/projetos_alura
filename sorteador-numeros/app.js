function sortear() {
    //pegando os valores apos o click do botão
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let inicio = parseInt(document.getElementById('de').value);
    let fim = parseInt(document.getElementById('ate').value);
    //verificando se ele não colocou os sorteios maior que os números
    if (quantidade > fim - inicio + 1){
        let div = document.getElementById('resultado');
        div.firstElementChild.innerHTML = `Não tem como gerar sorteios acima do limite que foi estabelecido que no caso foi ${fim} números`;//pegando o elemento depois da div
    }else{
        let arrayNumero = [];
        for (let index = 0; index < quantidade; index++) {
            let numero = gerarNumeroAleatorio(inicio, fim);
            //verificando se é um numero repetido
            if (arrayNumero.indexOf(numero) != -1){// ou poderia fazer arrayNumero.includes(numero)
                index--;
            } else{
                //caso nao seja ele adiciona
                arrayNumero.push(numero);
            }   
        }
        let reiniciar = document.getElementById("btn-reiniciar");
        reiniciar.className = "container__botao";//mudando a classe do botão pra permitir o click

        let div = document.getElementById('resultado');
        div.firstElementChild.innerHTML = `esses foram os números sorteados: ${arrayNumero}`;//pegando o elemento depois da div
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
// reiniciando o jogo
function reiniciar(){
    //zerando os valores
    let quantidade = document.getElementById('quantidade').value = '';
    let inicio = document.getElementById('de').value = '';
    let fim = document.getElementById('ate').value = '';
    //colocando a frase antiga
    let div = document.getElementById('resultado');
    div.firstElementChild.innerHTML = `Números sorteados:  nenhum até agora`;
    //desabilitando o botão de reiniciar
    let reiniciar = document.getElementById("btn-reiniciar");
    reiniciar.className = "container__botao-desabilitado";
}