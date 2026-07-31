const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT ||3000
const cors = require('cors')
const ejs = require('ejs');

// middleware 
app.use(express())
app.use(cors())
app.use(express.static("public"))
app.set('view engine','ejs')

// routes 
app.get('/', (req, res) => {
 res.render('index')
})

app.get('/about', (req, res) => {res.render('about')})
app.get('/contact', (req, res) => {res.render('contact')})
app.get('/projcet', (req, res) => {res.render('projcet')})

app.listen(port, () => {
  console.log(`Server is  listening on port ${port}`)
})