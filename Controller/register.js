const con=require("../config/db");
const moment = require('moment-timezone');

const Register=(req,res)=>{
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Created_On = moment().tz('Asia/Kolkata').format("DD-MM-YYYY hh:mm A");

    con.query("select * from customer Where Email=?",[Email],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            res.send({StatusCode:400,message :"Email already exist"});
        }
        else{
            con.query("insert into customer (Email,Password,Created_On) values (?,?,?)",[Email,Password,Created_On],(err,result)=>{
                if(!err){
                    res.send({StatusCode:200,message:"Customer Added successfully",result});
                }
                else{
                    res.send({StatusCode:400,message:"Failed"});
                }
            })
        }
    }) 
}
module.exports={
    Register
}

