const express = require('express')
const app = express()
const port = process.env.PORT || 4040
const path = require("path")

app.get('/', (req, res) => {
  res.send('Hello Programmer!')
})

// req 
app.get('/inspect',(req,res)=>{
  console.log("Request method:",req.method)
   console.log("Request url:",req.url)
  //  console.log("paramater:",req.params)
   console.log("Query:",req.query)
   console.log("Hearders:",req.headers)

  res.send("inspact reqest now")
})

// res 
app.get("/text",(red,res)=>{
  res.send("this is text roter")
})

app.get("/json",(red,res)=>{
  res.json({message:"this is json data"})
})

app.get("/status",(red,res)=>{
  res.status(404).send("message not found")
})

app.get("/redirect",(red,res)=>{
  res.redirect("/text")


  
})

// Sending Different Types of File
  app.get('/api/user',(req,res)=>{
    const user ={
      id:1,
      name:"monir",
      email:"monirmolla324@gmail.com"
    }
  res.status(200).json({
    success:true,
    message:"user create succedful",
    user
  })
  })

  // send html response 
  app.get("/html",(req,res)=>{
    res.send('<h1>Hello this is html tag</h1>')
  })

  // sending file response 
  app.get("/file",(req,res)=>{
  const filePath = path.join(process.cwd(), 'public','index.html')
  console.log(filePath)
  res.sendFile(filePath)
  })


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
