

# Diflen Votation

O **Diflen Votation** foi criado com o objetivo de automatizar o processo de votação do **Diflen Acamp**, um acampamento para jovens da igreja Paz Church Manaus. Nele, é realizada uma votação para eleger os destaques do acampamento. O projeto visa funcionar mesmo sem conexão à internet, operando apenas na intranet, por meio de roteadores Wi-Fi.

Sempre que possível, estaremos realizando atualizações e melhorias no software. Não se esqueça de deixar uma estrela no projeto\! Obrigado pela atenção, e aceitamos feedbacks.

-----

## 🚀 Dependências do Projeto

Aqui estão as dependências principais necessárias para rodar o projeto. Certifique-se de instalá-las antes de iniciar.

  - [dotenv](https://nodejs.org/) (versão mínima: 16.x)
  - [Express.js](https://expressjs.com/)
  - [Sequelize](https://sequelize.org/)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [mysql2](https://www.npmjs.com/package/mysql2)
  - Ou o banco de dados de sua preferência. Basta modificar o dialect do projeto e instalar a biblioteca referente à sua escolha, e ele se adaptará.

### Como instalar o projeto:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/gcarvalhomartins/diflen_votation.git
    ```

## 🦾 Como instalar as dependências:

1.  No terminal, dentro da pasta `backend`, digite o seguinte comando:
    ```bash
    npm i
    ```
    Este comando serve para instalar todas as dependências.

## 👀 Utilizando o `.env`:

Dentro da pasta `backend`, existe um arquivo chamado `.env.example`. Ele é apenas um exemplo de como você pode utilizar as variáveis de ambiente dentro do projeto e começar a usá-lo:

```
PORT = PORT -- porta para iniciar o projeto.
HOST = HOST -- host do projeto.
DB_PORT = DB_PORT -- porta do banco de dados.
DB_USER = DB_USER -- usuário do banco de dados.
DATABASE = DATABASE -- database do projeto.
DIALECT = DIALECT -- linguagem do seu banco de dados.
DB_PASSWORD = DB_PASSWORD -- senha do usuário do banco.
```

## 📚 Rotas Disponíveis

Lista das rotas que estão disponíveis.

| Métodos | Rotas                 | Descrição                                   |
|---------|-----------------------|---------------------------------------------|
| GET     | `/api/categoria`      | Retorna uma lista de categorias             |
| POST    | `/api/categoria`      | Cria uma nova categoria                     |
| GET     | `/api/categoria/:id`  | Retorna os detalhes de uma categoria        |
| PUT     | `/api/categoria/:id`  | Atualiza os dados de uma categoria          |
| DELETE  | `/api/categoria/:id`  | Remove uma categoria                        |
| GET     | `/api/candidato`      | Retorna uma lista de candidatos             |
| GET     | `/api/candidatosandcategory` | Retorna os candidatos juntamente com suas categorias |
| POST    | `/api/candidato`      | Cria um novo candidato                      |
| GET     | `/api/candidato/:id`  | Retorna os detalhes de um candidato         |
| PUT     | `/api/candidato/:id`  | Atualiza os dados de um candidato           |
| DELETE  | `/api/candidato/:id`  | Remove um candidato                         |
| GET     | `/api/voto`           | Retorna uma lista de votos                  |
| POST    | `/api/voto`           | Cria um novo voto                           |
| GET     | `/api/voto/:id`       | Retorna os detalhes de um voto              |

## ⚙️ Fluxo do Projeto Back-End

O projeto está arquitetado em **MVC** (Models, Views e Controllers).

**Atenção**: Para não sobrecarregar os models, foi criada uma camada de **services** para realizar todas as operações de serviço.

Arquitetura do Projeto:

- `src/`
  - `controllers/` # Contém a lógica para manipulação das requisições.
  - `models/` # Contém os modelos do banco de dados usando Sequelize.
  - `routes/` # Define as rotas e suas conexões com os controladores.
  - `services/` # Implementa a lógica de negócios.
  - `database/` # Contém as configurações do banco de dados.

## Link para download dos JSONs consumidos no Insomnia.

Link do Drive: [https://drive.google.com/drive/folders/1nrrDz5JQlfwT2Mw_jD_uHVUhKhGYcXO6?usp=drive_link](https://drive.google.com/drive/folders/1nrrDz5JQlfwT2Mw_jD_uHVUhKhGYcXO6?usp=drive_link)
