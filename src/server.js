const express = require("express")
const server = express()

//Configurar pasta pública
server.use(express.static("public"))

//Configurar caminhos da minha aplicação
//pagina inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/views/sobre.html")
})



//Ligar o servidor
server.listen(3000)