const { error } = require('console');
const express = require('express');
const multer  = require('multer')
const app = express()
const port = 3000
const path = require('path')
// console.log(path)

const storage = multer.diskStorage({
  destination : "uploads/",
  filename:(req,file,cb)=>{
    // uniqe name 
    cb(null,Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// middleware 
app.use(express.static("public"))
app.use("/uploads",express.static("uploads"))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html")
})

// post route 

app.post("/upload",upload.single('image'),(req,res)=>{
 
 if(!req.file) return res.status(400).json({error:'File not Found'})
  res.status(200).json({
  message:"File Upload successful",
  file: req.file.filename
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})