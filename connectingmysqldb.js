const mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testing_user_data"
});

con.connect((error)=>{
    if(error) throw error;
    // console.log("connected");
    con.query("Select * from student_data",(error,result)=>{
        if(error) throw error;
        console.log("all results are here",result[0].student_name);
    });
})