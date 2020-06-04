const express = require("express")
const server = express()

//configurar public
server.use(express.static("public"))

// configurar caminhos da aplicacao
//página inicial
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})

//liga o servidor
server.listen(3000)