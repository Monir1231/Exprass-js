const express = require('express')
const app = express()
const port = 3000
const fs =require('fs')

// app.get('/', (err,req, res,next) => {
//   fs.readFile("Ex.txt",(err,data)=>{
//     if(err){
//       console.log(err)
//     }else{
//       console.log(data.toString())
//     }
//   })
  

// 

app.get("/",(req,res,next)=>{
  const error = new Error("Something went wrong");
  error.status = 500;
  next(error)

})

// error middleware

const middleware = (err,req,res,next)=>{
  res.status(err.status || 500).json({
    success:false,
    message: err.message || "inrernal server error"
  })
}


// use middleware 

app.use(middleware)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
