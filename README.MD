<h1 align="center">


<p align="center"><b> BlackMow </b> 🖤✊🏿 <p>

# <br> Projeto Final {Reprograma} - BlackMow

## Projeto Final do Curso da Reprograma - Todas em Tech (TET) | Turma On19 

<br>
<br>


<!--ts-->

- [👧🏾 Objetivo](#-Objetivo)
- [📁 Arquitetura do Projeto](#-Arquitetura-do-Projeto)
- [👩🏾‍💻 Tecnologias e Dependências Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [👩🏾‍🔧 Instalação](#-Instalação)
- [ 🔙 Rotas](#-Rotas)
- [🙋🏾‍♀️ Autora](#-Autora)
- [💓 Agradecimentos](#-Agradecimentos)

<!--ts-->

<br>
<br>

## 👧🏾 Objetivo

<br>


O objetivo desta API é criar um local para consulta de filmes e séries em que o protagonista é uma pessoa pretas ou parda. Tive como inspiração o site *Filmow*, em que além de ser um site onde é possivel registrar todas as séries e filmes que você assistiu ainda é possivel dar nota e deixar um comentário avaliando a obra. O meu intuito com esta API é o divulgar essas produções para que mais pessoas tenham conhecimentos destas obras, que talvez, ainda nem tenham ouvido falar.
<br>

**[Apresentação do Projeto Final](https:)**
<br>


## 📁 Arquitetura do Projeto

<br> 

```
 📁BLACKMOW
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 filmesController.js
   |  |    |- 📄 seriesController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 mongooseConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 filmesModel.js
   |  |    |- 📄 seriesModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 filmesRoutes.js
   |  |    |- 📄 seriesRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 bash.exe.stackdump
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```

<br>
<br>


## 👩🏾‍💻 Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `cors `| CORS é um pacote node.js para fornecer um middleware Connect/Express que pode ser usado para ativar o CORS com várias opções..|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `render`| hospeda a documentação.|

<br>
Link para a documentação:

📝 [Swagger](http://localhost:3030/minha-rota-de-documentacao/#//)

📝 [Render](https://blackmow.onrender.com/blackmow/filmes/todos)

<br>
<br>


## 👩🏾‍🔧 Instalação

<br>

```ps
# Clonar o repositório
$ git clone https://github.com/mariana-cristina-santos/Projeto-Final-Reprograma

# Entrar na pasta do repositório
$ cd PROJETO FINAL

# Instalar as dependências
$ npm i -y 

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
```

## 🔙 Rotas

**Filmes**

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/todos`              | Retorna todos os filmes             |
| GET          | `/filmes/:id`          | Retorna filme específico por id      |
| POST         | `/filmes/novo`    | Cria/cadastra um novo filme          |
| PATCH          | `/filmes/:id`          | Altera informações de um filme      |
| DELET        | `/filmes/:id`          | Remove um filme específico           |
<br>
<br>

**Séries**

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/todos`              | Retorna todos os series             |
| GET          | `/series/:id`          | Retorna series específico por id      |
| POST         | `/series/novo`    | Cria/cadastra uma nova serie          |
| PATCH          | `/series/:id`          | Altera informações de uma serie      |
| DELET        | `/series/:id`          | Remove uma serie específica           |

<br>
<br>

## 🙋🏾‍♀️ Autora

Feito com muito amor (e alguns choros) 💜 por Mariana Cristina Dias dos Santos 
<a href="https://www.linkedin.com/in/mariana-cristina-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>


## 💓 Agradecimentos 

