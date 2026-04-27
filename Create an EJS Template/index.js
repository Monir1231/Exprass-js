const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const path =require('path')
// console.log(path)


app.set("view engine","ejs")
app.set("views",path.join(process.cwd(),'views'))

app.get('/', (req, res) => {
 res.render("index",{title:'home page', message:"welcome to EJS"})
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})
