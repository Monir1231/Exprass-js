const express = require('express')
const ErrorHendler = require('./src/middleware/ErrorHendler')
const CustomError = require('./src/middleware/customError')
const app = express()
const port = 3000




app.get("/",(req,res,next)=>{
  const error = new Error ("Home route Error")
  next(error)
  
})

// app.get('/', (req, res) => {
//  try {
//   res.send("Home page")
//  } catch (error) {
//   res.status(500).json({
//     success: false,
//     message:error.message || "Internal server Error"
    
//   })
//  }
// })

app.get("/not-found",(req,res,next)=>{
  next(new CustomError("Resource not found",404))
})


// glodal middleware 
app.use(ErrorHendler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
