const express = require("express")
const server = express()

const db = require("./database/db")


//configurar public
server.use(express.static("public"))


//habilitar o reqbody
server.use(express.urlencoded({ extended: true }))

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


server.post("/savepoint", (req, res) => {
    //req.body
    const query = `INSERT INTO places (nome, foto, address, address2, state, city, items) 
    values (?,?,?,?,?,?,?);`
    const values = [
        req.body.nome,
        req.body.foto,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro ao realizar cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html",{ saved: true })
    }

    db.run(query, values, afterInsertData)

})



server.get("/search", (req, res) => {

    const search = req.query.search
    if  (search == ""){
        return res.render("search-results.html", { count: 0 })
    }

    db.all(`Select * from places where city like '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
        const total = rows.length;
        //mostrar a página html com os dadoss
        return res.render("search-results.html", { places: rows, count: total })
    })

})


//liga o servidor
server.listen(3000)