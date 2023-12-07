const express = require("express")
const mysql = require("mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const Port = process.env.Port || 8000;
const salt = 10

const app = express()
app.use(cookieParser());
app.use(express.json())
app.use(cors())


// app.get('/user',(req,res)=>{
//     res.send('hello World!')
// })

//connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup',

})
db.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('connected')
    }
})


app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    //hashing the password
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error For Hashing Password" });
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Error Registering Record" });
            else {
                res.json({ Status: "Success" });
            }
        })

    });


})

app.post('/login', (req, res) => {
    let sql = "SELECT * FROM users WHERE email=?";

})

app.listen(Port, () => {
    console.log(`Listening on port Number ${Port}`)
})
