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
    const { name, email, password } = req.body
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            throw err
            } else {
                const sql = "INSERT INTO login (name,email,password) VALUES (?,?,?)"
                    const values = [name, email, hash]
                    db.query(sql, values, (err, result) => {
                        if (err) {
                            throw err
                            } else {
                                return res.json({Status: "Success"})
                                }
                                })
                                }

                            })

    //Both code's Work
    // const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    // //hashing the password
    // bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    //     if (err) return res.json({ Error: "Error For Hashing Password" });
    //     const values = [
    //         req.body.name,
    //         req.body.email,
    //         hash
    //     ]
    //     db.query(sql, [values], (err, result) => {
    //         if (err) return res.json({ Error: "Error Registering Record" });
    //         else {
    //             res.json({ Status: "Success" });
    //         }
    //     })

    // });


})


app.post('/login', (req,res)=>{
    const sql = 'SELECT * FROM login WHERE email = ? ';
    db.query(sql,[req.body.email], (err, data)=>{
        if(err ) return res.json({Error: "Login error in server"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err,response)=>{
                if(err) return res.json({Error: "Error in comparing password"})
                if(response) {
                    return res.json({Status: "Success"})
                }else{
                    return res.json({Error: "Password does not Matched"})
                }
                })
        } else{
            return res.json({Error : "No email Exist"})
        }
        
        
    })
})

app.listen(Port, () => {
    console.log(`Listening on port Number ${Port}`)
})
