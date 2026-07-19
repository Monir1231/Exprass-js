const { error } = require('console');
const express = require('express');
const multer  = require('multer')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs')
// console.log(path)

const storage = multer.diskStorage({
  destination : "uploads/",
  filename:(req,file,cb)=>{
    // uniqe name 
    cb(null,Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage,limits:{
  fileSize: 1024 * 1024 * 2
} })

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

// delete 
app.delete("/delete/:filename",(req,res)=>{
  const FilePath = path.join(process.cwd(), "uploads",req.params.filename)
  fs.unlink(FilePath,(err)=>{
    if(err) return res.status(500).json({error:"File delete succedful"});
    res.status(200).json({message:"File deleted succedful"})
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})