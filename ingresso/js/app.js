function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);
    switch (tipoIngresso) {
        case "pista":
            diminuirQuantidade(tipoIngresso, quantidade);
            break;
    
        case "superior":
            diminuirQuantidade(tipoIngresso, quantidade);
            break;
        case "inferior":
            diminuirQuantidade(tipoIngresso, quantidade);
            break;
    }
}

function diminuirQuantidade(assento, quantidade) {
    let ingresso = document.getElementById(`qtd-${assento}`);
    if (quantidade > parseInt(ingresso.innerHTML)){
        alert("Sua compra não pode ser efetuada por que a quantidade de ingressos e menor do que a solicitada");
    }else{
        ingresso.innerHTML = parseInt(ingresso.innerHTML - quantidade);
    }
    
}