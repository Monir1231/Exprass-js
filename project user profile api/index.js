const  express  = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')
const path = require('path')


app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("welcome")
})

// get user profile 

app.get("/user/profile",(req,res)=>{

    const user = [
        {
        id:1,
        name:"monir",
        email:"monirmolla324@gmail.com",
        age:20
    },
      {
        id:2,
        name:"monir",
        email:"monirmolla325@gmail.com",
        age:23
    },
      {
        id:3,
        name:"monir",
        email:"monirmolla67@gmail.com",
        age:21
    },
    ]
res.send(user)
})

// set cookie 

app.get("/set-custom-cookie",(req,res)=>{
    res.cookie("CustomCookie","123sfdt",{
        maxAge:60000,
        httpOnly:true,
        secure:true

    })
    res.send("cookie set succedful")
})

// get cookie 
app.get("/get-custom-cookie",(req,res)=>{
    const cookie = req.cookies.CustomCookie
    console.log(cookie)
    res.send(`your custom cookie is ${cookie}`)
})

// delete cookie 

app.get("/delete-cookie",(req,res)=>{
    res.clearCookie('CustomCookie');
    res.send("cookie delete succedful")
})

// profile html 

app.get("/profile",(req,res)=>{
    const cookie = req.cookies.CustomCookie
    if(!cookie){
        return res.status(404).json({message:"unauth"})
    }
 const FilePath = path.join(process.cwd(), 'public','public.html');
//  console.log(FilePath)
res.sendFile(FilePath)
})

app.listen(port,()=>{
    console.log(`server is runnig localhost:${port}`)
})
