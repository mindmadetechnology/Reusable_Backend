const express=require("express");
const app=express();

app.use(express.json());

const authRoute = require("./routes/auth");
app.use("/api",authRoute);

app.listen(3001,()=>{
    console.log("server running");
})