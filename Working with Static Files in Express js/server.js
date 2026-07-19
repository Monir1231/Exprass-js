const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// middleware

app.use(express.static(path.join(process.cwd(),'public')))

app.get('/', (req, res) => {
 const uslpath = path.join(process.cwd(),'public','index.html')
 res.sendFile(uslpath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
