//imporação a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

//objeto que ira fazer operações de banco

const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id int autoincrment primary key,
            nome TEXT,
            foto TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    const query = `INSERT INTO (nome, foto, address, address2, state, city, items) values (?,?,?,?,?,?,?);`
    const values = [
        "Colectoria",
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Guilherme Gambela, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas;"

    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
})