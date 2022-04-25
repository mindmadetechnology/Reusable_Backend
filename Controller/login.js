const con=require("../config/db");
const JWT = require('jsonwebtoken');


const Login=(req,res)=>{
    const Email=req.body.Email;
    const Password=req.body.Password;
    con.query("select *from customer where Email = ? AND Password = ?",[Email,Password],(err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            const token = JWT.sign({
                id: result[0].id,
                Email : result[0].Email
            }, 'secret123', { expiresIn: 60 * 60 * 96 })
            res.send({StatusCode:200,message:"Login Success",token:token,email:result.Email})
        }
        else{
            res.send({StatusCode:400,message:"Invalid Username/Password"});
        }
    })



}
module.exports={
    Login
}