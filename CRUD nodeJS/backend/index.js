import mysql from 'mysql'
import express from 'express'
import cors from 'cors'
import nodemon from 'nodemon'


const app = express()

app.use(express.json())

app.use(cors())

// app.use(cors({
//     origin: ['http://localhost:5173'],
//     methods: ["GET", "POST", "PUT", "DELETE", "SEARCH"],
//     credentials: true,
// }))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_CRUD'
});



app.listen(3001, () => {
    console.log("server is running on port : 3001");

})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM students;"

    db.query(sql, (err, result) => {
        if (err) {
            return res.json({ message: "error" })
        } else {
            return res.json(result)
        }
    })
})
app.delete('/student/:id', (req, res) => {
    const sql = "DELETE FROM students WHERE id = ?;"
    var student = req.body.id
    
        db.query(sql, [student], (err, result) => {
            if (err) {
                return res.json({ message: "error" })
            } else {
                return res.json(result)
            }
        })
})

app.post('/student', (req, res) => {
    const sql = "INSERT INTO students(name, email) VALUES (?);"

    var values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json({ message: "error" })
        } else {
            return res.json(result)
        }
    })
})

app.delete('/students/:id', (req, res) => {
    const sql = "DELETE FROM students WHERE id = ?;"
    var student = req.params.id
    
        db.query(sql, [student], (err, result) => {
            if (err) {
                return res.json({ message: "error" })
            } else {
                return res.json(result)
            }
        })
})







