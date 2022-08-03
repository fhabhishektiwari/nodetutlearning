const nodeMailer=require("nodemailer");
var transport=nodeMailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'abhishektiwarifh@gmail.com',
        pass:''//type your password here,
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
