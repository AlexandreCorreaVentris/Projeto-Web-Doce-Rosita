
/*
====================================================
 ROSITA DOCES ARTESANAIS
 SALGADOS ARTESANAIS

 - Um único emblema animado
 - Cabeçalho fixo
 - Menus suspensos
 - Prévia de fotografias
 - Seleção de quantidades
 - Carrinho com vários sabores
 - Subtotal sem frete
====================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. EMBLEMA ANIMADO
    // ========================================

    const logo = document.getElementById("logo-animada");
    const origem = document.getElementById("origem-logo");
    const destino = document.getElementById("espaco-logo");

    let animacaoPendente = false;

    function atualizarEmblema() {

        if (!logo || !origem || !destino) {
            return;
        }

        const retanguloOrigem =
            origem.getBoundingClientRect();

        const retanguloDestino =
            destino.getBoundingClientRect();

        const larguraGrande =
            window.innerWidth <= 800 ? 190 : 260;

        const larguraPequena =
            window.innerWidth <= 800 ? 75 : 95;

        const proporcao =
            logo.naturalWidth > 0
                ? logo.naturalHeight / logo.naturalWidth
                : 1;

        const alturaGrande = larguraGrande * proporcao;
        const alturaPequena = larguraPequena * proporcao;

        // A transição acontece durante
        // os primeiros 240 pixels de rolagem.

        const progresso = Math.min(
            1,
            Math.max(0, window.scrollY / 240)
        );

        // Posição inicial: centro do banner.

        const esquerdaInicial =
            retanguloOrigem.left +
            (retanguloOrigem.width - larguraGrande) / 2;

        const topoInicial =
            retanguloOrigem.top +
            (retanguloOrigem.height - alturaGrande) / 2;

        // Posição final: centro do cabeçalho.

        const esquerdaFinal =
            retanguloDestino.left +
            (retanguloDestino.width - larguraPequena) / 2;

        const topoFinal =
            retanguloDestino.top +
            (retanguloDestino.height - alturaPequena) / 2;

        // Interpolação entre as posições.

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

    function solicitarAtualizacaoEmblema() {

        if (animacaoPendente) {
            return;
        }

        animacaoPendente = true;

        requestAnimationFrame(function () {

            atualizarEmblema();

            animacaoPendente = false;

        });

    }

    if (logo && origem && destino) {

        window.addEventListener(
            "scroll",
            solicitarAtualizacaoEmblema,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            solicitarAtualizacaoEmblema
        );

        logo.addEventListener(
            "load",
            solicitarAtualizacaoEmblema
        );

        // Também funciona quando a imagem
        // já foi carregada pelo navegador.

        solicitarAtualizacaoEmblema();

    }


    // ========================================
    // 2. MENUS SUSPENSOS
    // ========================================

    const botoesMenu =
        document.querySelectorAll(".dropdown-botao");

    function fecharMenus() {

        document.querySelectorAll(".dropdown")
            .forEach(function (menu) {

                menu.classList.remove("aberto");

                const botao =
                    menu.querySelector(".dropdown-botao");

                if (botao) {
                    botao.setAttribute(
                        "aria-expanded",
                        "false"
                    );
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

                botao.setAttribute(
                    "aria-expanded",
                    "true"
                );

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


    // ========================================
    // 3. FORMATAÇÃO DOS VALORES
    // ========================================

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    // ========================================
    // 4. ELEMENTOS DOS SABORES
    // ========================================

    const sabores =
        document.querySelectorAll(".sal-sabor");

    const previewImagem =
        document.getElementById("sal-preview-img");

    const previewVazio =
        document.getElementById("sal-preview-vazio");

    const previewNome =
        document.getElementById("sal-preview-nome");

    const previewPreco =
        document.getElementById("sal-preview-preco");


    // ========================================
    // 5. ELEMENTOS DA JANELA
    // ========================================

    const modal =
        document.getElementById("sal-modal");

    const modalImagem =
        document.getElementById("sal-modal-foto");

    const modalSemFoto =
        document.getElementById("sal-sem-foto");

    const modalTitulo =
        document.getElementById("sal-modal-titulo");

    const precoUnitario =
        document.getElementById("sal-unitario");

    const quantidadeInput =
        document.getElementById("sal-quantidade");

    const botaoMenos =
        document.getElementById("sal-menos");

    const botaoMais =
        document.getElementById("sal-mais");

    const subtotalElemento =
        document.getElementById("sal-subtotal");

    const botaoAdicionar =
        document.getElementById("sal-adicionar");

    const botaoOutroSabor =
        document.getElementById("sal-outro-sabor");

    const botaoFechar =
        document.querySelector(".sal-fechar");


    // ========================================
    // 6. ELEMENTOS DO CARRINHO
    // ========================================

    const carrinhoItens =
        document.getElementById("sal-carrinho-itens");

    const carrinhoVazio =
        document.getElementById("sal-carrinho-vazio");

    const carrinhoQuantidade =
        document.getElementById("sal-carrinho-qtd");

    const carrinhoTotal =
        document.getElementById("sal-carrinho-total");

    const botaoLimpar =
        document.getElementById("sal-limpar");

    const botaoCopiar =
        document.getElementById("sal-copiar");

    const copiarStatus =
        document.getElementById("sal-copiar-status");


    // ========================================
    // 7. VARIÁVEIS
    // ========================================

    let saborSelecionado = null;

    const carrinho = new Map();


    // ========================================
    // 8. CARREGAR FOTOGRAFIA
    // ========================================

    function mostrarFotografia(
        imagem,
        aviso,
        caminho,
        nome
    ) {

        imagem.hidden = true;
        aviso.hidden = false;

        // Evita que uma fotografia anterior
        // apareça depois da seleção mudar.

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

        imagem.alt = "Salgado: " + nome;

        if (caminho) {

            imagem.src = caminho;

            // Trata imagens já armazenadas
            // no cache do navegador.

            if (imagem.complete && imagem.naturalWidth > 0) {

                imagem.hidden = false;
                aviso.hidden = true;

            }

        } else {

            imagem.removeAttribute("src");

        }

    }


    // ========================================
    // 9. PRÉVIA DOS SABORES
    // ========================================

    function atualizarPreview(botao) {

        const nome = botao.dataset.nome;

        const preco = Number(botao.dataset.preco);

        const foto = botao.dataset.foto;

        sabores.forEach(function (item) {

            item.classList.toggle(
                "sal-selecionado",
                item === botao
            );

        });

        previewNome.textContent = nome;

        previewPreco.textContent =
            "Valor demonstrativo: " +
            moeda.format(preco);

        mostrarFotografia(
            previewImagem,
            previewVazio,
            foto,
            nome
        );

    }


    // ========================================
    // 10. CÁLCULO DO SUBTOTAL
    // ========================================

    function atualizarSubtotal() {

        if (!saborSelecionado) {
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
            quantidade * saborSelecionado.preco;

        subtotalElemento.textContent =
            moeda.format(subtotal);

        return quantidade;

    }


    // ========================================
    // 11. ABRIR JANELA DO SABOR
    // ========================================

    function abrirModal(botao) {

        saborSelecionado = {

            nome: botao.dataset.nome,

            preco: Number(botao.dataset.preco),

            foto: botao.dataset.foto

        };

        modalTitulo.textContent =
            saborSelecionado.nome;

        precoUnitario.textContent =
            moeda.format(saborSelecionado.preco);

        quantidadeInput.value = 1;

        atualizarSubtotal();

        mostrarFotografia(
            modalImagem,
            modalSemFoto,
            saborSelecionado.foto,
            saborSelecionado.nome
        );

        modal.showModal();

    }


    // ========================================
    // 12. EVENTOS DOS SABORES
    // ========================================

    sabores.forEach(function (botao) {

        botao.addEventListener(
            "mouseenter",
            function () {

                atualizarPreview(botao);

            }
        );

        botao.addEventListener(
            "focus",
            function () {

                atualizarPreview(botao);

            }
        );

        botao.addEventListener(
            "click",
            function () {

                atualizarPreview(botao);
                abrirModal(botao);

            }
        );

    });

    if (sabores.length > 0) {
        atualizarPreview(sabores[0]);
    }


    // ========================================
    // 13. CONTROLES DE QUANTIDADE
    // ========================================

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
        "change",
        atualizarSubtotal
    );


    // ========================================
    // 14. ADICIONAR AO CARRINHO
    // ========================================

    botaoAdicionar.addEventListener("click", function () {

        if (!saborSelecionado) {
            return;
        }

        const quantidade = atualizarSubtotal();

        const nome = saborSelecionado.nome;

        if (carrinho.has(nome)) {

            const produto = carrinho.get(nome);

            produto.quantidade = Math.min(
                999,
                produto.quantidade + quantidade
            );

        } else {

            carrinho.set(nome, {

                nome: nome,

                preco: saborSelecionado.preco,

                quantidade: quantidade

            });

        }

        atualizarCarrinho();

        modal.close();

        document.getElementById("sal-carrinho")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


    // ========================================
    // 15. ATUALIZAR CARRINHO
    // ========================================

    function atualizarCarrinho() {

        carrinhoItens.replaceChildren();

        let quantidadeTotal = 0;

        let valorTotal = 0;

        carrinho.forEach(function (produto, nome) {

            quantidadeTotal += produto.quantidade;

            const subtotal =
                produto.quantidade * produto.preco;

            valorTotal += subtotal;

            // Linha do produto

            const linha =
                document.createElement("div");

            linha.className = "sal-carrinho-linha";

            // Descrição

            const descricao =
                document.createElement("span");

            descricao.textContent =
                produto.nome +
                " — " +
                moeda.format(produto.preco) +
                " cada";

            // Controles

            const controles =
                document.createElement("div");

            controles.className =
                "sal-carrinho-controles";

            // Diminuir

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

            // Quantidade

            const numero =
                document.createElement("strong");

            numero.textContent =
                produto.quantidade;

            // Aumentar

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

            // Subtotal do produto

            const valor =
                document.createElement("strong");

            valor.textContent =
                moeda.format(subtotal);

            // Remover

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

            linha.append(
                descricao,
                controles
            );

            carrinhoItens.appendChild(linha);

        });

        carrinhoVazio.hidden =
            carrinho.size > 0;

        carrinhoQuantidade.textContent =
            quantidadeTotal + " unidade(s)";

        carrinhoTotal.textContent =
            moeda.format(valorTotal);

    }


    // ========================================
    // 16. LIMPAR PEDIDO
    // ========================================

    botaoLimpar.addEventListener("click", function () {

        if (carrinho.size === 0) {
            return;
        }

        if (confirm("Deseja limpar todo o pedido?")) {

            carrinho.clear();

            atualizarCarrinho();

            copiarStatus.textContent = "";

        }

    });


    // ========================================
    // 17. COPIAR RESUMO
    // ========================================

    botaoCopiar.addEventListener(
        "click",
        async function () {

            if (carrinho.size === 0) {

                copiarStatus.textContent =
                    "Escolha pelo menos um salgado.";

                return;

            }

            const linhas = [
                "PEDIDO ROSITA - SALGADOS ARTESANAIS",
                ""
            ];

            let total = 0;
            let unidades = 0;

            carrinho.forEach(function (produto) {

                const subtotal =
                    produto.quantidade * produto.preco;

                total += subtotal;

                unidades += produto.quantidade;

                linhas.push(
                    produto.quantidade +
                    "x " +
                    produto.nome +
                    " - " +
                    moeda.format(subtotal)
                );

            });

            linhas.push(
                "",
                "Quantidade total: " + unidades,
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

        }
    );


    // ========================================
    // 18. FECHAR JANELA
    // ========================================

    botaoFechar.addEventListener("click", function () {

        modal.close();

    });

    botaoOutroSabor.addEventListener("click", function () {

        modal.close();

        document.getElementById("sal-sabores")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {
            modal.close();
        }

    });


    // ========================================
    // 19. INICIALIZAÇÃO
    // ========================================

    atualizarCarrinho();

});
