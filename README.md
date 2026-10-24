# Rosita Doces Artesanais

**Projeto de Desenvolvimento Web — Versão 3.1.0**

**Disciplina:** Web Design  
**Tecnologias:** HTML5, CSS3 e JavaScript  
**Ambiente de desenvolvimento:** Visual Studio Code  
**Controle de versões:** Git e GitHub


---

## 1. Apresentação do projeto

O projeto **Rosita Doces Artesanais** consiste no desenvolvimento de um site destinado à apresentação de produtos de confeitaria artesanal.

O site apresenta diferentes categorias de produtos, incluindo bolos, doces, salgados e geladinhos gourmet, organizadas em páginas específicas para facilitar a navegação e a visualização dos produtos.

A proposta é proporcionar uma experiência visual agradável, organizada e interativa aos visitantes, valorizando a identidade da confeitaria por meio de cores, imagens, animações e elementos gráficos.

O desenvolvimento faz parte das atividades práticas da disciplina de **Web Design**, permitindo aplicar conhecimentos relacionados à estruturação de páginas, estilização, programação e organização de arquivos.

O projeto utiliza as tecnologias **HTML5, CSS3 e JavaScript**, além das ferramentas Git, GitHub e Visual Studio Code.

A identidade visual da Rosita Doces Artesanais utiliza principalmente tons de vinho e dourado, associados a elementos decorativos que remetem à confeitaria artesanal.

---

## 2. Objetivo geral

Desenvolver um site interativo para apresentação dos produtos da Rosita Doces Artesanais, aplicando conhecimentos de HTML, CSS e JavaScript na construção de uma interface organizada, visualmente atrativa e funcional.

---

## 3. Objetivos específicos

- Organizar o conteúdo das páginas utilizando HTML5.
- Desenvolver uma identidade visual utilizando CSS3.
- Implementar funcionalidades interativas com JavaScript.
- Criar um carrossel automático para apresentação dos produtos.
- Permitir a navegação manual entre os slides.
- Desenvolver menus de navegação interativos.
- Criar páginas específicas para as categorias de produtos.
- Desenvolver uma página dedicada aos geladinhos gourmet.
- Permitir a seleção de sabores e quantidades.
- Calcular automaticamente os valores dos produtos selecionados.
- Implementar uma interface de carrinho de compras.
- Desenvolver uma animação de abertura personalizada.
- Organizar imagens e recursos visuais em pastas.
- Utilizar Git para controle de versões.
- Publicar e manter o projeto no GitHub.

---

## 4. Tecnologias e ferramentas utilizadas

### 4.1. HTML5

Utilizado para estruturar as páginas do site.

Organiza os cabeçalhos, menus, imagens, botões, seções, formulários, links e rodapés.

Também permite estabelecer a organização semântica dos elementos apresentados ao usuário.

### 4.2. CSS3

Utilizado para a estilização e apresentação visual do projeto.

Define cores, fontes, posicionamentos, tamanhos, espaçamentos, animações, transições e adaptações de layout.

O CSS contribui para a identidade visual da confeitaria e para a apresentação dos conteúdos em diferentes tamanhos de tela.

### 4.3. JavaScript

Utilizado para implementar funcionalidades interativas e comportamentos dinâmicos.

Permite manipular elementos HTML, responder às ações dos usuários, controlar animações, calcular valores e atualizar informações apresentadas na página.

### 4.4. Git

Utilizado para registrar as alterações realizadas durante o desenvolvimento.

O versionamento permite acompanhar a evolução do projeto, identificar modificações e preservar o histórico de desenvolvimento.

### 4.5. GitHub

Utilizado para armazenar e disponibilizar o código-fonte do projeto.

Também facilita o compartilhamento dos arquivos e o acompanhamento das versões desenvolvidas.

### 4.6. GitHub Pages

Utilizado para publicar o site na internet, permitindo sua visualização por meio de um navegador.

### 4.7. Visual Studio Code

