# Diflen Votation

Descrição breve do projeto, explicando seu propósito e funcionalidades principais.

---

## 🚀 Dependências do Projeto

Aqui estão as dependências principais necessárias para rodar o projeto. Certifique-se de instalá-las antes de iniciar.

- [dotenv](https://nodejs.org/) (versão mínima: 16.x)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [nodemon] para ficar startando o projeto.
-[mysql2] para conectar ao banco de dados

### Como instalar as dependências:
1. Clone o repositório:
   ```bash
   git clone https://github.com/gcarvalhomartins/diflen_votation.git
   cd repo

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

1. Arquitetura do Projeto: 
    src/
        controllers/: Contém a lógica para manipulação das requisições.
        models/: Contém os modelos do banco de dados usando Sequelize.
        routes/: Define as rotas e suas conexões com os controladores.
        services/: Implementa a lógica de negócios.
        database/: Contém configurações do banco de dados.

## Link para download dos json consumidos no insominia.

link do drive: https://drive.google.com/drive/folders/1nrrDz5JQlfwT2Mw_jD_uHVUhKhGYcXO6?usp=drive_link