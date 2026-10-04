/* =====================================================
   ROSITA DOCES ARTESANAIS
   PÁGINA DO CARRINHO GERAL
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    if (!window.RositaCarrinho) {
        console.error("O sistema compartilhado carrinho.js não foi carregado.");
        return;
    }

    const sistema = window.RositaCarrinho;

    const lista = document.getElementById("lista-produtos");
    const avisoVazio = document.getElementById("carrinho-vazio");
    const totalItens = document.getElementById("total-itens");
    const quantidadeTotal = document.getElementById("quantidade-total");
    const valorTotal = document.getElementById("valor-total");

    const inputData = document.getElementById("data-entrega");
    const inputHorario = document.getElementById("horario-entrega");
    const blocoAgendamento = document.getElementById("bloco-agendamento");

    const botaoEnviar = document.getElementById("enviar-pedido");
    const botaoCopiar = document.getElementById("copiar-pedido");
    const botaoLimpar = document.getElementById("limpar-pedido");
    const mensagem = document.getElementById("mensagem");

    function moeda(valor) {
        return sistema.formatarMoeda(valor);
    }

    function mostrarMensagem(texto) {
        mensagem.textContent = texto;
    }

    function criarBotao(texto, classe, acao, id) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = texto;
        botao.className = classe;
        botao.dataset.acao = acao;
        botao.dataset.id = id;
        return botao;
    }

    function atualizarPagina() {
        const produtos = sistema.carregar();
        const totais = sistema.calcularTotais();

        lista.replaceChildren();

        totalItens.textContent = totais.quantidade + " unidade(s)";
        quantidadeTotal.textContent = totais.quantidade;
        valorTotal.textContent = moeda(totais.total);

        const temProdutos = produtos.length > 0;
        avisoVazio.hidden = temProdutos;
        blocoAgendamento.style.display = temProdutos ? "block" : "none";

        botaoEnviar.disabled = !temProdutos;
        botaoCopiar.disabled = !temProdutos;
        botaoLimpar.disabled = !temProdutos;

        produtos.forEach(function (produto) {
            const linha = document.createElement("div");
            linha.className = "produto";

            const informacoes = document.createElement("div");
            informacoes.className = "produto-info";

            const categoria = document.createElement("div");
            categoria.className = "categoria";
            categoria.textContent = produto.categoria;

            const nome = document.createElement("h3");
            nome.textContent = produto.nome;

            const preco = document.createElement("small");
            preco.textContent = moeda(produto.preco) + " por unidade";

            informacoes.append(categoria, nome, preco);

            const acoes = document.createElement("div");
            acoes.className = "produto-acoes";

            const quantidade = document.createElement("div");
            quantidade.className = "quantidade";

            const diminuir = criarBotao("−", "", "diminuir", produto.id);
            diminuir.setAttribute("aria-label", "Diminuir " + produto.nome);

            const numero = document.createElement("strong");
            numero.textContent = produto.quantidade;

            const aumentar = criarBotao("+", "", "aumentar", produto.id);
            aumentar.setAttribute("aria-label", "Aumentar " + produto.nome);

            quantidade.append(diminuir, numero, aumentar);

            const subtotal = document.createElement("strong");
            subtotal.className = "subtotal";
            subtotal.textContent = moeda(produto.preco * produto.quantidade);

            const remover = criarBotao("Remover", "remover", "remover", produto.id);

            acoes.append(quantidade, subtotal, remover);
            linha.append(informacoes, acoes);
            lista.appendChild(linha);
        });
    }

    lista.addEventListener("click", function (evento) {
        const botao = evento.target.closest("button[data-acao]");
        if (!botao) return;

        const id = botao.dataset.id;
        const acao = botao.dataset.acao;
        const produto = sistema.carregar().find(item => item.id === id);

        if (!produto) {
            atualizarPagina();
            return;
        }

        try {
            if (acao === "aumentar") {
                sistema.alterarQuantidade(id, produto.quantidade + 1);
            } else if (acao === "diminuir") {
                sistema.alterarQuantidade(id, produto.quantidade - 1);
            } else if (acao === "remover") {
                sistema.remover(id);
            }
            mostrarMensagem("");
        } catch (erro) {
            mostrarMensagem(erro.message);
        }

        atualizarPagina();
    });

    botaoLimpar.addEventListener("click", function () {
        if (sistema.carregar().length === 0) return;

        if (confirm("Deseja remover todos os produtos do carrinho?")) {
            sistema.limpar();
            atualizarPagina();
            mostrarMensagem("Carrinho esvaziado com sucesso.");
        }
    });

    // Função para estruturar a mensagem com a data e horário solicitados
    function gerarMensagemCompleta() {
        const resumoItens = sistema.gerarResumo();
        const dataVal = inputData.value;
        const horaVal = inputHorario.value;

        let complementoDataHora = "";
        if (dataVal || horaVal) {
            const dataFormatada = dataVal ? dataVal.split("-").reverse().join("/") : "a combinar";
            const horaFormatada = horaVal ? horaVal + "h" : "a combinar";
            complementoDataHora = `\n\n📅 Entrega solicitada para: ${dataFormatada} às ${horaFormatada}`;
        }

        return `Gostaria por gentileza de:\n\n${resumoItens}${complementoDataHora}`;
    }

    // Botão Enviar Pedido (WhatsApp)
    botaoEnviar.addEventListener("click", function () {
        if (sistema.carregar().length === 0) return;

        const textoMensagem = gerarMensagemCompleta();
        const numeroWhatsApp = "5515996094613"; // Substitua pelo número real da Rosita se necessário
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(textoMensagem)}`;

        window.open(urlWhatsApp, "_blank");
        mostrarMensagem("Redirecionando para o WhatsApp...");
    });

    // Botão Copiar Resumo
    botaoCopiar.addEventListener("click", async function () {
        const textoMensagem = gerarMensagemCompleta();

        try {
            await navigator.clipboard.writeText(textoMensagem);
            mostrarMensagem("Resumo do pedido copiado com sucesso!");
        } catch (erro) {
            console.error("Erro ao copiar:", erro);
            mostrarMensagem("Não foi possível copiar o resumo automaticamente.");
        }
    });

    window.addEventListener("storage", function (evento) {
        if (evento.key === "rosita_carrinho_v1") atualizarPagina();
    });

    window.addEventListener("rosita:carrinho-atualizado", atualizarPagina);
    window.addEventListener("pageshow", atualizarPagina);

    atualizarPagina();
});