Editor utilizado durante o desenvolvimento, organização e manutenção dos arquivos HTML, CSS e JavaScript.

---

## 5. Estrutura e organização do projeto

O projeto está organizado em arquivos principais e pastas específicas para cada categoria de produtos.

```text
Projeto-Web-Doce-Rosita/
│
├── index.html
├── inicio.html
├── style.css
├── script.js
├── README.md
│
├── Bolo/
│
├── doce/
│
├── geladinho/
│   ├── geladinho.html
│   ├── geladinho.css
│   └── geladinho.js
│
├── salgado/
│
├── carrinho/
│   ├── carrinho.html
│   ├── carrinho.css
│   └── carrinho.js
│
└── imagens/
```

### 5.1. Arquivos principais

**index.html**

Funciona como a página de entrada do site, apresentando a animação inicial personalizada da Rosita Doces Artesanais.

**inicio.html**

Apresenta a página principal da confeitaria, incluindo os elementos de navegação, carrossel, banners e seções de apresentação dos produtos.

**style.css**

Contém os estilos utilizados na página principal, incluindo cores, posicionamentos, elementos visuais e efeitos.

**script.js**

Contém as funcionalidades JavaScript da página principal, como controle do carrossel, menus interativos e comportamentos relacionados à navegação.

### 5.2. Pasta Bolo

Contém os arquivos relacionados à apresentação dos bolos artesanais.

### 5.3. Pasta doce

Contém os arquivos destinados à apresentação dos doces artesanais.

### 5.4. Pasta geladinho

Contém os arquivos específicos da página de geladinhos gourmet.

- `geladinho.html`: estrutura da página, apresentação dos sabores e interface de pedidos.
- `geladinho.css`: estilização da página.
- `geladinho.js`: funcionalidades interativas, seleção de sabores, quantidades e cálculos.

### 5.5. Pasta salgado

Contém os arquivos relacionados à apresentação dos salgados artesanais.

### 5.6. Pasta carrinho

Contém os arquivos utilizados no desenvolvimento da interface do carrinho de compras.

- `carrinho.html`: estrutura da página do carrinho.
- `carrinho.css`: apresentação visual.
- `carrinho.js`: comportamentos interativos.

### 5.7. Pasta imagens

Armazena os recursos visuais utilizados no site, incluindo logotipos, banners, fotografias de produtos e elementos decorativos.

---

## 6. Funcionalidades desenvolvidas

### 6.1. Carrossel automático

O carrossel apresenta diferentes categorias de produtos.

As imagens são alternadas automaticamente, permitindo que o visitante conheça diferentes opções sem precisar realizar uma ação.

O intervalo programado entre as trocas é de cinco segundos.

### 6.2. Navegação manual do carrossel

O usuário pode avançar para o próximo slide ou retornar ao anterior.

Os indicadores também permitem selecionar diretamente uma apresentação.

Essa funcionalidade oferece maior controle sobre a visualização do conteúdo.

### 6.3. Menus suspensos

Os menus apresentam opções adicionais de navegação.

A abertura ocorre por meio de cliques.

Os menus podem ser fechados ao clicar fora deles ou pressionando a tecla **Esc**.

### 6.4. Miniaturas interativas

As miniaturas apresentam imagens relacionadas aos slides.

O JavaScript associa as miniaturas às imagens do carrossel e permite navegar para seções específicas da página.

### 6.5. Cabeçalho dinâmico

O cabeçalho responde à rolagem da página.

Uma classe CSS é ativada após determinada distância de rolagem, permitindo modificar sua apresentação visual.

### 6.6. Emblema animado

A página de geladinhos apresenta o emblema da Rosita.

O emblema altera seu tamanho e sua posição durante a rolagem, com comportamento controlado por JavaScript.

### 6.7. Prévia dos sabores

O usuário pode selecionar diferentes sabores de geladinhos gourmet.

O sistema apresenta o nome e o preço do produto, além de uma área destinada à fotografia do sabor.

