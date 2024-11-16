import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()


const dataBase = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const myhost = process.env.HOST
const mydialect = process.env.DIALECT

console.log(dataBase,user,password)
const sequelize = new Sequelize(dataBase,user,password,{
    host:myhost,
    dialect: mydialect
})

try {
    const verify_conn = sequelize.authenticate()
    console.log("connection is sucefful", verify_conn)

}catch(error){
    console.error("erro na conexcao:", error)
}


export default sequelize;
