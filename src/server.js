const express = require("express")
const server = express()

const db = require("./database/db")


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

    db.all(`Select * from places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
        const total = rows.length;
        //mostrar a página html com os dadoss
    return res.render("search-results.html",{places: rows, count: total})
    })

})

//liga o servidor
server.listen(3000)