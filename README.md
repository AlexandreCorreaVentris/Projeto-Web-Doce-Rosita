
# Rosita Doces Artesanais

**Projeto de Desenvolvimento Web — Versão 3.2.0**

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

A identidade visual da Rosita Doces Artesanais utiliza principalmente tons de vinho e dourado, associados a elementos decorativos que remetem à confeitaria artesanal.

Nesta versão, o projeto recebeu melhorias importantes relacionadas à integração dos pedidos, sincronização entre páginas e correção de problemas identificados durante os testes.

---

## 2. Objetivo geral

Desenvolver um site interativo para apresentação dos produtos da Rosita Doces Artesanais, aplicando conhecimentos de HTML, CSS e JavaScript na construção de uma interface organizada, visualmente atrativa e funcional.

Além da apresentação dos produtos, o sistema busca proporcionar uma experiência de navegação na qual o visitante possa selecionar diferentes sabores, definir quantidades e organizar uma simulação de encomenda em um carrinho compartilhado.

---

## 3. Objetivos específicos

- Organizar o conteúdo das páginas utilizando HTML5.
- Desenvolver uma identidade visual utilizando CSS3.
- Implementar funcionalidades interativas com JavaScript.
- Criar um carrossel automático para apresentação dos produtos.
- Permitir a navegação manual entre os slides.
- Desenvolver menus de navegação interativos.
- Criar páginas específicas para as categorias de produtos.
- Permitir a seleção de sabores e quantidades.
- Calcular automaticamente os valores dos produtos selecionados.
- Implementar um carrinho de compras compartilhado.
- Armazenar os produtos selecionados no navegador.
- Sincronizar os pedidos entre diferentes categorias.
- Atualizar automaticamente o contador do carrinho.
- Corrigir problemas de navegação e animação.
- Desenvolver uma animação de abertura personalizada.
- Organizar imagens e recursos visuais em pastas.
- Utilizar Git para controle de versões.
- Publicar e manter o projeto no GitHub.

---

## 4. Tecnologias e ferramentas utilizadas

### 4.1. HTML5

Utilizado para estruturar as páginas do site.

Organiza cabeçalhos, menus, imagens, botões, seções, formulários, links e rodapés.

Também permite estabelecer a organização semântica dos elementos apresentados ao usuário.

### 4.2. CSS3

Utilizado para a estilização e apresentação visual do projeto.

Define cores, fontes, posicionamentos, tamanhos, espaçamentos, animações, transições e adaptações de layout.

O CSS contribui para a identidade visual da confeitaria e para a apresentação dos conteúdos em diferentes tamanhos de tela.

### 4.3. JavaScript

Utilizado para implementar funcionalidades interativas e comportamentos dinâmicos.

Permite manipular elementos HTML, responder às ações dos usuários, controlar animações, calcular valores e atualizar informações apresentadas na página.

Nesta atualização, também foi utilizado para sincronizar o carrinho de compras entre diferentes páginas.

### 4.4. localStorage

Recurso do navegador utilizado para armazenar os produtos adicionados ao carrinho.

Permite que os itens selecionados permaneçam disponíveis ao navegar entre páginas ou atualizar o site.

O armazenamento ocorre localmente no navegador, sem necessidade de banco de dados.

### 4.5. Git

Utilizado para registrar as alterações realizadas durante o desenvolvimento.

O versionamento permite acompanhar a evolução do projeto, identificar modificações e preservar o histórico de desenvolvimento.

### 4.6. GitHub

Utilizado para armazenar e disponibilizar o código-fonte do projeto.

Também facilita o compartilhamento dos arquivos e o acompanhamento das versões desenvolvidas.

### 4.7. GitHub Pages

Recurso destinado à publicação do site na internet, permitindo sua visualização por meio de um navegador.

