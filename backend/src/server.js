import app from './app.js'

const port = process.env.PORT;

app.listen( port|| 3333,()=>{
    console.log(`Server ligado e funcionando na porta ${port}`)
})

