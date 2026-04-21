const express = require('express')
const activityLogger = require('./src/middleware/logger')
const app = express()
const port = process.env.PORT ||4040

// global 
app.use(activityLogger)

app.get('/', (req, res) => {
  res.send('Acivity Logger Middleware')
})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
