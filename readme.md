# Diflen Votation

Descrição breve do projeto, explicando seu propósito e funcionalidades principais.

---

## 🚀 Dependências do Projeto

Aqui estão as dependências principais necessárias para rodar o projeto. Certifique-se de instalá-las antes de iniciar.

- [dotenv](https://nodejs.org/) (versão mínima: 16.x)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [nodemon](https://www.npmjs.com/package/nodemon).
-[mysql2](https://www.npmjs.com/package/mysql2).

### Como instalar o projeto:
1. Clone o repositório:
   ```bash
   git clone https://github.com/gcarvalhomartins/diflen_votation.git
   cd repo

## 🦾 Como dar instalar as dependencias:
1. no terminal dentro da pasta backend, digite o seguinte comando:
    ```bash
    npm i -- este comando server para instalar todas as dependencias.

## 👀 Utilizando o env:

Dentro da pasta backend, existe um arquivo chamado .env.example, ele e apenas um exemplo 
de como voce pode utilizar as variaveis de ambiente dentro do projeto e comecar a utilizar ele
    
    PORT = PORT -- porta para iniciar o projeto. 
    HOST = HOST -- host do projeto.
    DB_PORT = DB_PORT -- porta do banco de dados. 
    DB_USER = DB_USER -- usuario do banco de dados. 
    DATABASE = DATABASE -- database do projeto. 
    DIALECT = DIALECT -- linguagem do seu banco de dados.
    DB_PASSWORD = DB_PASSWORD -- senha do usuario do banco. 


## 📚 Rotas Disponíveis

Lista das Rotas que estao Disponiveis.
| Métodos | Rotas               | Descrição                               |
|---------|---------------------|-----------------------------------------|
| GET     | /api/categoria          | Retorna uma lista de categorias          |
| POST    | /api/categoria          | Cria uma nova categoria                   |
| GET     | /api/categoria/:id      | Retorna os detalhes de uma categoria      |
| PUT     | /api/categoria/:id      | Atualiza os dados de uma categoria        |
| DELETE  | /api/categoria/:id      | Remove uma categoria                      |
| GET     | /api/candidato          | Retorna uma lista de candidatos          |
| POST    | /api/candidato          | Cria um novo candidato                   |
| GET     | /api/candidato/:id      | Retorna os detalhes de um candidato      |
| PUT     | /api/candidato/:id      | Atualiza os dados de um candidato       |
| DELETE  | /api/candidato/:id      | Remove um candidato                      |
| GET     | /api/voto          | Retorna uma lista de votos          |
| POST    | /api/categoria          | Cria um novo voto                   |
| GET     | /api/categoria/:id      | Retorna os detalhes de um voto     |


## ⚙️ Fluxo do Projeto Back-End

O Projeto esta arquitetado em MVC, models, Views e Controllers.

Atencao: Para nao sobrecarregar os models, foi criado uma camada de services, para ser realizado todas as operacoes de servicos. 

Arquitetura do Projeto: <br/>
    ➥ src/ <br/>
    ➥ controllers/ # Contém a lógica para manipulação das requisições. <br/>
    ➥ models/ # Contém os modelos do banco de dados usando Sequelize. <br/>
    ➥ routes/ # Define as rotas e suas conexões com os controladores. <br/>
    ➥ services/ # Implementa a lógica de negócios.<br/>
    ➥ database/ # Contém as configurações do banco de dados.<br/>

## Link para download dos json consumidos no insominia.

link do drive: https://drive.google.com/drive/folders/1nrrDz5JQlfwT2Mw_jD_uHVUhKhGYcXO6?usp=drive_link