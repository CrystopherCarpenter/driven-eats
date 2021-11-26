let comida = null;

let precocomida = null;

let bebida = null;

let precobebida = null;

let sobremesa = null;

let precosobremesa = null;

let precofinal = null;

function pratoselecionado(item) {

    const selec = document.querySelector(".itensprato .selecao");
    const iconselec = document.querySelector(".itensprato .mostraricon");



    if (selec !== null) {
        selec.classList.remove("selecao");
        iconselec.classList.remove("mostraricon");
    }

    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");

    comida = (item.querySelector("h2")).innerHTML;
    let preco = (item.querySelector("span")).innerHTML;

    if (preco === "R$ 14,90") {
        precocomida = 14.90;
    }
    if (preco === "R$ 13,90") {
        precocomida = 13.90;
    }
    if (preco === "R$ 12,90") {
        precocomida = 12.90;
    }
    if (preco === "R$ 11,90") {
        precocomida = 11.90;
    }
    if (preco === "R$ 10,90") {
        precocomida = 10.90;
    }
    if (preco === "R$ 9,90") {
        precocomida = 9.90;
    }
    if (comida !== null && bebida !== null && sobremesa !== null) {
        document.querySelector(".fecharpedido").disabled = false;
        document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }

}

function bebidaselecionada(item) {

    const selec = document.querySelector(".itensbebida .selecao");
    const iconselec = document.querySelector(".itensbebida .mostraricon");



    if (selec !== null) {
        selec.classList.remove("selecao");
        iconselec.classList.remove("mostraricon");
    }

    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");

    bebida = (item.querySelector("h2")).innerHTML;
    let preco = (item.querySelector("span")).innerHTML;

    if (preco === "R$ 7,90") {
        precobebida = 7.90;
    }
    if (preco === "R$ 6,90") {
        precobebida = 6.90;
    }
    if (preco === "R$ 5,90") {
        precobebida = 5.90;
    }
    if (preco === "R$ 4,90") {
        precobebida = 4.90;
    }
    if (preco === "R$ 3,90") {
        precobebida = 3.90;
    }
    if (preco === "R$ 2,90") {
        precobebida = 2.90;
    }
    if (comida !== null && bebida !== null && sobremesa !== null) {
        document.querySelector(".fecharpedido").disabled = false;
        document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }

}

function sobremesaselecionada(item) {

    const selec = document.querySelector(".itenssobremesa .selecao");
    const iconselec = document.querySelector(".itenssobremesa .mostraricon");



    if (selec !== null) {
        selec.classList.remove("selecao");
        iconselec.classList.remove("mostraricon");
    }

    item.querySelector(".iconselecao").classList.add("mostraricon");
    item.classList.add("selecao");

    sobremesa = (item.querySelector("h2")).innerHTML;
    let preco = (item.querySelector("span")).innerHTML;

    if (preco === "R$ 12,90") {
        precosobremesa = 12.90;
    }
    if (preco === "R$ 11,90") {
        precosobremesa = 11.90;
    }
    if (preco === "R$ 10,90") {
        precosobremesa = 10.90;
    }
    if (preco === "R$ 9,90") {
        precosobremesa = 9.90;
    }
    if (preco === "R$ 8,90") {
        precosobremesa = 8.90;
    }
    if (preco === "R$ 7,90") {
        precosobremesa = 7.90;
    }
    if (comida !== null && bebida !== null && sobremesa !== null) {
        document.querySelector(".fecharpedido").disabled = false;
        document.querySelector(".fecharpedido").innerHTML = "Fechar pedido";
    }

}

function confirmarpedido() {
    precofinal = (precocomida + precobebida + precosobremesa);

    document.querySelector(".prato").innerHTML = comida;

    document.querySelector(".precoprato").innerHTML = precocomida.toFixed(2).replace('.', ',');

    document.querySelector(".bebida").innerHTML = bebida;

    document.querySelector(".precobebida").innerHTML = precobebida.toFixed(2).replace('.', ',');

    document.querySelector(".sobremesa").innerHTML = sobremesa;

    document.querySelector(".precosobremesa").innerHTML = precosobremesa.toFixed(2).replace('.', ',');

    document.querySelector(".precofinal").innerHTML = "R$ " + precofinal.toFixed(2).replace('.', ',');

    const fundo = document.querySelector(".fundo");
    fundo.classList.remove("esconder");

    const janelaconfirm = document.querySelector(".confirmacao");
    janelaconfirm.classList.remove("esconder");
}

function cancelar() {

    const fundo = document.querySelector(".fundo");
    fundo.classList.add("esconder");

    const janelaconfirm = document.querySelector(".confirmacao");
    janelaconfirm.classList.add("esconder");

}

function enviarpedido() {

    const nome = prompt("Digite seu nome:");
    const endereco = prompt("Digite o endereço de entega:");

    let msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${comida}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precofinal.toFixed(2).replace('.', ',')}
    
    Nome: ${nome}
    Endereço: ${endereco}`);

    window.open(`https://wa.me/5519981121302?text=${msg}`, "_blank");
}