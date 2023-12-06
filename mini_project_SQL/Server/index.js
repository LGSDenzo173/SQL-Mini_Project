const express = require("express")
const mysql = require("mysql")
const bcrypt =require ("bcrypt")
const jwt = require("jsonwebtoken")
const cors =  require("cors")
const cookieParser =require("cookie-parser") 
const Port  = 9000;

const app = express()
app.use(cookieParser)
app.use(express.json())
app.use(cors())



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SignUp',

})



app.listen(Port, () =>{
    console.log(`Listening on port Number ${Port}`)
})
