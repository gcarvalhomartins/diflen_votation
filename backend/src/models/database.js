import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const dataBase = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const myhost = process.env.HOST; // Agora será 'db'
const mydialect = process.env.DIALECT;
const dbPort = process.env.DB_PORT; // Adicione a porta do DB

console.log(dataBase, user, password, myhost, dbPort); // Adicione myhost e dbPort para depuração

const sequelize = new Sequelize(dataBase, user, password, {
    host: myhost,
    dialect: mydialect,
    port: dbPort, // Adicione a porta do banco de dados
    logging: false, // Opcional: Desabilita logs detalhados do Sequelize
});

async function connectToDatabase() {
    try {
        await sequelize.authenticate(); // Use 'await' aqui
        console.log("Connection to the database has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

connectToDatabase(); // Chame a função para conectar

export default sequelize;