### 4.8. Visual Studio Code

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
```

### 5.1. Arquivos principais

**index.html**

Funciona como página de entrada do site, apresentando a animação inicial personalizada da Rosita Doces Artesanais.

**inicio.html**

Apresenta a página principal da confeitaria, incluindo os elementos de navegação, carrossel, banners e seções de apresentação dos produtos.

**style.css**

Contém os estilos utilizados na página principal, incluindo cores, posicionamentos, elementos visuais e efeitos.

**script.js**

Contém as funcionalidades JavaScript da página principal, como controle do carrossel, menus interativos e comportamentos relacionados à navegação.

### 5.2. Pasta Bolo

Contém os arquivos relacionados à apresentação dos bolos artesanais.

A integração completa dessa categoria com o carrinho compartilhado está prevista para uma etapa futura.

### 5.3. Pasta doce

Contém os arquivos destinados à apresentação dos doces artesanais.

A integração completa dessa categoria com o carrinho compartilhado está prevista para uma etapa futura.

### 5.4. Pasta geladinho

Contém os arquivos específicos da página de geladinhos gourmet.

- `geladinho.html`: estrutura da página, apresentação dos sabores e interface de pedidos.
- `geladinho.css`: estilização da página.
- `geladinho.js`: funcionalidades interativas, seleção de sabores, quantidades, cálculos e sincronização com o carrinho geral.

### 5.5. Pasta salgado

Contém os arquivos relacionados à apresentação dos salgados artesanais.

- `salgado.html`: estrutura da página e interface de seleção.
- `salgado.css`: estilização, animações e carrinho flutuante.
- `salgado.js`: seleção de produtos, cálculos, controle de quantidades e integração com o carrinho compartilhado.

### 5.6. Pasta carrinho

Contém os arquivos utilizados no gerenciamento da encomenda geral.

- `carrinho.html`: estrutura da página do carrinho.
- `carrinho.css`: apresentação visual.
- `carrinho.js`: sistema compartilhado de armazenamento e gerenciamento dos produtos.
- `carrinho-pagina.js`: exibição dos produtos, atualização de quantidades, remoção e resumo da encomenda.

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

A abertura ocorre por meio de cliques, permitindo acessar as diferentes categorias de produtos e outras seções do site.

### 6.4. Animação do emblema

O logotipo da Rosita Doces Artesanais possui animações que acompanham a apresentação visual do site.

Na página inicial, o emblema acompanha o comportamento do cabeçalho durante a rolagem.

Nas páginas de produtos, o emblema também participa da transição visual entre o banner e o cabeçalho.

### 6.5. Seleção de produtos

O visitante pode escolher produtos e definir quantidades.

O sistema calcula os valores de acordo com o preço unitário e a quantidade selecionada.

### 6.6. Carrinho de compras compartilhado

O carrinho permite reunir produtos de diferentes categorias em uma única encomenda.

Atualmente, a integração contempla:

- Salgados artesanais.
- Geladinhos gourmet.

As categorias de bolos e doces serão integradas posteriormente.

---

## 7. Atualização da página de salgados

A página de salgados recebeu melhorias relacionadas ao funcionamento do carrinho.

### 7.1. Integração com o carrinho compartilhado

Anteriormente, os produtos eram controlados localmente na página de salgados.

Foi implementada a integração com o sistema `RositaCarrinho`, permitindo compartilhar os produtos selecionados com outras páginas.

Os salgados são identificados pela categoria correspondente, evitando conflitos com produtos de outras categorias.

### 7.2. Persistência dos produtos

Os salgados selecionados são armazenados no navegador.

Ao retornar à página, o sistema recupera os produtos salvos e suas respectivas quantidades.

### 7.3. Sincronização dos pedidos

As alterações realizadas na página de salgados são sincronizadas com o carrinho geral.

Ao atualizar os salgados, os produtos pertencentes a outras categorias são preservados.

### 7.4. Correção do contador flutuante

Foi identificado um problema no qual o contador do carrinho flutuante não apresentava corretamente a quantidade de produtos.

A correção envolveu:

- Revisão da estrutura HTML.
- Remoção de elementos duplicados.
- Correção da atualização do contador.
- Integração com a quantidade total do carrinho compartilhado.

Após a correção, o contador passou a apresentar a quantidade total de unidades armazenadas no carrinho.

### 7.5. Preservação do layout

As alterações foram realizadas mantendo a identidade visual da página.

Foram preservados:

- Cores vinho e dourado.
- Fotografias dos salgados.
- Emblema animado.
- Menus suspensos.
- Janela de seleção de produtos.
- Estilo do carrinho flutuante.

---

## 8. Atualização da página de geladinhos

A página de geladinhos também recebeu integração com o carrinho geral.

### 8.1. Sincronização dos produtos

Os geladinhos selecionados passaram a utilizar o mesmo sistema de armazenamento dos salgados.

Dessa forma, os produtos podem ser reunidos em uma única encomenda.

### 8.2. Armazenamento das quantidades

As quantidades selecionadas são preservadas durante a navegação.

O visitante pode acessar outras categorias e retornar à página de geladinhos sem perder os itens salvos.

### 8.3. Integração com o carrinho geral

Os geladinhos são apresentados na página do carrinho juntamente com os salgados.

Cada produto mantém suas informações:

- Categoria.
- Nome.
- Preço unitário.
- Quantidade.
- Subtotal.

### 8.4. Preservação das funcionalidades

Foram mantidos os recursos visuais e interativos já existentes na página.

A integração não exige mudanças na identidade visual dos geladinhos.

---

## 9. Desenvolvimento do carrinho geral

O carrinho geral foi desenvolvido para centralizar os produtos selecionados nas diferentes categorias.

### 9.1. Arquivo carrinho.js

O arquivo `carrinho.js` contém o sistema compartilhado de gerenciamento dos produtos.

Ele disponibiliza o objeto:

```javascript
window.RositaCarrinho
```

Esse objeto permite que diferentes páginas utilizem as mesmas informações.

### 9.2. Armazenamento dos produtos

Os dados são armazenados utilizando a chave:

```javascript
rosita_carrinho_v1
```

Cada produto contém informações semelhantes a:

```javascript
{
    id: "Salgados:Pão de queijo",
    categoria: "Salgados",
    nome: "Pão de queijo",
    preco: 4.00,
    quantidade: 2
}
```

### 9.3. Funções do sistema

O sistema compartilhado disponibiliza funções para:

- Carregar produtos.
- Salvar produtos.
- Adicionar produtos.
- Alterar quantidades.
- Remover produtos.
- Esvaziar o carrinho.
- Calcular totais.
- Formatar valores monetários.
- Gerar resumo da encomenda.

Entre os métodos utilizados estão:

```javascript
RositaCarrinho.carregar();