### 6.8. Janela de seleção

Ao clicar em um sabor, uma janela interativa é apresentada.

A janela permite escolher a quantidade desejada.

O usuário pode aumentar ou diminuir essa quantidade por meio dos controles disponíveis.

### 6.9. Cálculo do subtotal

O JavaScript multiplica o preço unitário pela quantidade selecionada.

O resultado é apresentado em reais, utilizando formatação monetária no padrão brasileiro.

**Fórmula utilizada:**

Subtotal = Preço unitário × Quantidade

### 6.10. Carrinho de pedidos

O usuário pode adicionar diferentes sabores ao pedido.

O sistema organiza os itens selecionados durante a utilização da página.

As quantidades podem ser modificadas, e os produtos podem ser removidos individualmente.

O valor total é atualizado automaticamente conforme as alterações realizadas.

### 6.11. Limpeza do pedido

O usuário pode limpar todos os itens do carrinho.

O sistema solicita uma confirmação antes de realizar a limpeza, evitando a exclusão acidental dos produtos selecionados.

### 6.12. Cópia do resumo

O JavaScript prepara um resumo dos produtos selecionados.

O resumo apresenta informações como produtos, quantidades e valores.

O usuário pode copiar essas informações para a área de transferência.

---

## 7. Animação de abertura personalizada

Uma das melhorias visuais do projeto é a animação apresentada no arquivo `index.html`.

A abertura foi desenvolvida para reforçar a identidade da Rosita Doces Artesanais e criar uma experiência visual diferenciada antes da apresentação da página principal.

### 7.1. Elementos da animação

A animação utiliza:

- Fundo com tonalidades de vinho.
- Coração dourado com efeito luminoso.
- Borboleta animada acompanhando o desenho do coração.
- Partículas brilhantes e efeitos decorativos.
- Pequenos corações.
- Efeito de explosão luminosa.
- Apresentação do logotipo da Rosita.
- Frase institucional: **Onde o amor ganha sabor.**

### 7.2. Funcionamento

A animação é executada quando o visitante acessa a página de entrada do site.

Os elementos visuais são apresentados em sequência, utilizando recursos de CSS e JavaScript.

Após a apresentação, ocorre a transição para a página principal.

Também foi disponibilizado um botão para pular a animação, permitindo que o visitante avance diretamente para o conteúdo do site.

### 7.3. Objetivo da animação

A animação procura estabelecer uma conexão visual entre a identidade da confeitaria e a experiência de navegação.

Além do aspecto decorativo, sua implementação permite aplicar conceitos de temporização, transições, manipulação de elementos e programação de efeitos visuais.

---

## 8. Organização dos arquivos JavaScript

As funcionalidades JavaScript foram distribuídas em arquivos específicos, conforme a finalidade de cada página.

**script.js**

Responsável pelos comportamentos da página principal, incluindo carrossel, menus e elementos interativos.

**geladinho.js**

Responsável pelas funcionalidades da página de geladinhos, incluindo seleção de sabores, quantidades e cálculos.

**carrinho.js**

Destinado aos comportamentos interativos da interface do carrinho de compras.

**index.html**

Contém os recursos necessários para a apresentação da animação de abertura, incluindo sua programação integrada.

A separação dos arquivos facilita a manutenção, a identificação de erros e a organização do desenvolvimento.

---

## 9. Experiência do usuário e identidade visual

O desenvolvimento do site considera a importância de uma interface compreensível, organizada e visualmente atrativa.

Entre os recursos utilizados, destacam-se:

- Navegação por categorias.
- Apresentação visual dos produtos.
- Carrossel de imagens.
- Botões interativos.
- Menus de navegação.
- Animações decorativas.
- Identidade visual com cores associadas à marca.
- Organização dos arquivos e recursos visuais.

A proposta busca equilibrar a apresentação estética com a funcionalidade das páginas.

---

## 10. Atualizações da versão 3.1.0

