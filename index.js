var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){

    document.querySelector(".sidebar").classList.toggle("show_menu")
    document.querySelector(".hamburguer").classList.toggle("show_menu")
    document.querySelector("#line1").classList.toggle("show_menu")
    document.querySelector("#line2").classList.toggle("show_menu")
    document.querySelector("#line3").classList.toggle("show_menu")
    document.querySelector("#span").classList.toggle("show_menu")

});


// Programação do formulário de prévia do orçamento //

window.document.querySelector("#quantidade").addEventListener("change", atualizar_preco());
window.document.querySelector("#js").addEventListener("change", atualizar_preco());
window.document.querySelector("#layout-sim").addEventListener("change", atualizar_preco());
window.document.querySelector("#layout-nao").addEventListener("change", atualizar_preco());
window.document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = window.document.querySelector("#prazo").value
    window.document.querySelector("label[for=prazo]").innerHTML =  `Prazo: ${prazo} semana(s)`, atualizar_preco()});


function atualizar_preco(){
    const quantidade = window.document.querySelector("#quantidade").value;
    const temJS = window.document.querySelector("#js").checked;
    const layout_sim = window.document.querySelector("#layout-sim").checked;
    const layout_nao = window.document.querySelector("#layout-nao").checked;
    const prazo = window.document.querySelector("#prazo").value;
    let preco = quantidade*100;
    if (layout_sim) preco += 500;
    if (layout_nao) preco == preco;
    if (temJS) preco *= 1.1;
    let taxaUrgencia = 1 - (prazo*0.1);
    preco = preco + (preco*taxaUrgencia);
    window.document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`

}


