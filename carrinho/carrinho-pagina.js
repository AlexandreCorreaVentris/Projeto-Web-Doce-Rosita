
/* =====================================================
   ROSITA DOCES ARTESANAIS
   PÁGINA DO CARRINHO GERAL

   Integração:
   - Geladinhos
   - Salgados
   - Bolos (futuro)
   - Doces (futuro)

   Utiliza o sistema RositaCarrinho
   definido em carrinho.js
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // ================================================
    // 1. VERIFICAR SISTEMA COMPARTILHADO
    // ================================================

    if (!window.RositaCarrinho) {
        console.error(
            "O sistema compartilhado carrinho.js não foi carregado."
        );
        return;
    }

    const sistema = window.RositaCarrinho;

    // ================================================
    // 2. ELEMENTOS DA PÁGINA
    // ================================================

    const lista = document.getElementById("lista-produtos");
    const avisoVazio = document.getElementById("carrinho-vazio");
    const totalItens = document.getElementById("total-itens");
    const quantidadeTotal = document.getElementById("quantidade-total");
    const valorTotal = document.getElementById("valor-total");

    const botaoCopiar = document.getElementById("copiar-pedido");
    const botaoLimpar = document.getElementById("limpar-pedido");
    const mensagem = document.getElementById("mensagem");

    // ================================================
    // 3. FORMATAR VALORES
    // ================================================

    function moeda(valor) {
        return sistema.formatarMoeda(valor);
    }

    function mostrarMensagem(texto) {
        mensagem.textContent = texto;
    }

    // ================================================
    // 4. CRIAR BOTÕES
    // ================================================

    function criarBotao(texto, classe, acao, id) {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = texto;
        botao.className = classe;
        botao.dataset.acao = acao;
        botao.dataset.id = id;

        return botao;
    }

    // ================================================
    // 5. MOSTRAR TODOS OS PRODUTOS
    // ================================================

    function atualizarPagina() {

        const produtos = sistema.carregar();
        const totais = sistema.calcularTotais();

        // Limpa apenas a exibição anterior
        lista.replaceChildren();

        // Atualiza quantidade e subtotal
        totalItens.textContent =
            totais.quantidade + " unidade(s)";

        quantidadeTotal.textContent =
            totais.quantidade;

        valorTotal.textContent =
            moeda(totais.total);

        // Exibe aviso somente quando estiver vazio
        avisoVazio.hidden = produtos.length > 0;

        botaoCopiar.disabled = produtos.length === 0;
        botaoLimpar.disabled = produtos.length === 0;

        // Cria uma linha para cada produto
        produtos.forEach(function (produto) {

            const linha = document.createElement("div");
            linha.className = "produto";

            // Informações do produto
            const informacoes = document.createElement("div");
            informacoes.className = "produto-info";

            const categoria = document.createElement("div");
            categoria.className = "categoria";
            categoria.textContent = produto.categoria;

            const nome = document.createElement("h3");
            nome.textContent = produto.nome;

            const preco = document.createElement("small");
            preco.textContent =
                moeda(produto.preco) + " por unidade";

            informacoes.append(categoria, nome, preco);

            // Controles de quantidade
            const acoes = document.createElement("div");
            acoes.className = "produto-acoes";

            const quantidade = document.createElement("div");
            quantidade.className = "quantidade";

            const diminuir = criarBotao(
                "−",
                "",
                "diminuir",
                produto.id
            );

            diminuir.setAttribute(
                "aria-label",
                "Diminuir " + produto.nome
            );

            const numero = document.createElement("strong");
            numero.textContent = produto.quantidade;

            const aumentar = criarBotao(
                "+",
                "",
                "aumentar",
                produto.id
            );

            aumentar.setAttribute(
                "aria-label",
                "Aumentar " + produto.nome
            );

            quantidade.append(diminuir, numero, aumentar);

            // Subtotal individual
            const subtotal = document.createElement("strong");
            subtotal.className = "subtotal";

            subtotal.textContent = moeda(
                produto.preco * produto.quantidade
            );

            // Botão remover
            const remover = criarBotao(
                "Remover",
                "remover",
                "remover",
                produto.id
            );

            acoes.append(quantidade, subtotal, remover);

            linha.append(informacoes, acoes);

            lista.appendChild(linha);
        });
    }

    // ================================================
    // 6. AUMENTAR, DIMINUIR E REMOVER
    // ================================================

    lista.addEventListener("click", function (evento) {

        const botao = evento.target.closest("button[data-acao]");

        if (!botao) {
            return;
        }

        const id = botao.dataset.id;
        const acao = botao.dataset.acao;

        const produto = sistema.carregar().find(function (item) {
            return item.id === id;
        });

        if (!produto) {
            atualizarPagina();
            return;
        }

        try {
            if (acao === "aumentar") {

                sistema.alterarQuantidade(
                    id,
                    produto.quantidade + 1
                );

            } else if (acao === "diminuir") {

                sistema.alterarQuantidade(
                    id,
                    produto.quantidade - 1
                );

            } else if (acao === "remover") {

                sistema.remover(id);
            }

            mostrarMensagem("");

        } catch (erro) {
            mostrarMensagem(erro.message);
        }

        atualizarPagina();
    });

    // ================================================
    // 7. ESVAZIAR CARRINHO GERAL
    // ================================================

    botaoLimpar.addEventListener("click", function () {

        if (sistema.carregar().length === 0) {
            return;
        }

        const confirmar = confirm(
            "Deseja remover todos os produtos do carrinho?"
        );

        if (!confirmar) {
            return;
        }

        sistema.limpar();

        atualizarPagina();

        mostrarMensagem("Carrinho esvaziado com sucesso.");
    });

    // ================================================
    // 8. COPIAR RESUMO DO PEDIDO
    // ================================================

    botaoCopiar.addEventListener("click", async function () {

        const resumo = sistema.gerarResumo();

        try {
            await navigator.clipboard.writeText(resumo);

            mostrarMensagem(
                "Resumo do pedido copiado com sucesso!"
            );

        } catch (erro) {
            console.error("Erro ao copiar:", erro);

            mostrarMensagem(
                "Não foi possível copiar o resumo automaticamente."
            );
        }
    });

    // ================================================
    // 9. ATUALIZAR ENTRE ABAS DO NAVEGADOR
    // ================================================

    window.addEventListener("storage", function (evento) {

        if (evento.key === "rosita_carrinho_v1") {
            atualizarPagina();
        }
    });

    window.addEventListener(
        "rosita:carrinho-atualizado",
        atualizarPagina
    );

    // Atualiza ao voltar para esta aba
    window.addEventListener("pageshow", atualizarPagina);

    // ================================================
    // 10. INICIALIZAÇÃO
    // ================================================

    atualizarPagina();

});
