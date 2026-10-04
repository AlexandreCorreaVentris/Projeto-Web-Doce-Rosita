
/*
====================================================
 ROSITA DOCES ARTESANAIS
 SALGADOS ARTESANAIS

 - Emblema animado
 - Menus suspensos
 - Fotografias dos salgados
 - Janela de seleção
 - Controle de quantidades
 - Carrinho compartilhado
 - Contador flutuante
 - Persistência dos pedidos
====================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // ========================================
    // 1. EMBLEMA ANIMADO
    // ========================================

    const logo = document.getElementById("logo-animada");
    const origem = document.getElementById("origem-logo");
    const destino = document.getElementById("espaco-logo");

    let animacaoPendente = false;

    function atualizarEmblema() {
        if (!logo || !origem || !destino) return;

        const areaOrigem = origem.getBoundingClientRect();
        const areaDestino = destino.getBoundingClientRect();

        const larguraGrande = window.innerWidth <= 800 ? 190 : 260;
        const larguraPequena = window.innerWidth <= 800 ? 75 : 95;

        const proporcao = logo.naturalWidth > 0
            ? logo.naturalHeight / logo.naturalWidth
            : 1;

        const alturaGrande = larguraGrande * proporcao;
        const alturaPequena = larguraPequena * proporcao;

        const progresso = Math.min(
            1,
            Math.max(0, window.scrollY / 240)
        );

        const esquerdaInicial =
            areaOrigem.left +
            (areaOrigem.width - larguraGrande) / 2;

        const topoInicial =
            areaOrigem.top +
            (areaOrigem.height - alturaGrande) / 2;

        const esquerdaFinal =
            areaDestino.left +
            (areaDestino.width - larguraPequena) / 2;

        const topoFinal =
            areaDestino.top +
            (areaDestino.height - alturaPequena) / 2;

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
        if (animacaoPendente) return;

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
            if (!menu) return;

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
    // 3. FORMATAÇÃO DOS PREÇOS
    // ========================================

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // ========================================
    // 4. ELEMENTOS DOS SALGADOS
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
    // 5. ELEMENTOS DO MODAL
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

    const contadorFlutuante =
        document.getElementById("sal-contador-flutuante");

    // ========================================
    // 7. CARRINHO COMPARTILHADO
    // ========================================

    const sistema = window.RositaCarrinho;

    const carrinho = new Map();

    let saborSelecionado = null;

    if (!sistema) {
        console.error(
            "ERRO: carrinho.js não foi carregado antes de salgado.js."
        );
    } else {
        carregarSalgadosSalvos();
    }

    function carregarSalgadosSalvos() {
        if (!sistema) return;

        carrinho.clear();

        const produtos = sistema.carregar();

        produtos
            .filter(function (produto) {
                return produto.categoria === "Salgados";
            })
            .forEach(function (produto) {
                carrinho.set(produto.nome, {
                    nome: produto.nome,
                    preco: Number(produto.preco),
                    quantidade: Number(produto.quantidade)
                });
            });
    }

    // ========================================
    // 8. FOTOGRAFIAS
    // ========================================

    function mostrarFotografia(
        imagem,
        aviso,
        caminho,
        nome
    ) {
        if (!imagem || !aviso) return;

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

        imagem.alt = "Salgado: " + nome;

        if (caminho) {
            imagem.src = caminho;

            if (imagem.complete && imagem.naturalWidth > 0) {
                imagem.hidden = false;
                aviso.hidden = true;
            }
        } else {
            imagem.removeAttribute("src");
        }
    }

    // ========================================
    // 9. PRÉVIA DO SALGADO
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

        if (previewNome) {
            previewNome.textContent = nome;
        }

        if (previewPreco) {
            previewPreco.textContent =
                "Valor demonstrativo: " +
                moeda.format(preco);
        }

        mostrarFotografia(
            previewImagem,
            previewVazio,
            foto,
            nome
        );
    }

    // ========================================
    // 10. SUBTOTAL DA JANELA
    // ========================================

    function atualizarSubtotal() {
        if (!saborSelecionado) return 1;

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

        subtotalElemento.textContent =
            moeda.format(
                quantidade * saborSelecionado.preco
            );

        return quantidade;
    }

    // ========================================
    // 11. ABRIR JANELA DO SALGADO
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
    // 12. EVENTOS DOS SALGADOS
    // ========================================

    sabores.forEach(function (botao) {
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
    // 14. ADICIONAR SALGADO
    // ========================================

    botaoAdicionar.addEventListener("click", function () {
        if (!saborSelecionado) return;

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

        atualizarCarrinho(true);

        modal.close();

        const secaoPedido =
            document.getElementById("sal-carrinho");

        if (secaoPedido) {
            secaoPedido.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

    // ========================================
    // 15. SALVAR SALGADOS NO CARRINHO GERAL
    // ========================================

    function salvarSalgados() {
        if (!sistema) return;

        const produtosSalvos = sistema.carregar();

        // Preserva geladinhos, bolos e doces.
        const outrosProdutos = produtosSalvos.filter(
            function (produto) {
                return produto.categoria !== "Salgados";
            }
        );

        // Atualiza somente os salgados.
        carrinho.forEach(function (produto) {
            outrosProdutos.push({
                id: "Salgados:" + produto.nome,
                categoria: "Salgados",
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade
            });
        });

        sistema.salvar(outrosProdutos);
    }

   
    // ========================================
    // 16. ATUALIZAR CONTADOR FLUTUANTE
    // ========================================

    function atualizarContador() {

        const contador = document.getElementById(
            "sal-contador-flutuante"
        );

        if (!contador) {
            console.error("Contador do carrinho não encontrado.");
            return;
        }

        let quantidadeTotal = 0;

        if (window.RositaCarrinho) {

            const produtos = window.RositaCarrinho.carregar();

            produtos.forEach(function (produto) {
                quantidadeTotal += Number(produto.quantidade) || 0;
            });

        } else {

            carrinho.forEach(function (produto) {
                quantidadeTotal += Number(produto.quantidade) || 0;
            });

        }

        contador.textContent = quantidadeTotal;

        console.log(
            "Quantidade total no carrinho:",
            quantidadeTotal
        );
    }


    // ========================================
    // 17. EXIBIR CARRINHO DOS SALGADOS
    // ========================================

    function atualizarCarrinho(deveSalvar = false) {
        carrinhoItens.replaceChildren();

        let quantidadeTotal = 0;
        let valorTotal = 0;

        carrinho.forEach(function (produto, nome) {
            quantidadeTotal += produto.quantidade;

            const subtotal =
                produto.quantidade * produto.preco;

            valorTotal += subtotal;

            const linha = document.createElement("div");
            linha.className = "sal-carrinho-linha";

            const descricao = document.createElement("span");
            descricao.textContent =
                produto.nome + " — " +
                moeda.format(produto.preco) + " cada";

            const controles = document.createElement("div");
            controles.className = "sal-carrinho-controles";

            // Diminuir
            const diminuir = document.createElement("button");
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

                atualizarCarrinho(true);
            });

            // Quantidade
            const numero = document.createElement("strong");
            numero.textContent = produto.quantidade;

            // Aumentar
            const aumentar = document.createElement("button");
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

                atualizarCarrinho(true);
            });

            // Subtotal individual
            const valor = document.createElement("strong");
            valor.textContent = moeda.format(subtotal);

            // Remover
            const remover = document.createElement("button");
            remover.type = "button";
            remover.textContent = "Remover";

            remover.addEventListener("click", function () {
                carrinho.delete(nome);
                atualizarCarrinho(true);
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
            quantidadeTotal + " unidade(s)";

        carrinhoTotal.textContent =
            moeda.format(valorTotal);

        // Só grava quando houve uma alteração.
        // Ao abrir a página, apenas lê os dados.
        if (deveSalvar) {
            salvarSalgados();
        }

        // O contador é atualizado após o salvamento.
        atualizarContador();
    }

    // ========================================
    // 18. LIMPAR PEDIDO DE SALGADOS
    // ========================================

    botaoLimpar.addEventListener("click", function () {
        if (carrinho.size === 0) return;

        if (confirm("Deseja limpar o pedido de salgados?")) {
            carrinho.clear();
            atualizarCarrinho(true);
            copiarStatus.textContent = "";
        }
    });

    // ========================================
    // 19. COPIAR RESUMO
    // ========================================

    botaoCopiar.addEventListener("click", async function () {
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
                produto.quantidade + "x " +
                produto.nome + " - " +
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
    });

    // ========================================
    // 20. FECHAR JANELA
    // ========================================

    botaoFechar.addEventListener("click", function () {
        modal.close();
    });

    botaoOutroSabor.addEventListener("click", function () {
        modal.close();

        const secaoSabores =
            document.getElementById("sal-sabores");

        if (secaoSabores) {
            secaoSabores.scrollIntoView({
                behavior: "smooth"
            });
        }
    });

    modal.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            modal.close();
        }
    });

    // ========================================
    // 21. SINCRONIZAR AO VOLTAR À PÁGINA
    // ========================================

    window.addEventListener("pageshow", function () {
        if (sistema) {
            carregarSalgadosSalvos();
            atualizarCarrinho(false);
        }
    });

    // Atualiza se outra aba modificar o pedido.
    window.addEventListener("storage", function (evento) {
        if (evento.key === "rosita_carrinho_v1") {
            carregarSalgadosSalvos();
            atualizarCarrinho(false);
        }
    });

    // ========================================
    // 22. INICIALIZAÇÃO
    // ========================================

    // Não sobrescreve o pedido ao abrir a página.
    atualizarCarrinho(false);

});
