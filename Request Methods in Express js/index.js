const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

// get request 
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// get request 
app.get('/blog',(req,res)=>{
  res.send("this is blog")
})
// post request 
app.post('/contact',(req,res)=>{
  // middleware 
  
  console.log(req.body)
 res.send("message receved")
})



// delete req 

app.delete("/comments/:id",(req,res)=>{
  console.log(req.params)
  console.log("deleting comments using delet request")
  res.send("delete succedful")
})


// route here 
const blogRoutes = require("./src/routes/post.Route.js")
app.use("/blogs",blogRoutes)


// Handling Route Parameters

app.get("/users/:id",(req,res)=>{
  // console.log(req.params)
  const userId = req.params.id
  res.send(`user Id:${userId} `)
 })


//  query string params 

app.get("/search",(req,res)=>{
//  console.log(req.query)
 const {postTitle} = req.query
 console.log(postTitle)
 res.send(`my title post is ${postTitle}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
