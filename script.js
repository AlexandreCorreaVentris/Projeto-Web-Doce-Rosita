
/* ==========================================================
   ROSITA DOCES ARTESANAIS
   SCRIPT.JS — VERSÃO CORRIGIDA
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       1. INICIALIZAR ÍCONES
    ====================================================== */

    if (window.lucide) {
        lucide.createIcons();
    }


    /* ======================================================
       2. CARROSSEL PRINCIPAL
    ====================================================== */

    const slider = document.querySelector(".slider");

    if (slider) {

        const slides = slider.querySelectorAll(".slide");

        const pontos = slider.querySelectorAll(".pontos button");

        const botaoAnterior = slider.querySelector(".antes");

        const botaoProximo = slider.querySelector(".proximo");

        let slideIndex = 0;

        let intervaloAutomatico = null;


        /* --------------------------------------------------
           MOSTRAR SLIDE
        -------------------------------------------------- */

        function mostrarSlide(index) {

            if (slides.length === 0) {
                return;
            }

            // Faz o carrossel circular continuamente.
            slideIndex = (
                index % slides.length + slides.length
            ) % slides.length;

            // Remove a classe active dos slides.
            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            // Remove a classe active dos indicadores.
            pontos.forEach(function (ponto) {
                ponto.classList.remove("active");
            });

            // Ativa o slide atual.
            slides[slideIndex].classList.add("active");

            // Ativa o indicador correspondente.
            if (pontos[slideIndex]) {
                pontos[slideIndex].classList.add("active");
            }
        }


        /* --------------------------------------------------
           PRÓXIMO SLIDE
        -------------------------------------------------- */

        function proximoSlide() {
            mostrarSlide(slideIndex + 1);
        }


        /* --------------------------------------------------
           SLIDE ANTERIOR
        -------------------------------------------------- */

        function slideAnterior() {
            mostrarSlide(slideIndex - 1);
        }


        /* --------------------------------------------------
           PARAR TROCA AUTOMÁTICA
        -------------------------------------------------- */

        function pararAutomatico() {

            if (intervaloAutomatico !== null) {

                clearInterval(intervaloAutomatico);

                intervaloAutomatico = null;
            }
        }


        /* --------------------------------------------------
           INICIAR TROCA AUTOMÁTICA
        -------------------------------------------------- */

        function iniciarAutomatico() {

            pararAutomatico();

            if (slides.length <= 1 || document.hidden) {
                return;
            }

            // Avança automaticamente a cada 5 segundos.
            intervaloAutomatico = setInterval(function () {

                proximoSlide();

            }, 5000);
        }


        /* --------------------------------------------------
           BOTÃO ANTERIOR
        -------------------------------------------------- */

        if (botaoAnterior) {

            botaoAnterior.addEventListener("click", function () {

                slideAnterior();

                iniciarAutomatico();
            });
        }


        /* --------------------------------------------------
           BOTÃO PRÓXIMO
        -------------------------------------------------- */

        if (botaoProximo) {

            botaoProximo.addEventListener("click", function () {

                proximoSlide();

                iniciarAutomatico();
            });
        }


        /* --------------------------------------------------
           INDICADORES DO CARROSSEL
        -------------------------------------------------- */

        pontos.forEach(function (ponto, index) {

            ponto.addEventListener("click", function () {

                mostrarSlide(index);

                iniciarAutomatico();
            });
        });


        /* --------------------------------------------------
           ABA DO NAVEGADOR
           Pausa somente quando a aba está oculta.
           O mouse NÃO interrompe mais o carrossel.
        -------------------------------------------------- */

        document.addEventListener("visibilitychange", function () {

            if (document.hidden) {

                pararAutomatico();

            } else {

                iniciarAutomatico();
            }
        });


        /* --------------------------------------------------
           INICIALIZAR CARROSSEL
        -------------------------------------------------- */

        mostrarSlide(0);

        iniciarAutomatico();
    }


    /* ======================================================
       3. MENUS SUSPENSOS
    ====================================================== */

    const menus = document.querySelectorAll(".dropdown");


    /* --------------------------------------------------
       FECHAR TODOS OS MENUS
    -------------------------------------------------- */

    function fecharMenus() {

        menus.forEach(function (menu) {

            menu.classList.remove("aberto");

            const botao = menu.querySelector(".dropdown-botao");

            if (botao) {
                botao.setAttribute("aria-expanded", "false");
            }
        });
    }


    /* --------------------------------------------------
       ABRIR MENU AO CLICAR
    -------------------------------------------------- */

    menus.forEach(function (menu) {

        const botao = menu.querySelector(".dropdown-botao");

        if (!botao) {
            return;
        }

        botao.setAttribute("aria-expanded", "false");

        botao.addEventListener("click", function () {

            const estavaAberto = menu.classList.contains("aberto");

            fecharMenus();

            if (!estavaAberto) {

                menu.classList.add("aberto");

                botao.setAttribute("aria-expanded", "true");
            }
        });
    });


    /* --------------------------------------------------
       FECHAR AO CLICAR FORA
    -------------------------------------------------- */

    document.addEventListener("click", function (evento) {

        if (!evento.target.closest(".dropdown")) {
            fecharMenus();
        }
    });


    /* --------------------------------------------------
       FECHAR COM ESC
    -------------------------------------------------- */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            fecharMenus();
        }
    });


    /* ======================================================
       4. IMAGENS AUTOMÁTICAS DAS MINIATURAS
    ====================================================== */

    const slidesRosita = document.querySelectorAll(
        ".slider .slide"
    );

    const miniaturasRosita = document.querySelectorAll(
        ".miniaturas-carrossel .miniatura"
    );

    miniaturasRosita.forEach(function (miniatura, indice) {

        const slide = slidesRosita[indice];

        if (!slide) {
            return;
        }

        const imagem = slide.querySelector(".hero-imagem");

        if (!imagem) {
            return;
        }

        // Utiliza a mesma imagem do slide.
        miniatura.style.setProperty(
            "background-image",
            'url("' + imagem.src + '")',
            "important"
        );

        miniatura.style.setProperty(
            "background-size",
            "cover",
            "important"
        );

        miniatura.style.setProperty(
            "background-position",
            "center",
            "important"
        );

        miniatura.style.setProperty(
            "background-repeat",
            "no-repeat",
            "important"
        );
    });


   /* ======================================================
   5. MINIATURAS — NAVEGAÇÃO
    ====================================================== */

    const destinos = [
        "#produtos",                   // 1. Abertura
        "#secao-bolos",               // 2. Bolos
        "#secao-geladinhos",          // 3. Geladinhos
        "#secao-doces",               // 4. Doces
        "#secao-salgados",            // 5. Salgados
        "#secao-historia",            // 6. Nossa História
        "carrinho/carrinho.html"      // 7. Encomendas
    ];

    miniaturasRosita.forEach(function (miniatura, indice) {

        miniatura.addEventListener("click", function (evento) {

            evento.stopImmediatePropagation();

            const destino = destinos[indice];

            if (!destino) return;

            if (destino.startsWith("#")) {

                const secao = document.querySelector(destino);

                if (secao) {
                    secao.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
            }

        } else {

            window.location.href = destino;

        }

    }, true);

});
    /* ======================================================
       6. CABEÇALHO E LOGO — SEM TREMOR
    ====================================================== */

    const cabecalho = document.querySelector(".cabecalho");

    if (cabecalho) {

        let compacto = false;
        let atualizacaoPendente = false;

        function atualizarCabecalho() {

            const rolagem = window.scrollY;

            // Encolhe quando ultrapassa 100 pixels.
            if (!compacto && rolagem > 100) {
                compacto = true;
                cabecalho.classList.add("rolando");
            }

            // Volta ao tamanho original abaixo de 40 pixels.
            else if (compacto && rolagem < 40) {
                compacto = false;
                cabecalho.classList.remove("rolando");
            }
        }

        window.addEventListener("scroll", function () {

            if (atualizacaoPendente) return;

            atualizacaoPendente = true;

            requestAnimationFrame(function () {
                atualizarCabecalho();
                atualizacaoPendente = false;
            });

        }, { passive: true });

        atualizarCabecalho();
    }

}); // Mantenha: fecha o DOMContentLoaded.

