# Rosita Doces Artesanais

**Projeto de Desenvolvimento Web — Versão 3.2.0**

**Disciplina:** Web Design  
**Tecnologias:** HTML5, CSS3 e JavaScript  
**Ambiente de desenvolvimento:** Visual Studio Code  
**Controle de versões:** Git e GitHub  
**Última atualização:** 25 de outubro de 2026

---

## 1. Apresentação do projeto

O projeto **Rosita Doces Artesanais** consiste no desenvolvimento de um site destinado à apresentação de produtos de confeitaria artesanal, incluindo bolos, doces, salgados e geladinhos gourmet.

O objetivo é proporcionar uma experiência visual agradável, organizada e interativa, permitindo que os visitantes conheçam os produtos, visualizem fotografias, selecionem quantidades e simulem os valores de suas encomendas.

O projeto utiliza uma identidade visual baseada nas cores vinho, dourado e creme, com elementos decorativos, fotografias de produtos e animações.

Nesta atualização, realizada em **25/10/2026**, foram desenvolvidas e aperfeiçoadas as páginas de **Bolos Artesanais** e **Doces Gourmet**, ampliando as funcionalidades do site.

---

## 2. Objetivo geral

Desenvolver um site interativo para a Rosita Doces Artesanais, aplicando conhecimentos de HTML, CSS e JavaScript para criar uma interface organizada, visualmente atrativa e funcional.

O projeto busca integrar diferentes categorias de produtos a um sistema compartilhado de simulação de encomendas.

## 3. Objetivos específicos

- Organizar as páginas utilizando HTML5.
- Desenvolver a identidade visual utilizando CSS3.
- Implementar funcionalidades interativas com JavaScript.
- Criar um carrossel automático e controles de navegação.
- Desenvolver menus suspensos.
- Criar páginas específicas para cada categoria.
- Apresentar fotografias dos produtos.
- Permitir a seleção de quantidades e pesos.
- Calcular automaticamente os valores estimados.
- Implementar um carrinho compartilhado.
- Armazenar informações utilizando `localStorage`.
- Desenvolver animações para o logotipo.
- Corrigir problemas de navegação e apresentação visual.
- Utilizar Git e GitHub para o controle de versões.

---

## 4. Tecnologias utilizadas

### 4.1. HTML5

Utilizado para estruturar as páginas, incluindo cabeçalhos, menus, imagens, botões, seções de produtos, janelas de seleção e rodapés.

### 4.2. CSS3

Responsável pela apresentação visual do site, incluindo cores, fontes, posicionamento dos elementos, animações, transições e adaptações para diferentes tamanhos de tela.

### 4.3. JavaScript

Utilizado para controlar o carrossel, os menus, as animações, a apresentação das fotografias, a seleção de produtos e o cálculo dos valores estimados.

### 4.4. localStorage

Recurso utilizado para armazenar localmente os produtos selecionados no carrinho, permitindo recuperar as informações durante a navegação.

### 4.5. Git e GitHub

Ferramentas utilizadas para registrar alterações, acompanhar o histórico de desenvolvimento e manter uma cópia do código-fonte.

### 4.6. Visual Studio Code

Editor utilizado para desenvolver, organizar, testar e corrigir os arquivos do projeto.

---

## 5. Estrutura do projeto

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
│   ├── bolo.html
│   ├── bolo.css
│   └── bolo.js
│
├── doce/
│   ├── doce.html
│   ├── doce.css
│   └── doce.js
│
├── geladinho/
│   ├── geladinho.html
│   ├── geladinho.css
│   └── geladinho.js
│
├── salgado/
│   ├── salgado.html
│   ├── salgado.css
│   └── salgado.js
│
├── carrinho/
│   ├── carrinho.html
│   ├── carrinho.css
│   ├── carrinho.js
│   └── carrinho-pagina.js
│
└── imagens/
    ├── Fotografias dos bolos
    ├── Fotografias dos doces
    ├── Fotografias dos salgados
    ├── Fotografias dos geladinhos
    ├── Banners
    └── Logotipos
