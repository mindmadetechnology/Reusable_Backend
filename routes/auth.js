const express=require("express");
const cors=require("cors");
const app=express();
const router=express.Router();
app.use(router);
router.use(express.json());

app.use(cors());
const {Register}=require("../Controller/register");
const {Login}=require("../Controller/login");


//Create new customer
router.post("/register",Register);
router.post("/login",Login);

module.exports=router;
