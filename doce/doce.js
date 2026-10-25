
/* ==========================================
   ROSITA DOCES ARTESANAIS
   DOCES GOURMET — JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // 1. LOGOTIPO ANIMADO
    // ======================================

    const logo = document.getElementById("logo-animada");
    const origem = document.getElementById("origem-logo");
    const destino = document.getElementById("espaco-logo");

    if (logo && origem && destino) {

        let atualizacaoPendente = false;

        // Move a imagem para o body sem duplicá-la.
        document.body.appendChild(logo);

        function atualizarLogo() {

            const inicio = origem.getBoundingClientRect();
            const fim = destino.getBoundingClientRect();

            const larguraGrande =
                window.innerWidth <= 650 ? 125 :
                window.innerWidth <= 900 ? 185 : 240;

            const larguraPequena =
                window.innerWidth <= 650 ? 52 :
                window.innerWidth <= 900 ? 70 : 85;

            const proporcao =
                logo.naturalWidth > 0
                    ? logo.naturalHeight / logo.naturalWidth
                    : 1;

            const alturaGrande = larguraGrande * proporcao;
            const alturaPequena = larguraPequena * proporcao;

            // A animação termina após 240px de rolagem.
            const progresso = Math.min(
                1,
                Math.max(0, window.scrollY / 240)
            );

            // Centro inicial, na posição original do banner.
            const esquerdaInicial =
                inicio.left + (inicio.width - larguraGrande) / 2;

            // Compensa a rolagem porque o logo usa position: fixed.
            const topoInicial =
                inicio.top + window.scrollY
                + (inicio.height - alturaGrande) / 2;

            // Centro final, no cabeçalho.
            const esquerdaFinal =
                fim.left + (fim.width - larguraPequena) / 2;

            const topoFinal =
                fim.top + (fim.height - alturaPequena) / 2;

            // Interpolação entre origem e destino.
            const larguraAtual =
                larguraGrande +
                (larguraPequena - larguraGrande) * progresso;

            const esquerdaAtual =
                esquerdaInicial +
                (esquerdaFinal - esquerdaInicial) * progresso;

            const topoAtual =
                topoInicial +
                (topoFinal - topoInicial) * progresso;

            logo.style.width = larguraAtual + "px";
            logo.style.left = esquerdaAtual + "px";
            logo.style.top = topoAtual + "px";
        }

        function solicitarAtualizacao() {

            if (atualizacaoPendente) return;

            atualizacaoPendente = true;

            requestAnimationFrame(function () {
                atualizarLogo();
                atualizacaoPendente = false;
            });
        }

        window.addEventListener(
            "scroll",
            solicitarAtualizacao,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            solicitarAtualizacao
        );

        logo.addEventListener(
            "load",
            solicitarAtualizacao
        );

        solicitarAtualizacao();
    }

    // ======================================
    // 2. MENUS SUSPENSOS
    // ======================================

    const botoesMenu =
        document.querySelectorAll(".dropdown-botao");

    function fecharMenus() {

        document.querySelectorAll(".dropdown")
            .forEach(function (menu) {

                menu.classList.remove("aberto");

                const botao =
                    menu.querySelector(".dropdown-botao");

                if (botao) {
                    botao.setAttribute("aria-expanded", "false");
                }
            });
    }

    botoesMenu.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const menu = botao.closest(".dropdown");

            const estavaAberto =
                menu.classList.contains("aberto");

            fecharMenus();

            if (!estavaAberto) {
                menu.classList.add("aberto");
                botao.setAttribute("aria-expanded", "true");
            }
        });
    });

    document.addEventListener("click", function (evento) {

        if (!evento.target.closest(".dropdown")) {
            fecharMenus();
        }
    });

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            fecharMenus();
        }
    });

    // ======================================
    // 3. FORMATAÇÃO MONETÁRIA
    // ======================================

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // ======================================
    // 4. ELEMENTOS DA PÁGINA
    // ======================================

    const doces =
        document.querySelectorAll(".doce-sabor");

    const previewImagem =
        document.getElementById("doce-preview-img");

    const previewVazio =
        document.getElementById("doce-preview-vazio");

    const previewNome =
        document.getElementById("doce-preview-nome");

    const previewPreco =
        document.getElementById("doce-preview-preco");

    const modal =
        document.getElementById("doce-modal");

    const modalImagem =
        document.getElementById("doce-modal-foto");

    const modalSemFoto =
        document.getElementById("doce-sem-foto");

    const modalTitulo =
        document.getElementById("doce-modal-titulo");

    const modalDetalhe =
        document.getElementById("doce-modal-detalhe");

    const precoUnitario =
        document.getElementById("doce-unitario");

    const quantidadeInput =
        document.getElementById("doce-quantidade");

    const botaoMenos =
        document.getElementById("doce-menos");

    const botaoMais =
        document.getElementById("doce-mais");

    const subtotalElemento =
        document.getElementById("doce-subtotal");

    const botaoAdicionar =
        document.getElementById("doce-adicionar");

    const botaoOutroDoce =
        document.getElementById("doce-outro-sabor");

    const botaoFechar =
        document.querySelector(".doce-fechar");

    const carrinhoItens =
        document.getElementById("doce-carrinho-itens");

    const carrinhoVazio =
        document.getElementById("doce-carrinho-vazio");

    const carrinhoQuantidade =
        document.getElementById("doce-carrinho-qtd");

    const carrinhoTotal =
        document.getElementById("doce-carrinho-total");

    const botaoLimpar =
        document.getElementById("doce-limpar");

    const botaoCopiar =
        document.getElementById("doce-copiar");

    const copiarStatus =
        document.getElementById("doce-copiar-status");

    // ======================================
    // 5. ESTADO DO PEDIDO
    // ======================================

    let doceSelecionado = null;

    const carrinho = new Map();

    const sistemaCompartilhado =
        window.RositaCarrinho;

    // Recupera apenas os produtos da categoria Doces.
    if (sistemaCompartilhado) {

        const salvos = sistemaCompartilhado.carregar();

        salvos
            .filter(produto => produto.categoria === "Doces")
            .forEach(function (produto) {

                carrinho.set(produto.nome, {
                    nome: produto.nome,
                    preco: Number(produto.preco),
                    quantidade: Number(produto.quantidade)
                });
            });
    }

    // ======================================
    // 6. EXIBIR FOTOGRAFIA
    // ======================================

    function mostrarFotografia(imagem, aviso, caminho, nome) {

        imagem.hidden = true;
        aviso.hidden = false;

        imagem.onload = null;
        imagem.onerror = null;

        imagem.onload = function () {
            imagem.hidden = false;
            aviso.hidden = true;
        };

        imagem.onerror = function () {
            imagem.hidden = true;
            aviso.hidden = false;
        };

        imagem.alt = "Fotografia de " + nome;

        if (!caminho) {
            imagem.removeAttribute("src");
            return;
        }

        imagem.src = caminho;

        if (imagem.complete && imagem.naturalWidth > 0) {
            imagem.hidden = false;
            aviso.hidden = true;
        }
    }

    // ======================================
    // 7. PRÉVIA DOS DOCES
    // ======================================

    function atualizarPreview(botao) {

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);
        const detalhe = botao.dataset.detalhe;
        const foto = botao.dataset.foto;

        doces.forEach(function (item) {
            item.classList.toggle(
                "doce-selecionado",
                item === botao
            );
        });

        previewNome.textContent = nome;

        previewPreco.textContent =
            detalhe + " — " + moeda.format(preco);

        mostrarFotografia(
            previewImagem,
            previewVazio,
            foto,
            nome
        );
    }

    // ======================================
    // 8. QUANTIDADE E SUBTOTAL
    // ======================================

    function atualizarSubtotal() {

        if (!doceSelecionado) {
            return 1;
        }

        let quantidade =
            parseInt(quantidadeInput.value, 10);

        if (!Number.isFinite(quantidade)) {
            quantidade = 1;
        }

        quantidade = Math.max(
            1,
            Math.min(999, quantidade)
        );

        quantidadeInput.value = quantidade;

        const subtotal =
            quantidade * doceSelecionado.preco;

        subtotalElemento.textContent =
            moeda.format(subtotal);

        return quantidade;
    }

    // ======================================
    // 9. ABRIR MODAL
    // ======================================

    function abrirModal(botao) {

        doceSelecionado = {
            nome: botao.dataset.nome,
            preco: Number(botao.dataset.preco),
            detalhe: botao.dataset.detalhe,
            foto: botao.dataset.foto
        };

        modalTitulo.textContent =
            doceSelecionado.nome;

        modalDetalhe.textContent =
            doceSelecionado.detalhe;

        precoUnitario.textContent =
            moeda.format(doceSelecionado.preco);

        quantidadeInput.value = 1;

        atualizarSubtotal();

        mostrarFotografia(
            modalImagem,
            modalSemFoto,
            doceSelecionado.foto,
            doceSelecionado.nome
        );

        modal.showModal();
    }

    // ======================================
    // 10. EVENTOS DAS OPÇÕES
    // ======================================

    doces.forEach(function (botao) {

        botao.addEventListener("mouseenter", function () {
            atualizarPreview(botao);
        });

        botao.addEventListener("focus", function () {
            atualizarPreview(botao);
        });

        botao.addEventListener("click", function () {
            atualizarPreview(botao);
            abrirModal(botao);
        });
    });

    if (doces.length > 0) {
        atualizarPreview(doces[0]);
    }

    // ======================================
    // 11. BOTÕES DE QUANTIDADE
    // ======================================

    botaoMais.addEventListener("click", function () {

        const quantidade = atualizarSubtotal();

        quantidadeInput.value =
            Math.min(999, quantidade + 1);

        atualizarSubtotal();
    });

    botaoMenos.addEventListener("click", function () {

        const quantidade = atualizarSubtotal();

        quantidadeInput.value =
            Math.max(1, quantidade - 1);

        atualizarSubtotal();
    });

    quantidadeInput.addEventListener(
        "input",
        atualizarSubtotal
    );

    quantidadeInput.addEventListener(
        "change",
        atualizarSubtotal
    );

    // ======================================
    // 12. ADICIONAR AO PEDIDO
    // ======================================

    botaoAdicionar.addEventListener("click", function () {

        if (!doceSelecionado) return;

        const quantidade = atualizarSubtotal();
        const nome = doceSelecionado.nome;

        if (carrinho.has(nome)) {

            const produto = carrinho.get(nome);

            produto.quantidade = Math.min(
                999,
                produto.quantidade + quantidade
            );

        } else {

            carrinho.set(nome, {
                nome: nome,
                preco: doceSelecionado.preco,
                quantidade: quantidade
            });
        }

        atualizarCarrinho();

        modal.close();

        document.getElementById("doce-carrinho")
            .scrollIntoView({
                behavior: "smooth"
            });
    });

    // ======================================
    // 13. SALVAR CARRINHO COMPARTILHADO
    // ======================================

    function salvarCarrinhoCompartilhado() {

        if (!sistemaCompartilhado) return;

        const salvos = sistemaCompartilhado.carregar();

        // Preserva bolos, geladinhos e salgados.
        const outrosProdutos = salvos.filter(
            produto => produto.categoria !== "Doces"
        );

        // Acrescenta a versão atualizada dos doces.
        carrinho.forEach(function (produto) {

            outrosProdutos.push({
                id: "Doces:" + produto.nome,
                categoria: "Doces",
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade,
                unidade: "embalagem"
            });
        });

        sistemaCompartilhado.salvar(outrosProdutos);
    }

    // ======================================
    // 14. ATUALIZAR CARRINHO VISUAL
    // ======================================

    function atualizarCarrinho(salvar = true) {

        carrinhoItens.replaceChildren();

        let quantidadeTotal = 0;
        let valorTotal = 0;

        carrinho.forEach(function (produto, nome) {

            quantidadeTotal += produto.quantidade;

            const subtotal =
                produto.quantidade * produto.preco;

            valorTotal += subtotal;

            const linha =
                document.createElement("div");

            linha.className = "doce-carrinho-linha";

            const descricao =
                document.createElement("span");

            descricao.textContent =
                produto.nome + " — " +
                moeda.format(produto.preco) +
                " por embalagem";

            const controles =
                document.createElement("div");

            controles.className =
                "doce-carrinho-controles";

            // Diminuir quantidade
            const diminuir =
                document.createElement("button");

            diminuir.type = "button";
            diminuir.textContent = "−";

            diminuir.setAttribute(
                "aria-label",
                "Diminuir " + nome
            );

            diminuir.addEventListener("click", function () {

                produto.quantidade--;

                if (produto.quantidade <= 0) {
                    carrinho.delete(nome);
                }

                atualizarCarrinho();
            });

            // Mostrar quantidade
            const numero =
                document.createElement("strong");

            numero.textContent = produto.quantidade;

            // Aumentar quantidade
            const aumentar =
                document.createElement("button");

            aumentar.type = "button";
            aumentar.textContent = "+";

            aumentar.setAttribute(
                "aria-label",
                "Aumentar " + nome
            );

            aumentar.addEventListener("click", function () {

                produto.quantidade = Math.min(
                    999,
                    produto.quantidade + 1
                );

                atualizarCarrinho();
            });

            // Subtotal
            const valor =
                document.createElement("strong");

            valor.textContent = moeda.format(subtotal);

            // Remover produto
            const remover =
                document.createElement("button");

            remover.type = "button";
            remover.textContent = "Remover";

            remover.addEventListener("click", function () {

                carrinho.delete(nome);
                atualizarCarrinho();
            });

            controles.append(
                diminuir,
                numero,
                aumentar,
                valor,
                remover
            );

            linha.append(descricao, controles);

            carrinhoItens.appendChild(linha);
        });

        carrinhoVazio.hidden = carrinho.size > 0;

        carrinhoQuantidade.textContent =
            quantidadeTotal + " embalagem(ns)";

        carrinhoTotal.textContent =
            moeda.format(valorTotal);

        if (salvar) {
            salvarCarrinhoCompartilhado();
        }
    }

    // ======================================
    // 15. LIMPAR APENAS OS DOCES
    // ======================================

    botaoLimpar.addEventListener("click", function () {

        if (carrinho.size === 0) return;

        if (confirm("Deseja remover os doces do pedido?")) {

            carrinho.clear();
            atualizarCarrinho();

            copiarStatus.textContent = "";
        }
    });

    // ======================================
    // 16. COPIAR RESUMO DO PEDIDO
    // ======================================

    botaoCopiar.addEventListener("click", async function () {

        if (carrinho.size === 0) {

            copiarStatus.textContent =
                "Escolha pelo menos um doce.";

            return;
        }

        const linhas = [
            "PEDIDO ROSITA — DOCES GOURMET",
            ""
        ];

        let total = 0;
        let quantidadeTotal = 0;

        carrinho.forEach(function (produto) {

            const subtotal =
                produto.quantidade * produto.preco;

            total += subtotal;
            quantidadeTotal += produto.quantidade;

            linhas.push(
                produto.quantidade + "x " +
                produto.nome + " — " +
                moeda.format(subtotal)
            );
        });

        linhas.push(
            "",
            "Total de embalagens: " + quantidadeTotal,
            "Subtotal: " + moeda.format(total),
            "Frete não incluído.",
            "Valores sujeitos a confirmação."
        );

        try {

            await navigator.clipboard.writeText(
                linhas.join("\n")
            );

            copiarStatus.textContent =
                "Resumo copiado com sucesso!";

        } catch (erro) {

            copiarStatus.textContent =
                "Não foi possível copiar automaticamente.";
        }
    });

    // ======================================
    // 17. FECHAR MODAL
    // ======================================

    botaoFechar.addEventListener("click", function () {
        modal.close();
    });

    botaoOutroDoce.addEventListener("click", function () {

        modal.close();

        document.getElementById("doce-sabores")
            .scrollIntoView({
                behavior: "smooth"
            });
    });

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {
            modal.close();
        }
    });

    // ======================================
    // 18. INICIALIZAÇÃO
    // ======================================

    // Mostra o carrinho salvo sem regravá-lo
    // desnecessariamente na abertura da página.
    atualizarCarrinho(false);

});
