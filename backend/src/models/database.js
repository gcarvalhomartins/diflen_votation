import { Sequelize } from "sequelize";
const dataBase = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const myhost = process.env.HOST
const mydialect = process.env.DIALECT

const sequelize = new Sequelize(dataBase,username,password,{
    host:myhost,
    dialect: 'mysql'
})

export default sequelize;
