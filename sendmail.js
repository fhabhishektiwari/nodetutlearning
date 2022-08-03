const nodeMailer=require("nodemailer");
var transport=nodeMailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'abhishektiwarifh@gmail.com',
<<<<<<< HEAD
        pass:'',//type your password here....
=======
        pass:''//type your password here,
>>>>>>> 8ce3fc71ca6b45a2d7e3e90d85e550cba0342c61
    }
})

var mailOptions={
    from:'abhishektiwarifh@gmail.com',
    to:'abhishektiwarifh@gmail.com',
    subject:'test node mail module',
    text:'Hello Abhishek Tiwari, Welcome to js world!'
}

transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("email has been sent",info.response)
    }
})
