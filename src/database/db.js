//imporação a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

//objeto que ira fazer operações de banco

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;
// utilizar o objeto
// db.serialize(() => {

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             nome TEXT,
//             foto TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     const query = `INSERT INTO places (nome, foto, address, address2, state, city, items) 
//     values (?,?,?,?,?,?,?);`
//     const values = [
//         "Papersider",
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Guilherme Gambela, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão;"

//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)



    // db.run(`DELETE FROM places where id = ?`,[2], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registros deletados com sucesso ")
    // })

//     db.all(`Select id, nome from places`, function (err, rows) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })
// })