
/* ====================================================
   ROSITA DOCES ARTESANAIS
   BOLOS ARTESANAIS — 7 OPÇÕES

   - Emblema animado
   - Menus suspensos
   - Prévia das fotografias
   - Seleção de peso em kg
   - Cálculo do valor por quilograma
   - Carrinho de bolos
   - Sincronização com o carrinho geral
==================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. EMBLEMA ANIMADO
    // ========================================

    const logo = document.getElementById("logo-animada");
    const origem = document.getElementById("origem-logo");
    const destino = document.getElementById("espaco-logo");

    if (logo) {
        document.body.appendChild(logo);
    }

    let animacaoPendente = false;

    function atualizarEmblema() {

        if (!logo || !origem || !destino) {
            return;
        }

        const retanguloOrigem = origem.getBoundingClientRect();
        const retanguloDestino = destino.getBoundingClientRect();

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
            retanguloOrigem.left +
            (retanguloOrigem.width - larguraGrande) / 2;

        const topoInicial =
            retanguloOrigem.top +
            (retanguloOrigem.height - alturaGrande) / 2;

        const esquerdaFinal =
            retanguloDestino.left +
            (retanguloDestino.width - larguraPequena) / 2;

        const topoFinal =
            retanguloDestino.top +
            (retanguloDestino.height - alturaPequena) / 2;

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
        logo.style.position = "fixed";
        logo.style.zIndex = "9999";
        logo.style.pointerEvents = "none";
        logo.style.display = "block";
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

        solicitarAtualizacaoEmblema();
    }

    // ========================================
    // 2. MENUS SUSPENSOS
    // ========================================

    const botoesMenu =
        document.querySelectorAll(".dropdown-botao");

    function fecharMenus() {

        document.querySelectorAll(".dropdown").forEach(function (menu) {

            menu.classList.remove("aberto");

            const botao = menu.querySelector(".dropdown-botao");

            if (botao) {
                botao.setAttribute("aria-expanded", "false");
            }
        });
    }

    botoesMenu.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const menu = botao.closest(".dropdown");
            const estavaAberto = menu.classList.contains("aberto");

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

    // ========================================
    // 3. FORMATAÇÃO DE MOEDA E PESO
    // ========================================

    const moeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    function formatarPeso(peso) {

        return Number(peso).toLocaleString("pt-BR", {
            maximumFractionDigits: 1
        }) + " kg";
    }

    // ========================================
    // 4. ELEMENTOS DO CARDÁPIO
    // ========================================

    const sabores = document.querySelectorAll(".bolo-sabor");

    const previewImagem = document.getElementById("bolo-preview-img");
    const previewVazio = document.getElementById("bolo-preview-vazio");
    const previewNome = document.getElementById("bolo-preview-nome");
    const previewPreco = document.getElementById("bolo-preview-preco");

    // ========================================
    // 5. ELEMENTOS DO MODAL
    // ========================================

    const modal = document.getElementById("bolo-modal");

    const modalImagem = document.getElementById("bolo-modal-foto");
    const modalSemFoto = document.getElementById("bolo-sem-foto");

    const modalTitulo = document.getElementById("bolo-modal-titulo");
    const precoUnitario = document.getElementById("bolo-unitario");

    const pesoInput = document.getElementById("bolo-peso");
    const botaoMenos = document.getElementById("bolo-menos");
    const botaoMais = document.getElementById("bolo-mais");

    const subtotalElemento = document.getElementById("bolo-subtotal");

    const botaoAdicionar = document.getElementById("bolo-adicionar");
    const botaoOutroSabor = document.getElementById("bolo-outro-sabor");
    const botaoFechar = document.querySelector(".bolo-fechar");

    // ========================================
    // 6. ELEMENTOS DO CARRINHO
    // ========================================

    const carrinhoItens = document.getElementById("bolo-carrinho-itens");
    const carrinhoVazio = document.getElementById("bolo-carrinho-vazio");
    const carrinhoQuantidade = document.getElementById("bolo-carrinho-qtd");
    const carrinhoTotal = document.getElementById("bolo-carrinho-total");

    const botaoLimpar = document.getElementById("bolo-limpar");
    const botaoCopiar = document.getElementById("bolo-copiar");
    const copiarStatus = document.getElementById("bolo-copiar-status");

    const contadorFlutuante =
        document.getElementById("bolo-contador-flutuante");

    // ========================================
    // 7. VARIÁVEIS E CARRINHO
    // ========================================

    let boloSelecionado = null;

    const carrinho = new Map();

    // Recupera os bolos já registrados.
    if (window.RositaCarrinho) {

        const produtosSalvos = RositaCarrinho.carregar();

        produtosSalvos
            .filter(produto => produto.categoria === "Bolos")
            .forEach(produto => {

                carrinho.set(produto.nome, {
                    nome: produto.nome,
                    preco: Number(produto.preco),
                    quantidade: Number(produto.quantidade)
                });
            });
    }

    // ========================================
    // 8. CARREGAR FOTOGRAFIA
    // ========================================

    function mostrarFotografia(imagem, aviso, caminho, nome) {

        imagem.hidden = true;
        aviso.hidden = false;

        imagem.onload = null;
        imagem.onerror = null;

        imagem.alt = nome;

        if (!caminho) {
            imagem.removeAttribute("src");
            return;
        }

        imagem.onload = function () {
            imagem.hidden = false;
            aviso.hidden = true;
        };

        imagem.onerror = function () {
            imagem.hidden = true;
            aviso.hidden = false;
        };

        imagem.src = caminho;

        if (imagem.complete && imagem.naturalWidth > 0) {
            imagem.hidden = false;
            aviso.hidden = true;
        }
    }

    // ========================================
    // 9. PRÉVIA DOS BOLOS
    // ========================================

    function atualizarPreview(botao) {

        const nome = botao.dataset.nome;
        const preco = Number(botao.dataset.preco);
        const foto = botao.dataset.foto;

        sabores.forEach(function (item) {

            item.classList.toggle(
                "bolo-selecionado",
                item === botao
            );
        });

        previewNome.textContent = nome;

        previewPreco.textContent =
            moeda.format(preco) + " por kg";

        mostrarFotografia(
            previewImagem,
            previewVazio,
            foto,
            nome
        );
    }

    // ========================================
    // 10. VALIDAR PESO
    // ========================================

    function normalizarPeso(valor) {

        let peso = Number(String(valor).replace(",", "."));

        if (!Number.isFinite(peso)) {
            peso = 1;
        }

        // Passos de 0,5 kg.
        peso = Math.round(peso * 2) / 2;

        // Peso mínimo 0,5 kg; máximo 50 kg.
        return Math.max(0.5, Math.min(50, peso));
    }

    // ========================================
    // 11. ATUALIZAR SUBTOTAL
    // ========================================

    function atualizarSubtotal() {

        if (!boloSelecionado) {
            return 1;
        }

        const peso = normalizarPeso(pesoInput.value);

        pesoInput.value = peso;

        const subtotal = peso * boloSelecionado.preco;

        subtotalElemento.textContent = moeda.format(subtotal);

        return peso;
    }

    // ========================================
    // 12. ABRIR MODAL
    // ========================================

    function abrirModal(botao) {

        boloSelecionado = {
            nome: botao.dataset.nome,
            preco: Number(botao.dataset.preco),
            foto: botao.dataset.foto
        };

        modalTitulo.textContent = boloSelecionado.nome;

        precoUnitario.textContent =
            moeda.format(boloSelecionado.preco) + "/kg";

        pesoInput.value = 1;

        atualizarSubtotal();

        mostrarFotografia(
            modalImagem,
            modalSemFoto,
            boloSelecionado.foto,
            boloSelecionado.nome
        );

        modal.showModal();
    }

    // ========================================
    // 13. EVENTOS DOS BOLOS
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
    // 14. CONTROLES DO PESO
    // ========================================

    botaoMais.addEventListener("click", function () {

        const peso = atualizarSubtotal();

        pesoInput.value = Math.min(50, peso + 0.5);

        atualizarSubtotal();
    });

    botaoMenos.addEventListener("click", function () {

        const peso = atualizarSubtotal();

        pesoInput.value = Math.max(0.5, peso - 0.5);

        atualizarSubtotal();
    });

    pesoInput.addEventListener("change", atualizarSubtotal);

    // ========================================
    // 15. ADICIONAR BOLO AO CARRINHO
    // ========================================

    botaoAdicionar.addEventListener("click", function () {

        if (!boloSelecionado) {
            return;
        }

        const peso = atualizarSubtotal();
        const nome = boloSelecionado.nome;

        if (carrinho.has(nome)) {

            const produto = carrinho.get(nome);

            produto.quantidade = Math.min(
                50,
                produto.quantidade + peso
            );

        } else {

            carrinho.set(nome, {
                nome: nome,
                preco: boloSelecionado.preco,
                quantidade: peso
            });
        }

        atualizarCarrinho();

        modal.close();

        document.getElementById("bolo-carrinho")
            .scrollIntoView({
                behavior: "smooth"
            });
    });

    // ========================================
    // 16. SINCRONIZAR CARRINHO GERAL
    // ========================================

    function sincronizarCarrinhoGeral() {

        if (!window.RositaCarrinho) {
            return;
        }

        const produtosSalvos = RositaCarrinho.carregar();

        // Preserva salgados, geladinhos e doces.
        const outrosProdutos = produtosSalvos.filter(
            produto => produto.categoria !== "Bolos"
        );

        carrinho.forEach(function (produto) {

            outrosProdutos.push({
                id: "Bolos:" + produto.nome,
                categoria: "Bolos",
                nome: produto.nome,
                preco: produto.preco,

                // Para os bolos, quantidade representa kg.
                quantidade: produto.quantidade,

                unidade: "kg"
            });
        });

        RositaCarrinho.salvar(outrosProdutos);
    }

    // ========================================
    // 17. CONTADOR FLUTUANTE
    // ========================================

    function atualizarContadorFlutuante() {

        if (!window.RositaCarrinho) {
            return;
        }

        const produtos = RositaCarrinho.carregar();

        // Contamos as unidades de salgados,
        // geladinhos e doces, mas cada bolo
        // entra como um item, independentemente
        // do peso escolhido.

        let total = 0;

        produtos.forEach(function (produto) {

            if (produto.categoria === "Bolos") {
                total += 1;
            } else {
                total += Number(produto.quantidade) || 0;
            }
        });

        contadorFlutuante.textContent = total;
    }

    // ========================================
    // 18. ATUALIZAR CARRINHO DE BOLOS
    // ========================================

    function atualizarCarrinho() {

        carrinhoItens.replaceChildren();

        let pesoTotal = 0;
        let valorTotal = 0;

        carrinho.forEach(function (produto, nome) {

            pesoTotal += produto.quantidade;

            const subtotal = produto.quantidade * produto.preco;

            valorTotal += subtotal;

            const linha = document.createElement("div");
            linha.className = "bolo-carrinho-linha";

            const descricao = document.createElement("span");

            descricao.textContent =
                produto.nome +
                " — " +
                moeda.format(produto.preco) +
                "/kg";

            const controles = document.createElement("div");
            controles.className = "bolo-carrinho-controles";

            // DIMINUIR 0,5 KG

            const diminuir = document.createElement("button");
            diminuir.type = "button";
            diminuir.textContent = "−";
            diminuir.setAttribute(
                "aria-label",
                "Diminuir peso de " + nome
            );

            diminuir.addEventListener("click", function () {

                produto.quantidade =
                    Math.round((produto.quantidade - 0.5) * 2) / 2;

                if (produto.quantidade < 0.5) {
                    carrinho.delete(nome);
                }

                atualizarCarrinho();
            });

            // PESO ATUAL

            const peso = document.createElement("strong");
            peso.textContent = formatarPeso(produto.quantidade);

            // AUMENTAR 0,5 KG

            const aumentar = document.createElement("button");
            aumentar.type = "button";
            aumentar.textContent = "+";
            aumentar.setAttribute(
                "aria-label",
                "Aumentar peso de " + nome
            );

            aumentar.addEventListener("click", function () {

                produto.quantidade = Math.min(
                    50,
                    Math.round((produto.quantidade + 0.5) * 2) / 2
                );

                atualizarCarrinho();
            });

            // SUBTOTAL

            const valor = document.createElement("strong");
            valor.textContent = moeda.format(subtotal);

            // REMOVER BOLO

            const remover = document.createElement("button");
            remover.type = "button";
            remover.textContent = "Remover";

            remover.addEventListener("click", function () {

                carrinho.delete(nome);

                atualizarCarrinho();
            });

            controles.append(
                diminuir,
                peso,
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

        carrinhoVazio.hidden = carrinho.size > 0;

        carrinhoQuantidade.textContent =
            formatarPeso(pesoTotal);

        carrinhoTotal.textContent =
            moeda.format(valorTotal);

        sincronizarCarrinhoGeral();
        atualizarContadorFlutuante();
    }

    // ========================================
    // 19. LIMPAR PEDIDO DE BOLOS
    // ========================================

    botaoLimpar.addEventListener("click", function () {

        if (carrinho.size === 0) {
            return;
        }

        if (confirm("Deseja remover todos os bolos do pedido?")) {

            carrinho.clear();

            atualizarCarrinho();

            copiarStatus.textContent = "";
        }
    });

    // ========================================
    // 20. COPIAR RESUMO
    // ========================================

    botaoCopiar.addEventListener("click", async function () {

        if (carrinho.size === 0) {

            copiarStatus.textContent =
                "Escolha pelo menos um bolo.";

            return;
        }

        const linhas = [
            "PEDIDO ROSITA - BOLOS ARTESANAIS",
            ""
        ];

        let pesoTotal = 0;
        let total = 0;

        carrinho.forEach(function (produto) {

            const subtotal =
                produto.quantidade * produto.preco;

            pesoTotal += produto.quantidade;
            total += subtotal;

            linhas.push(
                produto.nome +
                " - " +
                formatarPeso(produto.quantidade) +
                " x " +
                moeda.format(produto.preco) +
                "/kg = " +
                moeda.format(subtotal)
            );
        });

        linhas.push(
            "",
            "Peso total: " + formatarPeso(pesoTotal),
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
    // 21. FECHAR MODAL
    // ========================================

    botaoFechar.addEventListener("click", function () {
        modal.close();
    });

    botaoOutroSabor.addEventListener("click", function () {

        modal.close();

        document.getElementById("bolo-sabores")
            .scrollIntoView({
                behavior: "smooth"
            });
    });

    // ========================================
    // 22. INICIALIZAÇÃO
    // ========================================

    atualizarCarrinho();

});
