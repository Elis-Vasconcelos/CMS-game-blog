# Blog Editável

## Descrição

O **Blog Editável** é uma aplicação desenvolvida com o objetivo de criar e gerenciar conteúdos de forma dinâmica utilizando **TypeScript**, **React**, **NextJS** e o CMS **Prismic**. A aplicação permite a edição de títulos, subtítulos, textos e imagens tanto na página principal quanto em posts individuais, proporcionando uma experiência de gerenciamento de conteúdo intuitiva e eficiente.

## Funcionalidades Implementadas

### Requisitos Obrigatórios

- **Página Principal Editável:**
  - **Título:** Possibilidade de editar o título da página principal.
  - **Subtítulo:** Possibilidade de editar o subtítulo da página principal.
  - **Imagem:** Possibilidade de editar a imagem exibida na página principal.
  
- **Seção de Posts:**
  - **Título do Post:** Cada post possui um título editável.
  - **Subtítulo do Post:** Cada post possui um subtítulo editável.
  - **Imagem do Post:** Cada post possui uma imagem editável.
  - **Texto do Post:** Cada post possui um conteúdo textual editável.
  
- **Páginas de Post Individuais:** Cada post possui uma página separada que exibe detalhes completos do conteúdo.

- **Responsividade:** A aplicação é totalmente responsiva, garantindo uma ótima experiência em dispositivos móveis, tablets e desktops.

### Requisitos Opcionais

- **Posts Dinâmicos:** Criação e gerenciamento dinâmico de posts no blog.
- **Edição de Posts em Páginas Individuais:** Possibilidade de editar título, subtítulo, texto e imagem diretamente nas páginas individuais dos posts.
- **Personalização do Design:** Customização do design das páginas de posts e histórico de pedidos conforme a preferência do desenvolvedor.

## Tecnologias Utilizadas

- **Front-end:**
  - **TypeScript**
  - **React**
  - **NextJS**
  - **Vite** (opcional)

- **CMS:**
  - **Prismic**

- **Outras Tecnologias:**
  - **CSS/SCSS:** Para estilização e responsividade.
  - **API REST:** Comunicação entre front-end e back-end (se aplicável).

## Design

O design da aplicação foi especificado no **Figma** e pode ser acessado através dos seguintes links:

- [Design 1 - Ruan Correia Brasil](https://www.figma.com/design/HHnCMPtiamwzbKj1BFdsOL/Untitled?node-id=0-1&t=yD7R9ek9Z1DaF9Ba-1)

## Estrutura do Projeto

- client/: Contém o código do front-end, desenvolvido com React e NextJS.
- server/ (se aplicável): Contém o código do back-end, desenvolvido com ExpressJS e Prisma ORM.
- prismic/: Configurações e integrações com o CMS Prismic.
- styles/: Arquivos de estilização da aplicação.
- public/: Recursos estáticos como imagens e fontes.
