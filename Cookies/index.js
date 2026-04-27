const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

// muddleware 
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/headers",(req,res)=>{
    res.set("custom-headers-1","this is custom headers")
res.send("headers send correctly")
})

// set cookie 

app.get("/set-cookie",(req,res)=>{
  const token = "adg3hjgtth45bfhh"
  res.cookie("token",token,{
    httpOnly:true,
    expires:new Date(Date.now() + 900000),
    secure:true
  })
  
res.send("cookie send succedful")
})

// get cooke 
app.get("/dashboard",(req,res)=>{
const token = req.cookies.token;
console.log(token)
if(!token){
 return res.send("you are not auth")
}
res.send("welcome to dashboard")
})


// clear cookes

app.get("/clear-cookes",(req ,res)=>{
  res.clearCookie("token")
  res.send("clear Cookes set succedful")
})


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
