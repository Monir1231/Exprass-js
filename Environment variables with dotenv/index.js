const express = require('express')
const app = express()
const result = require('dotenv').config()
const port = process.env.PORT || 3000

console.log(process.env.PASSWORD)

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(port,()=>{
    console.log(`server is running port ${port}`)
})