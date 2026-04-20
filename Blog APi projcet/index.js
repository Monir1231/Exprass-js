const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// default middleware 
app.use(express.json())

// using blog route
const blogRoutes = require('./src/routes/blog_routes.js')
app.use("/blogs",blogRoutes)

app.get('/', (req, res) => {
  res.send('Blog server is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
