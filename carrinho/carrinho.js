
/* =====================================================
   ROSITA DOCES ARTESANAIS
   SISTEMA DE CARRINHO COMPARTILHADO

   Categorias:
   - Geladinhos
   - Bolos
   - Doces
   - Salgados

   Armazenamento: localStorage
===================================================== */

(function () {
    "use strict";

    // Nome utilizado para guardar o pedido no navegador
    const CHAVE_CARRINHO = "rosita_carrinho_v1";

    // ================================================
    // 1. CARREGAR CARRINHO
    // ================================================

    function carregar() {
        try {
            const dados = localStorage.getItem(CHAVE_CARRINHO);

            if (!dados) {
                return [];
            }

            const produtos = JSON.parse(dados);

            return Array.isArray(produtos) ? produtos : [];

        } catch (erro) {
            console.error("Erro ao carregar carrinho:", erro);
            return [];
        }
    }

    // ================================================
    // 2. SALVAR CARRINHO
    // ================================================

    function salvar(produtos) {
        try {
            localStorage.setItem(
                CHAVE_CARRINHO,
                JSON.stringify(produtos)
            );

            // Informa à página que o carrinho mudou
            window.dispatchEvent(
                new CustomEvent("rosita:carrinho-atualizado", {
                    detail: { produtos }
                })
            );

            return true;

        } catch (erro) {
            console.error("Erro ao salvar carrinho:", erro);
            return false;
        }
    }

    // ================================================
    // 3. ADICIONAR PRODUTO
    // ================================================

    function adicionar(produto) {

        const categoria = String(produto.categoria || "").trim();
        const nome = String(produto.nome || "").trim();
        const preco = Number(produto.preco);
        const quantidade = Number(produto.quantidade);

        const categoriasPermitidas = [
            "Geladinhos",
            "Bolos",
            "Doces",
            "Salgados"
        ];

        if (!categoriasPermitidas.includes(categoria)) {
            throw new Error("Categoria inválida.");
        }

        if (!nome) {
            throw new Error("Informe o nome do produto.");
        }

        if (!Number.isFinite(preco) || preco < 0) {
            throw new Error("Preço inválido.");
        }

        if (
            !Number.isSafeInteger(quantidade) ||
            quantidade < 1 ||
            quantidade > 999
        ) {
            throw new Error("Quantidade inválida.");
        }

        // Identificador próprio de cada produto
        const id = categoria + ":" + nome;

       // Futuramente integrar bolo.js e doce.js.

        const produtos = carregar();

        const existente = produtos.find(function (item) {
            return item.id === id;
        });

        if (existente) {

            const novaQuantidade =
                existente.quantidade + quantidade;

            if (novaQuantidade > 999) {
                throw new Error(
                    "Quantidade máxima de 999 unidades por produto."
                );
            }

            existente.quantidade = novaQuantidade;
            existente.preco = preco;

        } else {

            produtos.push({
                id: id,
                categoria: categoria,
                nome: nome,
                preco: preco,
                quantidade: quantidade
            });

        }

        return salvar(produtos);
    }

    // ================================================
    // 4. ALTERAR QUANTIDADE
    // ================================================

    function alterarQuantidade(id, quantidade) {

        quantidade = Number(quantidade);

        if (
            !Number.isSafeInteger(quantidade) ||
            quantidade < 0 ||
            quantidade > 999
        ) {
            throw new Error("Quantidade inválida.");
        }

        const produtos = carregar();

        const produto = produtos.find(function (item) {
            return item.id === id;
        });

        if (!produto) {
            return false;
        }

        if (quantidade === 0) {
            return remover(id);
        }

        produto.quantidade = quantidade;

        return salvar(produtos);
    }

    // ================================================
    // 5. REMOVER PRODUTO
    // ================================================

    function remover(id) {

        const produtos = carregar();

        const atualizados = produtos.filter(function (item) {
            return item.id !== id;
        });

        return salvar(atualizados);
    }

    // ================================================
    // 6. LIMPAR CARRINHO
    // ================================================

    function limpar() {
        return salvar([]);
    }

    // ================================================
    // 7. CALCULAR TOTAIS
    // ================================================

    function calcularTotais() {

        const produtos = carregar();

        let quantidadeTotal = 0;
        let valorTotal = 0;

        produtos.forEach(function (produto) {

            quantidadeTotal += produto.quantidade;

            valorTotal +=
                produto.preco * produto.quantidade;

        });

        return {
            quantidade: quantidadeTotal,
            total: Math.round(valorTotal * 100) / 100
        };
    }

    // ================================================
    // 8. FORMATAR PREÇO
    // ================================================

    function formatarMoeda(valor) {

        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valor);
    }

    // ================================================
    // 9. GERAR RESUMO DO PEDIDO
    // ================================================

    function gerarResumo() {

        const produtos = carregar();
        const totais = calcularTotais();

        if (produtos.length === 0) {
            return "O carrinho está vazio.";
        }

        const linhas = [
            "ROSITA DOCES ARTESANAIS",
            "RESUMO DA ENCOMENDA",
            ""
        ];

        const categorias = [
            "Geladinhos",
            "Bolos",
            "Doces",
            "Salgados"
        ];

        categorias.forEach(function (categoria) {

            const itens = produtos.filter(function (produto) {
                return produto.categoria === categoria;
            });

            if (itens.length === 0) {
                return;
            }

            linhas.push(categoria.toUpperCase());

            itens.forEach(function (produto) {

                const subtotal =
                    produto.preco * produto.quantidade;

                linhas.push(
                    produto.quantidade + "x " +
                    produto.nome + " - " +
                    formatarMoeda(subtotal)
                );
            });

            linhas.push("");
        });

        linhas.push(
            "Quantidade total: " + totais.quantidade,
            "Total estimado: " + formatarMoeda(totais.total),
            "",
            "Frete não incluído.",
            "Valores sujeitos à confirmação."
        );

        return linhas.join("\n");
    }

    // ================================================
    // 10. DISPONIBILIZAR PARA TODAS AS PÁGINAS
    // ================================================

    window.RositaCarrinho = {
    carregar: carregar,
    salvar: salvar,
    adicionar: adicionar,
    alterarQuantidade: alterarQuantidade,
    remover: remover,
    limpar: limpar,
    calcularTotais: calcularTotais,
    formatarMoeda: formatarMoeda,
    gerarResumo: gerarResumo
};
})();

/*
========================================
VOLTAR À PÁGINA ANTERIOR
========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    const botaoVoltar =
        document.getElementById("continuar-escolhendo");

    if (!botaoVoltar) return;

    const paginaAnterior = document.referrer;

    if (paginaAnterior) {

        try {
            const endereco = new URL(paginaAnterior);

            const mesmaOrigem =
                endereco.origin === window.location.origin;

            const paginaCarrinho =
                endereco.pathname === window.location.pathname;

            if (mesmaOrigem && !paginaCarrinho) {
                botaoVoltar.href = endereco.href;
            }

        } catch (erro) {
            console.warn("Não foi possível identificar a página anterior.");
        }
    }
});
