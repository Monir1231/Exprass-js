// middleware 
const myMiddleware = (req,res,next)=>{
    console.log("middleware is executed")
    next()
}

module.exports = myMiddleware