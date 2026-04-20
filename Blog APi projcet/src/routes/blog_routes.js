const express = require('express')
const route = express.Router()

let AllblogPost =[
    {
        id:1,
        title:"R15",
        des:"this is R15 bike"
    },
     {
        id:2,
        title:"hero",
        des:"this is hero bike"
    },
    {
        id:3,
        title:"hero",
        des:"this is hero bike"
    },
    {
        id:4,
        title:"hero",
        des:"this is hero bike"
    }
]

// get blogs 

route.get("/",(req,res)=>{
  res.send(AllblogPost)
})

// get blogs by single id 
route.get("/:id",(req,res)=>{
    const {id} =(req.params)
    // console.log("blog id:",id)

    // find exit id 

    const isExitBlog = AllblogPost.find((blog)=> blog.id === parseInt(id))
    console.log(isExitBlog)

    if(!isExitBlog){
        // res.send("404 not found")

        res.status(404).json({message:"404 not found"})
    }
    res.send(isExitBlog)
})

// add new post 
route.post("/add-post",(req,res)=>{
    const {title,des} = req.body
 
    const newBlogs = {id:AllblogPost.length +1 ,title,des}
    AllblogPost.push(newBlogs)
    res.status(200).json({
        message:"New post add succedful",
          newBlogs,
          blog:newBlogs
    })
})

// update a blog by id 

route.put("/update-post/:id",(req,res)=>{
    const {id} = req.params
    const {title,des,author} = req.body
    // console.log(req.body)
    const blog = AllblogPost.find((blog)=> blog.id === parseInt(id))
  
    if(!blog) return res.status(404).json({message:"blog not found"})

        blog.title = title || blog.title
        blog.des = des || blog.title
        blog.author = author 
        res.status(200).json({
            blog:"blog update succedfull",
            blog
        })
})

// delete post 
route.delete("/delete-post/:id",(req,res)=>{
    const {id} = req.params
    console.log(id)

    const blogIndex = AllblogPost.indexOf((blog)=> blog.id === parseInt(id))
    if(blogIndex === -1) return res.send(404).json({message:"Blog not found"})

        AllblogPost.splice(blogIndex,1)
            res.status(200).json({
                message:"post delete succedfull"
            })
        

})

module.exports = route