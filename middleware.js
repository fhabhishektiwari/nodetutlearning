module.exports=(req,res,next)=>{
    console.log("Current route is from other file",req.originalUrl);
    next();
}