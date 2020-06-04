const express = require("express")
const server = express()

//configurar public
server.use(express.static("public"))


/*utilizando tamplate engine*/
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da aplicacao
//página inicial
//req: requisição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//liga o servidor
server.listen(3000)