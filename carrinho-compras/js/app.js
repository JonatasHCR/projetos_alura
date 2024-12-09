function adicionar() {
    let produto = document.getElementById('produto').value;
    let detalhes = produto.split(' - ');
    
    let quantidade = parseInt(document.getElementById('quantidade').value);
    quantidade = quantidade ? quantidade : 1;
    
    let valor = parseInt(detalhes[1].replace('R$', '')) * quantidade;
    let lista = document.getElementById("lista-produtos");
    let itemLista = lista.firstElementChild.cloneNode(true);
    itemLista.childNodes[1].innerHTML = `${quantidade}x`;
    itemLista.childNodes[2].nodeValue = ` ${detalhes[0]} `;
    itemLista.childNodes[3].innerHTML = `R$${valor},00`;
    lista.appendChild(itemLista);

    let valorFinal = document.getElementById("valor-total");
    valorFinal.innerHTML = `R$${parseInt(valorFinal.innerHTML.replace('R$', '')) + valor}`
}
function limpar() {
    let lista = document.getElementById("lista-produtos");
    
    let itemLista = lista.firstElementChild.cloneNode(true);
    itemLista.childNodes[1].innerHTML = ` `;
    itemLista.childNodes[2].nodeValue = ` `;
    itemLista.childNodes[3].innerHTML = ` `;
    
    while (lista.firstElementChild != null) {
        lista.firstChild.remove()
    }
    lista.appendChild(itemLista);
    
    let valorFinal = document.getElementById("valor-total");
    valorFinal.innerHTML = `R$00`;
    
}