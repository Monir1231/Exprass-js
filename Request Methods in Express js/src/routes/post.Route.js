const express = require('express')
const route = express()


// put request edit and update
route.put("/edit-post/:id",(req,res)=>{
  console.log("editing post req by put req")
  res.send("edting post succedfull")
})

// patch request edit and update
route.patch("/edit-post/:id",(req,res)=>{
  console.log("editing post req by patch req")
  res.send("edting post succedfull")
})

module.exports = route;