import app from './app.js'

const port = process.env.PORT;

const host = process.env.HOST
const db_port = process.env.DB_PORT
const db_user = process.env.DB_USER
const database = process.env.DATABASE
const db_password = process.env.DB_PASSWORD
console.log(host,db_password,db_port,db_user,database)

console.log("cheguei no server")

app.listen( port || 3333,()=>{
    console.log(`Server ligado e funcionando na porta ${port}`)
})