```

**Observação:** os nomes apresentados dentro da pasta `imagens` representam grupos de arquivos, não necessariamente subpastas existentes.

As fotografias ficam na pasta principal `imagens`, separada das pastas de código das categorias.

---

## 6. Página inicial

A página inicial apresenta a identidade visual da Rosita Doces Artesanais e permite navegar pelas diferentes categorias.

### Funcionalidades

- Carrossel automático de produtos.
- Navegação manual entre slides.
- Menus suspensos.
- Logotipo animado.
- Acesso às páginas de produtos.
- Links de navegação entre categorias.

### Correção do logotipo

Foi identificado um problema de oscilação do logotipo durante a rolagem da página.

A lógica de atualização do cabeçalho foi ajustada, utilizando limites diferentes para expandir e compactar o menu.

Também foi utilizado `requestAnimationFrame()` para organizar as atualizações visuais.

---

## 7. Desenvolvimento da página Bolos Artesanais

**Data:** 25/10/2026

Nesta etapa, foi desenvolvida e ajustada a página de Bolos Artesanais, seguindo a identidade visual das demais páginas do site.

### 7.1. Produtos cadastrados

| Bolo artesanal | Preço por kg |
|---|---:|
| Chocolate com Morango | R$ 40,00 |
| Frutas | R$ 35,00 |
| Ouro Branco | R$ 45,00 |
| Floresta Negra | R$ 40,00 |
| Olho de Sogra | R$ 40,00 |
| Abacaxi | R$ 35,00 |
| Red Velvet | R$ 40,00 |

### 7.2. Funcionalidades implementadas

A página permite:

- Visualizar os sabores disponíveis.
- Apresentar fotografias dos bolos.
- Selecionar um bolo.
- Definir o peso desejado em quilogramas.
- Ajustar o peso em intervalos de 0,5 kg.
- Calcular automaticamente o valor estimado.
- Adicionar a seleção ao carrinho compartilhado.

### 7.3. Cálculo dos valores

Os bolos são comercializados por quilograma.

O cálculo é realizado pela fórmula:

**Valor estimado = preço por kg × peso selecionado**

Exemplo:

Bolo de Chocolate com Morango:

- Preço: R$ 40,00/kg.
- Peso escolhido: 1,5 kg.
- Valor estimado: R$ 60,00.

### 7.4. Apresentação visual

A página recebeu:

- Banner personalizado com fotografias de bolos.
- Fundo em tons de vinho.
- Ornamentos dourados.
- Logotipo centralizado.
- Animação do logotipo durante a rolagem.
- Lista de sabores.
- Área de visualização das fotografias.
- Janela de seleção do peso.

### 7.5. Correções realizadas

Durante o desenvolvimento, foram realizados ajustes relacionados a:

- Caminhos das imagens.
- Tamanho e proporção do banner.
- Posicionamento do logotipo.
- Navegação entre as categorias.
- Organização dos elementos visuais.

Foi corrigido também um caminho incorreto que direcionava a navegação para `bolos/bolos.html`, quando o arquivo correto era `Bolo/bolo.html`.

---

## 8. Desenvolvimento da página Doces Gourmet

**Data:** 25/10/2026

Nesta etapa, foi desenvolvida a página de Doces Gourmet, utilizando como referência a organização visual das páginas Bolos, Salgados e Geladinhos.

O objetivo foi manter uma identidade visual consistente entre as categorias.

### 8.1. Produtos cadastrados

| Produto | Quantidade | Peso da embalagem | Preço |
|---|---|---|---:|
| Brigadeiro | 5 unidades | 100 g | R$ 10,00 |
| Beijinho | 5 unidades | 100 g | R$ 10,00 |
| Brigadeiro Amargo | 5 unidades | 100 g | R$ 12,00 |
| Morango do Amor | 1 unidade | 100 g | R$ 20,00 |
| Delícia de Natal | 1 unidade | 125 g | R$ 15,00 |
| Cajuzinho | 5 unidades | 100 g | R$ 12,00 |
| Brigadeiro de Amendoim | 5 unidades | 100 g | R$ 10,00 |
| Bolo de Pote de Chocolate com Morango | 1 unidade | 150 g | R$ 20,00 |
| Bolo de Pote de Abacaxi | 1 unidade | 150 g | R$ 20,00 |
| Bolo de Pote de Ninho com Nutella | 1 unidade | 150 g | R$ 20,00 |
| Bolo de Pote de Maracujá | 1 unidade | 150 g | R$ 20,00 |

**Total: 11 opções de doces.**

Os preços correspondem às embalagens ou unidades indicadas.

### 8.2. Desenvolvimento das fotografias

Foram preparadas imagens individuais dos produtos, buscando apresentar suas características de maneira atrativa.

Entre os produtos representados estão:

- Brigadeiro tradicional.
- Brigadeiro amargo gourmet.
- Beijinho de coco.
- Morango do Amor.
- Delícia de Natal.
- Cajuzinho.
- Brigadeiro de Amendoim.
- Bolos de pote de diferentes sabores.

O **Morango do Amor** foi representado com morango fresco, cobertura cremosa de brigadeiro e camada externa de caramelo vermelho.

A **Delícia de Natal** foi representada como uma trufa de chocolate em formato de árvore natalina.

### 8.3. Desenvolvimento do banner

Foi elaborado um banner específico para a página Doces, utilizando fotografias de diferentes sobremesas.

O banner apresenta:

- Fotografias de doces distribuídas nas laterais.
- Área central em tons de vermelho e vinho.
- Elementos decorativos dourados.
- Espaço para o logotipo.
- Textos de apresentação.

A proposta visual evita separar rigidamente os tipos de doces, buscando uma composição mais equilibrada.

### 8.4. Texto de apresentação

A página utiliza a identificação:

**DOCES ESPECIAIS**

**Doces**

*Pequenas delícias preparadas artesanalmente para proporcionar momentos de prazer e alegria.*

Instrução apresentada ao visitante:

*Passe o mouse para visualizar a fotografia; clique ou toque para escolher a quantidade e simular o valor.*

### 8.5. Funcionalidades desenvolvidas

A página permite:

- Visualizar a lista de doces.
- Identificar a quantidade e o peso de cada embalagem.
- Selecionar um produto.
- Visualizar a fotografia correspondente.
- Consultar o preço.
- Escolher a quantidade desejada.
- Simular o valor da encomenda.
- Utilizar a estrutura do carrinho compartilhado.

### 8.6. Correção do banner

Durante os testes, foi identificado que o banner ocupava praticamente toda a altura da tela, deixando a imagem excessivamente esticada.

A configuração original utilizava:

```css
min-height: 650px;
height: calc(100vh - 78px);
```

O ajuste realizado foi:

```css
min-height: 620px;
height: 620px;
```

Essa alteração aproximou a altura do banner de Doces da utilizada na página Bolos.

### 8.7. Correção das fotografias

Foi identificado um problema no qual a área de visualização apresentava apenas a mensagem:

**Fotografia do doce**

A verificação envolveu os caminhos das imagens e os atributos `data-foto` utilizados nos elementos HTML.

As fotografias foram organizadas na pasta principal `imagens`, utilizando caminhos relativos como:

```html
data-foto="../imagens/Nome da Fotografia.png"
```

Após os ajustes, a visualização das fotografias passou a funcionar nos testes realizados.

### 8.8. Padronização visual

Foram realizados ajustes para aproximar a página Doces das demais categorias.

Entre os elementos trabalhados estão:

- Dimensões do banner.
- Centralização do conteúdo.
- Posicionamento do logotipo.
- Tipografia.
- Cores.
- Fotografias.
- Espaçamento dos elementos.
- Organização da lista de produtos.

---

## 9. Página Salgados Artesanais

A página de salgados apresenta produtos artesanais, fotografias e recursos de seleção de quantidades.

### Funcionalidades

- Seleção de produtos.
- Visualização de fotografias.
- Cálculo dos valores.
- Carrinho flutuante.
- Integração com o carrinho compartilhado.
- Recuperação das quantidades armazenadas.

### Melhorias realizadas

- Correção do contador do carrinho.
- Ajuste de elementos HTML duplicados.
- Sincronização das quantidades.
- Preservação de produtos de outras categorias.
- Correção de caminhos de navegação.

---

## 10. Página Geladinhos Gourmet

A página apresenta diferentes sabores de geladinhos gourmet.

### Funcionalidades

- Apresentação dos sabores.
- Visualização das fotografias.
- Seleção de quantidades.
- Cálculo dos valores.
- Carrinho flutuante.
- Integração com o carrinho geral.

### Melhorias realizadas

- Sincronização dos produtos.
- Persistência das quantidades.
- Integração com o resumo da encomenda.
- Preservação do layout original.

---

## 11. Carrinho de compras compartilhado

O projeto utiliza um sistema compartilhado de gerenciamento de produtos.

O arquivo principal é:

```text
carrinho/carrinho.js
```

O sistema disponibiliza o objeto:

```javascript
window.RositaCarrinho
```

Os produtos são armazenados no navegador utilizando a chave:

```javascript
rosita_carrinho_v1
```

### 11.1. Informações dos produtos

Os registros podem conter:

```javascript
{
    id: "Doces:Brigadeiro",
    categoria: "Doces",
    nome: "Brigadeiro",
    preco: 10.00,
    quantidade: 2
}
```

### 11.2. Funcionalidades

- Adicionar produtos.
- Alterar quantidades.
- Remover produtos.
- Limpar o carrinho.
- Calcular subtotais.
- Calcular o total estimado.
- Recuperar produtos armazenados.
- Gerar um resumo da encomenda.

### 11.3. Atenção às unidades de medida

O projeto trabalha com diferentes formas de comercialização:

**Bolos:** peso em quilogramas.

**Doces:** embalagens ou unidades.

**Salgados e Geladinhos:** quantidades conforme os produtos cadastrados.

Por isso, a página do carrinho geral deve identificar corretamente a unidade de cada produto.

A apresentação dos pesos dos bolos e das quantidades dos doces deverá ser conferida nos testes finais.

---

## 12. Problemas identificados e soluções

Durante o desenvolvimento, foram identificadas dificuldades relacionadas à estruturação das páginas e à integração das funcionalidades.

### 12.1. Caminhos incorretos

Alguns links apontavam para pastas ou arquivos com nomes diferentes dos existentes.

**Solução:** conferir os nomes reais das pastas e utilizar caminhos relativos corretos.

### 12.2. Fotografias não exibidas

Algumas fotografias não apareciam na área de visualização.

**Solução:** verificar os nomes dos arquivos e os caminhos informados no HTML.

### 12.3. Banner excessivamente alto

A imagem da página Doces aparecia esticada.

**Solução:** reduzir a altura do banner sem alterar a estrutura das demais seções.

### 12.4. Logotipo desalinhado

Foram observadas diferenças no posicionamento e no tamanho do logotipo entre as páginas.

**Solução:** revisar os estilos e o comportamento da animação, utilizando a página Bolos como referência visual.

### 12.5. Alterações que afetavam outras seções

Durante os testes, algumas substituições extensas de código modificaram elementos que já funcionavam.

**Solução:** priorizar correções localizadas, preservando o HTML, o JavaScript e os estilos não relacionados ao problema.

---

## 13. Testes realizados

Durante o desenvolvimento, foram realizados testes manuais de:

- Navegação entre páginas.
- Exibição dos banners.
- Posicionamento do logotipo.
- Seleção de sabores.
- Visualização das fotografias.
- Cálculo de valores.
- Seleção de quantidades.
- Persistência dos produtos.
- Funcionamento do carrinho compartilhado.

### Testes pendentes

- [ ] Verificar todos os links entre categorias.
- [ ] Conferir todas as fotografias de Bolos e Doces.
- [ ] Testar a animação do logotipo em diferentes páginas.
- [ ] Testar a visualização em celulares.
- [ ] Conferir os valores calculados para diferentes pesos de bolo.
- [ ] Verificar a exibição de quilogramas no carrinho geral.
- [ ] Conferir as quantidades e embalagens dos doces no carrinho.
- [ ] Testar a remoção de produtos.
- [ ] Testar o resumo da encomenda.
- [ ] Verificar possíveis erros no console do navegador.
- [ ] Conferir o funcionamento após publicação no GitHub Pages.

---

## 14. Como executar o projeto

1. Abra o Visual Studio Code.
2. Abra a pasta principal do projeto.
3. Localize `index.html` ou `inicio.html`.
4. Execute o site utilizando a extensão Live Server.
5. Navegue pelas categorias disponíveis.
6. Selecione os produtos e realize os testes.

### Observação

O site utiliza arquivos HTML, CSS e JavaScript.

O carrinho armazena informações localmente no navegador e não depende de um banco de dados para essa funcionalidade.

---

## 15. Histórico de versões

### Versão 3.1.0

- Estruturação do projeto.
- Desenvolvimento da página principal.
- Criação do carrossel.
- Implementação dos menus.
- Desenvolvimento da identidade visual.
- Criação das páginas de produtos.
- Organização dos arquivos e imagens.

### Versão 3.2.0 — Atualização de outubro de 2026

**Melhorias anteriores:**

- Integração de Salgados e Geladinhos ao carrinho compartilhado.
- Armazenamento com `localStorage`.
- Correção do contador flutuante.
- Correção da navegação do carrinho.
- Ajustes na animação do logotipo.

**Atualizações de 25/10/2026:**

- Desenvolvimento da página Bolos Artesanais.
- Cadastro de sete sabores de bolos.
- Implementação do cálculo por quilograma.
- Desenvolvimento da página Doces Gourmet.
- Cadastro de onze opções de doces.
- Preparação das fotografias dos produtos.
- Criação do banner personalizado de Doces.
- Ajustes na altura do banner.
- Correção da exibição das fotografias.
- Padronização visual entre as páginas.
- Correção de caminhos de navegação.
- Atualização da documentação.

**Status:** desenvolvimento realizado e testado parcialmente. A publicação desta atualização deve ser confirmada pelo histórico do Git.

---

## 16. Próximas etapas

As próximas atividades previstas são:

- Revisar a integração de Bolos e Doces ao carrinho geral.
- Corrigir eventuais diferenças de apresentação entre as páginas.
- Aperfeiçoar a responsividade.
- Verificar a acessibilidade dos elementos.
- Testar o site em diferentes navegadores.
- Conferir os caminhos das imagens após a publicação.
- Melhorar a apresentação do resumo da encomenda.
- Avaliar futuras formas de encaminhamento dos pedidos.

---

## 17. Controle de versões

Para verificar as alterações:

```bash
git status
```

Para adicionar os arquivos:

```bash
git add .
```

Para registrar a atualização:

```bash
git commit -m "feat: desenvolve paginas de bolos e doces gourmet"
```

Para enviar ao GitHub:

```bash
git push
```

Antes do commit, recomenda-se conferir os arquivos modificados e verificar se não existem cópias temporárias ou arquivos desnecessários.

---

## 18. Repositório

O projeto é mantido no GitHub:

[Projeto-Web-Doce-Rosita](https://github.com/AlexandreCorreaVentris/Projeto-Web-Doce-Rosita)

---

## 19. Considerações finais

O desenvolvimento do projeto Rosita Doces Artesanais permitiu aplicar conhecimentos de HTML, CSS e JavaScript em uma aplicação web voltada à apresentação de produtos e à simulação de encomendas.

A implementação das páginas de Bolos Artesanais e Doces Gourmet representou uma evolução importante, ampliando o catálogo de produtos e incorporando novos recursos de interação.

Durante o desenvolvimento, também foram identificados e corrigidos problemas relacionados à apresentação das imagens, às dimensões dos banners, ao posicionamento do logotipo e aos caminhos de navegação.

Essas atividades contribuíram para o aprendizado sobre organização de arquivos, caminhos relativos, estilização, manipulação de elementos HTML, armazenamento local e manutenção de código.

O projeto permanece em desenvolvimento, com foco na padronização visual, na integração das funcionalidades e na melhoria contínua da experiência dos visitantes.

**Rosita Doces Artesanais — Sabor e carinho em cada detalhe.**
