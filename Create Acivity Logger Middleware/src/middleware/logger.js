
const fs = require('fs')
const path = require('path')

const LoggerFile =path.join(process.cwd(),'logs.txt') 

const activityLogger =(req,res,next)=> {
  const timeStamp = new Date().toISOString()
  const LoggerMessage = `[${timeStamp} ${req.method} ${req.url}\n]`
  console.log(LoggerMessage)
  fs.appendFile(LoggerFile,LoggerMessage,(err)=>{
    if(err){
        console.error('error:',err)
    }
  })
  next()
}


module.exports = activityLogger