function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos");
    if(amigo == ''){
        alert("coloque um nome");
    }else if(lista.innerHTML.split(',').includes(amigo.toLowerCase())){
        alert("esse nome ja foi adicionado");
    }else{
        if(lista.innerHTML == ''){
            lista.innerHTML = amigo.toLowerCase();
        }else{
            lista.innerHTML = lista.innerHTML.toLowerCase() + ',' + amigo;
        }
    }
    amigo = document.getElementById("nome-amigo");
    amigo.value = '';
}

function sortear() {
    let amigo = document.getElementById("nome-amigo");
    amigo.value = '';

    let lista = document.getElementById("lista-amigos").innerHTML.split(',');
    if (lista.length % 2 != 0 || lista.length < 4) {
        alert("Com o numero de participantes sendo impar, nao tem como formar duplas, e adicione um quantidade maior que 4 pessoas")
    }else{
        let numeroLista = [];
        let pares = '';
        for (let index = 0; index < lista.length; index++) {
            let numero = gerarNumeroAleatorio(0,lista.length - 1);
            if(numeroLista.includes(numero)|| numero == index){
                index--;
            }else{
                pares = pares + `${lista[index]} -> ${lista[numero]} <br>`;
                numeroLista.push(numero);
            }
        }
        let listaSorteio = document.getElementById("lista-sorteio");
        listaSorteio.innerHTML = pares;
    }
}

function reiniciar() {
    let amigo = document.getElementById("nome-amigo");
    amigo.value = '';
    
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = '';

    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = '';
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}