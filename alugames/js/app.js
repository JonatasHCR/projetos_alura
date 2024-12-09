function alterarStatus(item) {
    let jogo = document.getElementById(`game-${item}`);
    if(jogo.children[2].className == "dashboard__item__button dashboard__item__button--return" ){
        jogo.children[2].className = "dashboard__item__button"
        jogo.children[2].innerHTML = 'Alugar'
        jogo.children[0].className = "dashboard__item__img"
        
    }else{
        jogo.children[2].className = "dashboard__item__button dashboard__item__button--return"
        jogo.children[2].innerHTML = 'Devolver'
        jogo.children[0].className = "dashboard__item__img dashboard__item__img--rented"
    }
    
}