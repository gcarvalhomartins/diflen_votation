# Diflen Votation

O Diflen Votation foi criado no intuito de automatizar o processo de votação do diflen acamp que é um acampamento para jovens da igreja Paz Church Manaus, onde é realizado uma votação para os destaques do acampamento, o projeto tem intuito de conseguir funcionar mesmo nao estando conectado a internet, funcionando somente na intrantet, através de roteatores wifi.</br>

Sempre que pudermos estaremos realizando atualização e melhoria do software. Não esqueça de deixar um star no projeto, obriado pela atenção, aceitamos os feedbacks.


---

## 🚀 Dependências do Projeto

Aqui estão as dependências principais necessárias para rodar o projeto. Certifique-se de instalá-las antes de iniciar.

- [dotenv](https://nodejs.org/) (versão mínima: 16.x)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [nodemon](https://www.npmjs.com/package/nodemon).
- [mysql2](https://www.npmjs.com/package/mysql2).
- Ou o Banco de sua prefência basta somente modificar o dialect do projeto, que instalar a lib referente a sua preferência e ele ira se adaptar. 

### Como instalar o projeto:
1. Clone o repositório:
   ```bash
   git clone https://github.com/gcarvalhomartins/diflen_votation.git
   

## 🦾 Como instalar as dependencias:
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
| GET     | /api/candidatosandcategory          | Retorna os candidatos juntamente com suas categorias          |
| POST    | /api/candidato          | Cria um novo candidato                   |
| GET     | /api/candidato/:id      | Retorna os detalhes de um candidato      |
| PUT     | /api/candidato/:id      | Atualiza os dados de um candidato       |
| DELETE  | /api/candidato/:id      | Remove um candidato                      |
| GET     | /api/voto          | Retorna uma lista de votos          |
| POST    | /api/voto          | Cria um novo voto                   |
| GET     | /api/voto/:id      | Retorna os detalhes de um voto     |


## ⚙️ Fluxo do Projeto Back-End

O Projeto esta arquitetado em MVC, models, Views e Controllers.

Atencao: Para nao sobrecarregar os models, foi criado uma camada de services, para ser realizado todas as operacoes de servicos. 

Arquitetura do Projeto: <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ src/ <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ controllers/ # Contém a lógica para manipulação das requisições. <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ models/ # Contém os modelos do banco de dados usando Sequelize. <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ routes/ # Define as rotas e suas conexões com os controladores. <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ services/ # Implementa a lógica de negócios.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➥ database/ # Contém as configurações do banco de dados.<br/>

## Link para download dos json consumidos no insominia.

link do drive: https://drive.google.com/drive/folders/1nrrDz5JQlfwT2Mw_jD_uHVUhKhGYcXO6?usp=drive_link