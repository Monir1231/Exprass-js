const express = require('express')
const app = express()
const port = process.env.PORT ||3000
const exphbs = require('express-handlebars')
// console.log(exphbs)

app.engine('hbs',exphbs.engine({extname: 'hbs',defaultLayout:false}))
app.set('view engine', 'hbs')
app.set('views','./views')

app.get('/', (req, res) => {
  const userData = {
    name:"Monir",
    email:"monirmolla342@gmail.com",
    age:34,
    isAdmin:true,
    hobbies:["coding","sleep","crypto"]
  }
  res.render('profile',userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