RositaCarrinho.salvar(produtos);

RositaCarrinho.alterarQuantidade(id, quantidade);

RositaCarrinho.remover(id);

RositaCarrinho.limpar();

RositaCarrinho.calcularTotais();

RositaCarrinho.formatarMoeda(valor);

RositaCarrinho.gerarResumo();
```

### 9.4. Arquivo carrinho-pagina.js

O arquivo `carrinho-pagina.js` é responsável pela apresentação e interação com os produtos no carrinho geral.

Suas principais funcionalidades são:

- Listar os produtos selecionados.
- Exibir a categoria de cada produto.
- Apresentar os preços unitários.
- Permitir aumentar e diminuir quantidades.
- Remover produtos individualmente.
- Calcular o subtotal de cada produto.
- Calcular a quantidade total de unidades.
- Apresentar o subtotal estimado da encomenda.
- Copiar o resumo do pedido.
- Esvaziar o carrinho mediante confirmação.

### 9.5. Atualização entre páginas

O carrinho utiliza os dados armazenados no navegador para recuperar as informações.

Também possui mecanismos para atualizar sua apresentação quando a página é reaberta ou quando ocorrem alterações no armazenamento.

### 9.6. Correção do botão Continuar escolhendo sabores

Foi identificado um problema no botão **Continuar escolhendo sabores**.

Inicialmente, o botão direcionava o visitante sempre para a página de geladinhos, independentemente da categoria acessada anteriormente.

A navegação foi ajustada para utilizar a página de origem informada pelo navegador.

Quando essa informação não está disponível, o botão possui um destino alternativo para a página inicial.

Também foi corrigida a estrutura HTML do botão, eliminando uma marcação duplicada e preservando seu estilo original.

### 9.7. Resumo da encomenda

O carrinho apresenta:

- Quantidade total de unidades.
- Subtotal estimado.
- Identificação dos produtos.
- Valores individuais.
- Quantidades selecionadas.

O sistema permite copiar um resumo textual da encomenda.

Os valores são estimativos, não incluem frete e estão sujeitos a confirmação.

---

## 10. Correção do bug na página inicial

Durante os testes da página principal, foi identificado um problema relacionado ao comportamento do emblema da Rosita.

### 10.1. Problema identificado

Ao realizar uma rolagem lenta, o logotipo apresentava pequenas oscilações, produzindo um efeito visual de tremor.

Esse comportamento prejudicava a suavidade da animação.

### 10.2. Análise do problema

O cabeçalho possui dois estados visuais:

- Expandido.
- Compacto.

A transição entre esses estados altera o tamanho e a posição dos elementos do cabeçalho.

A alternância próxima ao limite de rolagem podia provocar oscilações.

### 10.3. Correção implementada

A lógica JavaScript responsável pelo cabeçalho foi ajustada.

Foram utilizados limites diferentes para a mudança de estado:

- Acima de 100 pixels: cabeçalho compacto.
- Abaixo de 40 pixels: cabeçalho expandido.

Essa diferença evita alternâncias rápidas próximas de um único limite.

Também foi utilizado o recurso:

```javascript
requestAnimationFrame()
```

Esse mecanismo organiza as atualizações visuais durante a rolagem.

### 10.4. Resultado da correção

Após as alterações, o comportamento do emblema foi estabilizado nos testes realizados.

Foram preservados:

- Logotipo original.
- Animação de redução.
- Cores da identidade visual.
- Menus suspensos.
- Carrossel automático.
- Estrutura do cabeçalho.

---

## 11. Correções e melhorias da versão 3.2.0

Esta atualização reúne as principais melhorias realizadas no projeto.

### 11.1. Salgados

- Integração com o carrinho compartilhado.
- Armazenamento dos produtos.
- Recuperação das quantidades.
- Correção do contador flutuante.
- Remoção de elementos HTML duplicados.
- Preservação dos produtos das outras categorias.

### 11.2. Geladinhos

- Sincronização com o carrinho geral.
- Persistência das quantidades.
- Integração dos produtos ao resumo da encomenda.
- Preservação das funcionalidades anteriores.

### 11.3. Carrinho geral

- Consolidação dos produtos de diferentes categorias.
- Atualização dos subtotais.
- Controles para aumentar e diminuir quantidades.
- Remoção individual de produtos.
- Esvaziamento do carrinho.
- Cópia do resumo da encomenda.
- Correção da navegação de retorno.

### 11.4. Página inicial

- Correção do tremor do logotipo.
- Ajuste da transição do cabeçalho.
- Melhoria na atualização visual durante a rolagem.
- Preservação do layout e das animações.

---

## 12. Testes realizados e verificações

Durante o desenvolvimento, foram identificados e corrigidos problemas relacionados ao funcionamento do carrinho e à animação da página inicial.

Os testes manuais incluíram:

- Inclusão de produtos no carrinho.
- Visualização de salgados e geladinhos na mesma encomenda.
- Conferência das quantidades.
- Verificação dos subtotais.
- Atualização do contador flutuante.
- Navegação entre categorias.
- Verificação do botão de retorno.
- Teste de rolagem lenta na página inicial.

### Testes recomendados antes da publicação

- [ ] Verificar o funcionamento do carrossel.
- [ ] Testar todos os menus suspensos.
- [ ] Conferir os links entre páginas.
- [ ] Adicionar salgados ao carrinho.
- [ ] Adicionar geladinhos ao carrinho.
- [ ] Verificar a soma das quantidades.
- [ ] Aumentar e diminuir produtos no carrinho geral.
- [ ] Remover produtos.
- [ ] Esvaziar o carrinho.
- [ ] Copiar o resumo do pedido.
- [ ] Atualizar o navegador e verificar a persistência.
- [ ] Testar o retorno para a categoria anterior.
- [ ] Verificar a animação do logotipo.
- [ ] Conferir o comportamento em dispositivos móveis.
- [ ] Verificar possíveis erros no console do navegador.

---

## 13. Como executar o projeto

### 13.1. Abrir no Visual Studio Code

1. Abra o Visual Studio Code.
2. Selecione a pasta principal do projeto.
3. Localize o arquivo `index.html` ou `inicio.html`.
4. Execute o projeto utilizando um servidor local, como o Live Server.
5. Navegue entre as categorias.

### 13.2. Utilizar o carrinho

1. Acesse a página de salgados ou geladinhos.
2. Escolha um produto.
3. Defina a quantidade.
4. Adicione ao carrinho.
5. Acesse a página do carrinho geral.
6. Confira os produtos e valores.
7. Continue escolhendo sabores ou copie o resumo da encomenda.

### 13.3. Persistência

Os produtos são armazenados no navegador.

O carrinho permanece disponível enquanto os dados locais do site forem preservados.

O sistema não sincroniza automaticamente os pedidos entre dispositivos diferentes.

---

## 14. Histórico de versões

### Versão 3.1.0

- Estruturação inicial do projeto.
- Desenvolvimento da página principal.
- Criação do carrossel.
- Implementação dos menus.
- Desenvolvimento da identidade visual.
- Criação das páginas de produtos.
- Desenvolvimento da interface inicial do carrinho.
- Organização dos arquivos e imagens.

### Versão 3.2.0 — Atualização atual

- Integração dos salgados ao carrinho compartilhado.
- Integração dos geladinhos ao carrinho compartilhado.
- Armazenamento dos pedidos com localStorage.
- Correção do contador flutuante.
- Correção de elementos HTML duplicados.
- Consolidação dos produtos no carrinho geral.
- Correção do botão Continuar escolhendo sabores.
- Correção do tremor do logotipo na página inicial.
- Atualização da documentação do projeto.

**Observação:** a versão 3.2.0 corresponde à atualização preparada para o próximo commit.

---

## 15. Próximas etapas do desenvolvimento

As próximas melhorias previstas incluem:

- Integrar a página de bolos ao carrinho compartilhado.
- Integrar a página de doces ao carrinho compartilhado.
- Revisar os caminhos de navegação.
- Ampliar os testes de responsividade.
- Melhorar a acessibilidade.
- Revisar o funcionamento em diferentes navegadores.
- Avaliar futuras formas de encaminhamento da encomenda.
- Publicar as atualizações no GitHub Pages.

---

## 16. Controle de versões

Após verificar o funcionamento do projeto, as alterações poderão ser registradas utilizando Git.

### Verificar alterações

```bash
git status
```

### Adicionar arquivos

```bash
git add .
```

### Criar commit

```bash
git commit -m "Integra carrinho compartilhado e corrige navegacao e logo"
```

### Enviar ao GitHub

```bash
git push
```

Antes de adicionar os arquivos, recomenda-se conferir se existem arquivos temporários ou cópias desnecessárias.

---

## 17. Repositório

O projeto é mantido no GitHub.

[Projeto-Web-Doce-Rosita](https://github.com/AlexandreCorreaVentris/Projeto-Web-Doce-Rosita)

---

## 18. Considerações finais

O desenvolvimento do site Rosita Doces Artesanais permitiu aplicar conhecimentos de HTML, CSS e JavaScript em uma aplicação web voltada à apresentação de produtos e à interação com visitantes.

A implementação de um carrinho compartilhado representou uma evolução importante do projeto, permitindo reunir produtos de diferentes categorias em uma única encomenda.

As correções realizadas no contador flutuante, na navegação e na animação do logotipo contribuíram para melhorar a experiência do usuário e a consistência visual do site.

O projeto permanece em desenvolvimento, com novas funcionalidades previstas para as páginas de bolos e doces, além de melhorias relacionadas à navegação, responsividade e organização dos pedidos.
