const express = require('express')
const ActiveLogger = require('./src/middleware/logger')
const myMiddleware = require('./src/middleware/Myniddleware')
const app = express()
const port =  process.env.PORT ||3000
const morgan = require('morgan')
const cors = require('cors')



// defult middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(express.static('./src/public'))
// third party middleware 
app.use(morgan('combined'))
app.use(cors({
  origin:[`http://localhost:3000/`],
  credentials:true,
  allowedHeaders:['Content-Type','Authorization'],
  methods:['GET','POST','DELETE','PUT','PUTCH']
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//use a custom middleware

app.use(ActiveLogger)

// post req 

app.post("/new-post",(req,res)=>{
console.log(req.body)
res.send("post request succedful")
})


app.get("/product",myMiddleware,(req,res)=>{
res.send("product page...")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
