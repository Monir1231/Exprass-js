const express = require('express');
const NodeCache = require( "node-cache" );
const app = express()
const port = 3000
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
const compression = require('compression')


// middleware cm
app.use(compression())

// middleware 
const cacheMiddleware = (req,res,next)=>{
    const key = req.originalUrl
  const cacheData = myCache.get(key)
  if(cacheData){
    console.log("data cached succedful")
    return res.json(cacheData)
  }
  console.log("first time cached data")
  next()
}

app.get("/data",cacheMiddleware,(req,res)=>{
    const userdata  = {
        name:"monir",
        age:18
    }
    // set cached data 
    myCache.set(req.originalUrl,userdata)
    res.json(userdata)
})

// large data 

app.get("/Large-data",(req,res)=>{
const mydata = "Tis is a large data,"
const LargeData = {message: mydata.repeat(10)}

// set data 
myCache.set(req.originalUrl,LargeData)
res.json(LargeData)


})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})