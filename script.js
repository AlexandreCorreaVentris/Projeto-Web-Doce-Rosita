let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.pontos span');

function mostrarSlide(index) {
    // Garante que o índice fique dentro dos limites (loop infinito)
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Remove a classe 'active' de todos os slides e pontos
    slides.forEach(slide => slide.classList.remove('active'));
    pontos.forEach(ponto => ponto.classList.remove('active'));

    // Adiciona a classe 'active' apenas no slide e ponto atuais
    slides[slideIndex].classList.add('active');
    if (pontos[slideIndex]) {
        pontos[slideIndex].classList.add('active');
    }
}

// Função para os botões "Anterior" (mudarSlide(-1)) e "Próximo" (mudarSlide(1))
function mudarSlide(direcao) {
    mostrarSlide(slideIndex + direcao);
}

// Função para quando clicar diretamente nos pontos
function irParaSlide(index) {
    mostrarSlide(index);
}

// Troca de slide automática a cada 5 segundos
setInterval(() => {
    mudarSlide(1);
}, 2500);

// Inicializa o primeiro slide
mostrarSlide(slideIndex);