A versão 3.1.0 documenta uma nova etapa de desenvolvimento do projeto Rosita Doces Artesanais.

### Principais melhorias

**Animação de abertura**

Desenvolvimento de uma apresentação visual personalizada com coração luminoso, borboleta, partículas, logotipo e assinatura da marca.

**Página de geladinhos gourmet**

Atualizações nos arquivos HTML, CSS e JavaScript da categoria, com melhorias na apresentação e nas funcionalidades interativas.

**Carrinho de compras**

Inclusão de uma pasta específica para o carrinho, com arquivos HTML, CSS e JavaScript.

**Imagens dos produtos**

Adição de novos recursos visuais, incluindo fotografias de bolos, doces, salgados e geladinhos gourmet.

**Organização do projeto**

Manutenção da estrutura em pastas, separando páginas, estilos, scripts e imagens.

**Versionamento**

Preparação das atualizações para registro no histórico do Git e publicação no GitHub.

---

## 11. Como executar o projeto

Para executar o site localmente:

1. Acesse o repositório do projeto no GitHub.
2. Baixe os arquivos ou clone o repositório.
3. Abra a pasta do projeto no Visual Studio Code.
4. Localize o arquivo `index.html`.
5. Abra o arquivo em um navegador.
6. Aguarde a animação de abertura ou utilize o botão para avançar.
7. Navegue pelas categorias disponíveis.

O projeto utiliza tecnologias web executadas pelo navegador, sem necessidade de instalação de dependências para sua visualização básica.

### Clonagem pelo Git

```bash
git clone https://github.com/AlexandreCorreaVentris/Projeto-Web-Doce-Rosita.git
```

---

## 12. Versionamento e controle de alterações

O projeto utiliza Git para registrar as modificações realizadas durante o desenvolvimento.

Os commits permitem acompanhar a evolução das funcionalidades, identificar versões anteriores e documentar as alterações.

O GitHub funciona como repositório remoto do código-fonte.

A utilização dessas ferramentas contribui para a organização do projeto e para a prática de procedimentos utilizados no desenvolvimento de software.

---

## 13. Repositório

**GitHub:**

https://github.com/AlexandreCorreaVentris/Projeto-Web-Doce-Rosita

---

## 14. Site publicado

**GitHub Pages:**

https://alexandrecorreaventris.github.io/Projeto-Web-Doce-Rosita/

---

## 15. Possibilidades de melhorias futuras

O projeto poderá receber novas funcionalidades e aprimoramentos, como:

- Melhorias na adaptação para dispositivos móveis.
- Ampliação das categorias e dos produtos.
- Aprimoramento da navegação entre páginas.
- Melhorias de acessibilidade.
- Otimização de imagens e desempenho.
- Aperfeiçoamento do sistema de pedidos.
- Novas animações e recursos visuais.

Essas possibilidades representam oportunidades de continuidade do aprendizado e evolução do site.

---

## 16. Considerações finais

O desenvolvimento do projeto **Rosita Doces Artesanais** possibilitou aplicar conhecimentos de HTML, CSS e JavaScript em uma aplicação web organizada em diferentes páginas.

A construção do site envolveu estruturação de conteúdo, estilização, criação de animações, manipulação de elementos HTML e implementação de funcionalidades interativas.

O carrossel, os menus, a página de geladinhos gourmet, os cálculos de valores e a interface do carrinho demonstram a aplicação prática de conceitos de programação voltados à interação com o usuário.

A animação de abertura também contribuiu para o desenvolvimento da identidade visual, permitindo explorar efeitos gráficos e comportamentos dinâmicos.

Além disso, o projeto proporcionou experiência com controle de versões utilizando Git e GitHub, destacando a importância de registrar alterações e organizar os arquivos durante o desenvolvimento.

A documentação apresentada neste README reúne as principais características e funcionalidades do projeto, servindo como referência para sua manutenção e futuras melhorias.

**Rosita Doces Artesanais — Onde o amor ganha sabor.**