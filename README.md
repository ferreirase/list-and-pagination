<h3 align="center">
  Get Movies
</h3>

<p align="center">

  <a href="https://www.linkedin.com/in/anderson-raphael-ferreira">
    <img alt="Made by Ferreira" src="https://img.shields.io/badge/made%20by-Ferreira-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/ferreirase/GoFinances/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ferreirase/Get-Recipes?style=social">
  </a>
</p>

## :rocket: Sobre o projeto

API construída com o resultado da API **[Studio Ghibli](https://ghibliapi.herokuapp.com/#tag/Films)** e que disponibiliza filmes para serem consultados.

### :floppy_disk: A Estrutura

A API possui as seguintes rotas:

`http://localhost:{PORT}/movies` - retorna todos os filmes cadastrados. Aceita os parâmetros `offset` e `limit` para paginação

`http://localhost:{PORT}/movies/:id` - retorna um filme por id

`http://localhost:{PORT}/movies/release/:release_date` - retorna todos os filmes de mesma data de lançamento


### :cd: Rodando a aplicação!
 
#### Subindo o servidor backend
  1. Clone/Baixe este repositório na sua máquina;
  2. Abrir o terminal na raiz da pasta e rodar `yarn` ou ainda `npm i` para instalação das dependências do projeto;
  3. Ainda no terminal na raiz da pasta, rodar `yarn start` ou ainda `npm run start`;
  4. Pronto, seu servidor backend está no ar e pronto pra ser acessado no endereço "http://localhost:5000" ou na porta que configurar no código. 


## :memo: Tecnologias Utilizadas no Projeto

- *``` NodeJS ```*
- *``` TypeScript ```*
- *``` Express ```*
- *``` Eslint ```*
- *``` Prettier ```*

---

## :man: Author
[**_```Anderson Raphael Ferreira```_**](https://www.linkedin.com/in/anderson-raphael-ferreira/)
