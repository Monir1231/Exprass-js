
// const ErrorHendler = (err,req,res,next)=>{
//   const ststusCode = err.ststusCode || 500;
//   const message = err.message || "Internal server Error"
//   res.status(ststusCode).json({
//     success: false,
//   message

const CustomError = require("./customError")

    
//   })
// }

// module.exports = ErrorHendler




// const ErrorHendler = (err,req,res,next)=>{
//   const ststusCode = err.ststusCode || 500;
//   const message = err.message || "Internal server Error"
//   res.status(ststusCode).json({
//     success: false,
//   message
    
//   })
// }

// Handling Custom Errors in Middleware

const ErrorHendler = (err,req,res,next)=>{
 if(err instanceof CustomError){
  return res.status(err.statusCode).json({
      success: false,
  message: err.message
  })
 }
 res.status(500).json({
   success: false,
  message:"Internal server error" 
 })
}










module.exports = ErrorHendler