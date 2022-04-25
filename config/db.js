const express=require("express");
const mysql=require("mysql");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"reusable"
});
con.connect((err)=>{
    if(!err){
        console.log("Connected Successfully");
    }
    else{
        console.log("Connection Failed Error"); 
    }
})
module.exports=con;