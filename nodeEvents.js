// const fs=require("fs");
// const rs=fs.createReadStream('./event.txt');
// rs.on("open",()=>{
//     console.log("demo file is open");
// });

// how to create custom events

const events=require('events');
const eventEmmiter=new events.EventEmitter();
eventEmmiter.on("speak",(name)=>{
    console.log(name," is speaking");
})
eventEmmiter.on("watch",(name)=>{
    console.log(name," is watching");
})

eventEmmiter.on("dance",(name)=>{
    console.log(name," is dancing");
})

eventEmmiter.emit("speak","Yashwanth");
eventEmmiter.emit("watch","Nishant");
eventEmmiter.emit("dance","Ketan");